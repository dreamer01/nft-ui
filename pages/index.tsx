import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';
import Token from '../components/Token';
import Bid from '../components/Bid';

const Home: NextPage = () => {
  const [showBid, toggleBid] = useState(false);
  const [selectedToken, selectToken] = useState('');
  const [price, setPrice] = useState({});

  useEffect(() => {
    let prices = window.localStorage.getItem('tokensPrice');
    prices && setPrice(JSON.parse(prices));
  }, []);

  const updatePrice = () => {
    let prices = window.localStorage.getItem('tokensPrice');
    prices && setPrice(JSON.parse(prices));
  };

  const handleClose = () => {
    updatePrice();
    toggleBid(false);
  };

  return (
    <div className='mx-24 my-12'>
      <Header />
      <h1>
        Tokens Mynted By :{' '}
        <a
          className='hover:text-pink-500'
          href='https://www.behance.net/gallery/101711327/NBA-Grunge-Posters?tracking_source=search_projects%7Cnike%20art'
        >
          Nick Arley
        </a>{' '}
      </h1>
      <main>
        <section className='flex justify-between mt-10'>
          <div className='bg-slate-200 w-1/4 drop-shadow-lg	rounded-sm border-1'>
            <Token src='/img/tokens/n-kobe.png' />
            <div className='m-2 flex justify-between'>
              <p className='text-2xl font-bold'>{price['n-kobe']} ETH</p>
              <p className='text-xl text-neutral-500'>ox8247587#####</p>
            </div>
            <div className='flex justify-center items-center m-4 hover:bg-red-600 hover:text-white'>
              <button
                className=' border-2 border-red-600 w-full'
                onClick={() => {
                  toggleBid(true);
                  selectToken('n-kobe');
                }}
              >
                Bid
              </button>
            </div>
          </div>
          <div className='bg-slate-200 w-1/4 drop-shadow-lg	rounded-sm border-1'>
            <Token src='/img/tokens/n-harden.png' />
            <div className='m-2 flex justify-between'>
              <p className='text-2xl font-bold'>{price['n-harden']} ETH</p>
              <p className='text-xl text-neutral-500'>ox8247587#####</p>
            </div>
            <div className='flex justify-center items-center m-4 hover:bg-red-600 hover:text-white'>
              <button
                className=' border-2 border-red-600 w-full'
                onClick={() => {
                  toggleBid(true);
                  selectToken('n-harden');
                }}
              >
                Bid
              </button>
            </div>
          </div>
          <div className='bg-slate-200 w-1/4 drop-shadow-lg	rounded-sm border-1'>
            <Token src='/img/tokens/n-durant.png' />
            <div className='m-2 flex justify-between'>
              <p className='text-2xl font-bold'>0.3 ETH</p>
              <p className='text-xl text-neutral-500'>ox8247587#####</p>
            </div>
            <div className='flex justify-center items-center m-4 hover:bg-red-600 hover:text-white'>
              <button
                className=' border-2 border-red-600 w-full'
                onClick={() => {
                  toggleBid(true);
                  selectToken('n-durant');
                }}
              >
                Bid
              </button>
            </div>
          </div>
        </section>

        <section className='flex justify-between mt-10'>
          <div className='bg-slate-200 w-1/4 drop-shadow-lg	rounded-sm border-1'>
            <Token src='/img/tokens/n-irvin.png' />
            <div className='m-2 flex justify-between'>
              <p className='text-2xl font-bold'>0.3 ETH</p>
              <p className='text-xl text-neutral-500'>ox8247587#####</p>
            </div>
            <div className='flex justify-center items-center m-4 hover:bg-red-600 hover:text-white'>
              <button
                className=' border-2 border-red-600 w-full'
                onClick={() => {
                  toggleBid(true);
                  selectToken('n-irvin');
                }}
              >
                Bid
              </button>
            </div>
          </div>
          <div className='bg-slate-200 w-1/4 drop-shadow-lg	rounded-sm border-1'>
            <Token src='/img/tokens/n-anteto.png' />
            <div className='m-2 flex justify-between'>
              <p className='text-2xl font-bold'>0.3 ETH</p>
              <p className='text-xl text-neutral-500'>ox8247587#####</p>
            </div>
            <div className='flex justify-center items-center m-4 hover:bg-red-600 hover:text-white'>
              <button
                className=' border-2 border-red-600 w-full'
                onClick={() => {
                  toggleBid(true);
                  selectToken('n-anteto');
                }}
              >
                Bid
              </button>
            </div>
          </div>
          <div className='bg-slate-200 w-1/4 drop-shadow-lg	rounded-sm border-1'>
            <Token src='/img/tokens/n-harden-2.png' />
            <div className='m-2 flex justify-between'>
              <p className='text-2xl font-bold'>0.3 ETH</p>
              <p className='text-xl text-neutral-500'>ox8247587#####</p>
            </div>
            <div className='flex justify-center items-center m-4 hover:bg-red-600 hover:text-white'>
              <button
                className=' border-2 border-red-600 w-full'
                onClick={() => {
                  toggleBid(true);
                  selectToken('n-harden-2');
                }}
              >
                Bid
              </button>
            </div>
          </div>
        </section>
      </main>
      {showBid && (
        <Bid price={price} token={selectedToken} onClose={handleClose} />
      )}
    </div>
  );
};

export default Home;
