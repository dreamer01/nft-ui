import React from 'react';

function Header() {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex'>
        <img className='w-12' src='/img/logo.png' />
        <h2 className='pl-4 text-pink-600 font-bold text-2xl'>Myx Tokens</h2>
      </div>
      <img className='w-12' src='/img/wallet.png' />
    </div>
  );
}

export default Header;
