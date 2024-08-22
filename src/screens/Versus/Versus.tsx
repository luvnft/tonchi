import avatar3 from '@/assets/img/avatars/avatar3.png?url';
import avatar11 from '@/assets/img/avatars/avatar11.png?url';
import BattleCard from '@/components/cards/battle-card';

export function Versus() {
  return (
    <div className="flex flex-col w-full h-full gap-6">
      <h2 className="mb-4 text-2xl font-bold text-navy-700 dark:text-white">Versus</h2>

      <BattleCard
        title="Luna Harmonix VS Eclipse Rhythm?"
        imageLeft={avatar3}
        imageRight={avatar11}
        buttonLeft="Luna"
        buttonRight="Eclipse"
      />
    </div>
  );
}
