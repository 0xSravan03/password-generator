import { useState, useEffect } from 'react';

export default function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <div className='w-full max-w-md bg-gray-800 text-orange-500 mx-auto shadow-md rounded-lg px-4 py-3 my-20'>
      <h1 className='text-center text-white my-3 text-2xl'>Password Generator</h1>
      <div className='w-full flex flex-row gap-4 shadow rounded-lg justify-between px-4 my-4'>
        <input type="text" value={password} className='w-full outline-none px-2 py-1.5 bg-white rounded-md font-semibold text-black'  placeholder='password' disabled />
        <button className='px-3 rounded-xl bg-blue-400 outline-none text-white font-semibold hover:scale-110 transition-all'>copy</button>
      </div>
      <div className='w-full px-4'>
        <input type="slider" />
      </div>
    </div>
  );
}