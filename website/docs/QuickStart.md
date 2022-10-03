---
title: Quick Start
sidebar_position: 1
---

Hello my friend 👋 Welcome onboard 🛳

Suiet wallet kit is a wallet aggregator for DApps to interact with all the wallets in SUI💧 ecosystem easily. 🥳

Let's try our kit and empower your dapp in minutes. 🪄

## 🔨 Setup

First of all, let's install the npm package `@suiet/wallet-kit` to your project.

```shell
npm install @suiet/wallet-kit
# or
yarn add @suiet/wallet-kit
# or
pnpm install @suiet/wallet-kit
```

Then wrap your `<App />` with our context provider, so that our hooks can work nicely inside your dapp.

Oh don't forget to import our css to enable default styles 🎨

```jsx
import { WalletProvider } from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';

const App = () => {
  return (
    <WalletProvider>
      <Yourapp />
    </WalletProvider>
  );
};
```

> By default, suiet kit will load all the supported wallets to the list💡

## 🕹 Place `<ConnectButton />` wherever you like

Just import our `<ConnectButton />` and place to anywhere you like, such as Header.


```jsx
import { ConnectButton } from '@suiet/wallet-kit';

const App = () => {
  return (
    <>
      <header>
        <ConnectButton />
      </header>
      <... />
    </>
  )
};
```

## 🪝 Use wallet capacities 

Now your dapp is already empowered and able to call wallet capacities.🎉

Continue to BUIDL your amazing dapp and join the incoming Sui-nami! 🌊

```jsx
import { useWallet } from '@suiet/wallet-kit';

const App = () => {
  const {
    wallet,
    connected,
    connecting,
    getAccounts,
    executeMoveCall,
    signMessage,
  } = useWallet()
  return (<.../>)
};
```

## 💧 Demo Playground

Feel free to play with our [Create-React-App Demo](https://github.com/suiet/wallet-kit/examples/with-cra) 🔗

<img src="/assets/integration-example.png">