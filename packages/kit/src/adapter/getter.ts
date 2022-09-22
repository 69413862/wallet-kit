import { Wallet, WalletInstance, WalletList } from './KitAdapter';
import { sui } from './sui';
import { suiet } from './suiet';

interface WalletListItem extends Wallet {
  index: number;
  group: string;
}

function adapterInstance(walletList: WalletList) {
  const newWallets: WalletInstance[] = [];
  let index = -1;

  const walletItemList: WalletListItem[] = [];

  walletList.forEach(({ wallets }) => {
    wallets.forEach((wallet) => {
      index++;

      const walletListItem = {
        ...wallet,
        index,
        group: 'Popular', // default group
      };

      walletItemList.push(walletListItem);
    });
  });

  walletItemList.forEach(({ createAdapter, name, index, ...rest }) => {
    const { adapter } = createAdapter();

    const walletInstance: WalletInstance = {
      adapter,
      name,
      index,
      ...rest,
    };

    newWallets.push(walletInstance);
  });

  return newWallets;
}

export function getDefaultWallets() {
  const wallets: WalletList = [
    {
      wallets: [sui()],
    },
  ];

  return adapterInstance(wallets);
}

export function getAllWallets() {
  const wallets: WalletList = [
    {
      wallets: [suiet()],
    },
    {
      wallets: [sui()],
    },
  ];

  return adapterInstance(wallets);
}
