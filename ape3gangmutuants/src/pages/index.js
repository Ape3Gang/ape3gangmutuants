import { useState } from 'react';

export default function Home() {
  const [wallet, setWallet] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWallet(accounts[0]);
      } catch (err) {
        alert('Gagal connect wallet!');
      }
    } else {
      alert('Metamask tidak ditemukan!');
    }
  };

  return (
    <div className="container">
      <h1>Ape3GangMutuants</h1>
      <p>Gabung & menangkan APE setiap hari!</p>

      <button onClick={connectWallet}>Connect Wallet</button>

      <p>
        Wallet: <br />
        {wallet ? wallet : 'Belum terhubung'}
      </p>

      <div className="pot-box">
        <p>Total Pot Hari Ini:</p>
        <h2>12,345 APE</h2>
      </div>

      <button className="join-button">Gabung Pot</button>
    </div>
  );
}
