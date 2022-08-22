import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';
import Token from '../components/Token';

const Home: NextPage = () => {
  return (
    <div className='m-12'>
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
          <div className='bg-slate-200 w-1/4 drop-shadow-md	rounded-sm border-1'>
            <Token src='/img/tokens/n-kobe.png' />
            <div className='m-2 flex justify-between'>
              <p className='text-2xl font-bold'>0.3 ETH</p>
              <p className='text-xl text-neutral-500'>ox8247587#####</p>
            </div>
            <div className='flex justify-center items-center m-4 hover:bg-red-600 hover:text-white'>
              <button className=' border-2 border-red-600 w-full'>Bid</button>
            </div>
          </div>
          <div className='bg-slate-200 w-1/4 drop-shadow-md	rounded-sm border-1'>
            <Token src='/img/tokens/n-harden.png' />
            <div className='m-2 flex justify-between'>
              <p className='text-2xl font-bold'>0.3 ETH</p>
              <p className='text-xl text-neutral-500'>ox8247587#####</p>
            </div>
            <div className='flex justify-center items-center m-4 hover:bg-red-600 hover:text-white'>
              <button className=' border-2 border-red-600 w-full'>Bid</button>
            </div>
          </div>
          <div className='bg-slate-200 w-1/4 drop-shadow-md	rounded-sm border-1'>
            <Token src='/img/tokens/n-durant.png' />
            <div className='m-2 flex justify-between'>
              <p className='text-2xl font-bold'>0.3 ETH</p>
              <p className='text-xl text-neutral-500'>ox8247587#####</p>
            </div>
            <div className='flex justify-center items-center m-4 hover:bg-red-600 hover:text-white'>
              <button className=' border-2 border-red-600 w-full'>Bid</button>
            </div>
          </div>
        </section>

        <section className='flex justify-between mt-10'>
          <div className='bg-slate-200 w-1/4 drop-shadow-md	rounded-sm border-1'>
            <Token src='/img/tokens/n-irvin.png' />
            <div className='m-2 flex justify-between'>
              <p className='text-2xl font-bold'>0.3 ETH</p>
              <p className='text-xl text-neutral-500'>ox8247587#####</p>
            </div>
            <div className='flex justify-center items-center m-4 hover:bg-red-600 hover:text-white'>
              <button className=' border-2 border-red-600 w-full'>Bid</button>
            </div>
          </div>
          <div className='bg-slate-200 w-1/4 drop-shadow-md	rounded-sm border-1'>
            <Token src='/img/tokens/n-anteto.png' />
            <div className='m-2 flex justify-between'>
              <p className='text-2xl font-bold'>0.3 ETH</p>
              <p className='text-xl text-neutral-500'>ox8247587#####</p>
            </div>
            <div className='flex justify-center items-center m-4 hover:bg-red-600 hover:text-white'>
              <button className=' border-2 border-red-600 w-full'>Bid</button>
            </div>
          </div>
          <div className='bg-slate-200 w-1/4 drop-shadow-md	rounded-sm border-1'>
            <Token src='/img/tokens/n-harden-2.png' />
            <div className='m-2 flex justify-between'>
              <p className='text-2xl font-bold'>0.3 ETH</p>
              <p className='text-xl text-neutral-500'>ox8247587#####</p>
            </div>
            <div className='flex justify-center items-center m-4 hover:bg-red-600 hover:text-white'>
              <button className=' border-2 border-red-600 w-full'>Bid</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
