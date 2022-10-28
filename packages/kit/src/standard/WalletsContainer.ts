import { initialize, InitializedWallets } from '@wallet-standard/app';
import mitt, { Emitter } from 'mitt';
import { isStandardWalletAdapterCompatibleWallet } from '@mysten/wallet-standard';
import { StandardWalletAdapter } from './WalletStandard';

type Events = {
  changed: void;
};

export class WalletContainer {
  #wallets: InitializedWallets;
  #adapters: Map<string, StandardWalletAdapter>;
  #events: Emitter<Events>;

  constructor() {
    this.#adapters = new Map();
    this.#wallets = initialize();
    this.#events = mitt();

    this.#wallets.on('register', () => {
      this.#events.emit('changed');
    });

    this.#wallets.on('unregister', () => {
      this.#events.emit('changed');
    });
  }

  get() {
    const filtered = this.#wallets
      .get()
      .filter(isStandardWalletAdapterCompatibleWallet);

    filtered.forEach((wallet) => {
      if (!this.#adapters.has(wallet.name)) {
        this.#adapters.set(wallet.name, new StandardWalletAdapter({ wallet }));
      }
    });

    return [...this.#adapters.values()];
  }

  on<T extends keyof Events>(
    eventName: T,
    callback: (data: Events[T]) => void
  ) {
    this.#events.on(eventName, callback);
    return () => {
      this.#events.off(eventName, callback);
    };
  }
}
