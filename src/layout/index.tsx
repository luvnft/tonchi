import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import WebApp from '@twa-dev/sdk';

import Alert from '@/components/alert/alert.tsx';
import { AudioPlayer } from '@/components/audio-player';
import Navbar from '@/components/navbar/navbar.tsx';
import { increase } from '@/store/slices/balance.ts';

import 'react-toastify/dist/ReactToastify.css';

export function Layout() {
  const dispatch = useDispatch();
  const [showWelcomeAlert, setShowWelcomeAlert] = useState(false);

  useEffect(() => {
    const user = WebApp.initDataUnsafe.user?.username;
    const newUser = window.localStorage.getItem('newUser');
    setShowWelcomeAlert(!newUser);

    if (user && !newUser) {
      window.localStorage.setItem('newUser', user);
      window.localStorage.setItem('quests', user);
      dispatch(increase(10));
      toast(`🦄 We've added 100 Tune coins to your balance as a welcome bonus!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full min-h-screen p-5 text-white bg-black">
      <Navbar />

      {showWelcomeAlert && (
        <Alert
          customHeading="🎉 Welcome to TonChi 🎶"
          type="success"
          text={
            <>
              <p>TonChi is a peer-to-peer music streaming platform powered by the TON blockchain. Discover and stream the new music industry in Telegram!</p>
              <br />
              <p>🚀 Quick Start:</p>
              <ul className="ml-5 list-disc">
                <li>Connect your wallet 🎟️</li>
                <li>Explore new tracks 🎧</li>
                <li>Vibe with your tribe 🕺💃</li>
              </ul>
              <br />
              <p>Made by the <a href="https://t.me/hahznft" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Wizard of Hahz</a></p>
            </>
          }
        />
      )}

      <main className="transition-all py-[35px] font-dm">
        <Outlet />
      </main>

      <div className="mx-[-20px]">
        <AudioPlayer />
      </div>

      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
