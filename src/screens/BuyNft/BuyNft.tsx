import { useTonAddress } from '@tonconnect/ui-react';
import { mintNewNft } from 'hooks/useNftContract';
import { useTonClient } from 'hooks/useTonClient';
import { useTonConnect } from 'hooks/useTonConnect';
import { Address } from 'ton';

import NFTCard from 'components/card/nft-card';

import nftItem from '/public/img/nfts/NFT-item.jpeg';

export function BuyNft() {
  const rawAddress = useTonAddress();
  const { client } = useTonClient();
  const { sender } = useTonConnect();

  const mintNft = async () => {
    if (client) {
      mintNewNft(client!, Address.parse(rawAddress), sender!);
    } else {
      alert('Please connect to wallet first');
    }
  };

  return (
    <div className="flex h-[70vh] justify-center items-center">
      <NFTCard
        onClick={mintNft}
        title="Celestial Harmonics"
        author="Lila Everwood"
        image={nftItem}
        price={1}
        download="#"
        extra="max-w-[370px] !h-auto"
      />
    </div>
  );
}
