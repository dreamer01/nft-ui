import React, { useEffect, useState } from 'react';

function Bid({ price, token, onClose }) {
  const [bidValue, setBid] = useState(price[token]);

  const handleConfirm = () => {
    window.localStorage.setItem(
      'tokensPrice',
      JSON.stringify({ ...price, [token]: bidValue })
    );
    onClose();
  };

  return (
    <div
      className='flex fixed top-0 left-0 bg-gray-500 bg-opacity-75 transition-opacity items-end sm:items-center justify-center h-screen w-screen p-4 text-center sm:p-0 overflow-hidden'
      onClick={(e) => {
        onClose();
      }}
    >
      <div
        className='flex relative z-100 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full'
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <img className='w-1/2' src={`/img/tokens/${token}.png`} />
        <div className='p-4 flex-col h-full justify-between'>
          <p className='font-bold text-2xl'>{price[token]} ETH</p>
          <div className='mt-16'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              for='bid'
            >
              Your Bid
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='bid'
              type='number'
              value={bidValue}
              onChange={(e) => setBid(e.target.value)}
            />
          </div>
          <button
            className='mt-16 border-2 w-full border-green-600 p-2'
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bid;
