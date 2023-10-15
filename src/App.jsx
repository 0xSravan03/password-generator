import { useState, useEffect, useCallback } from 'react';

export default function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let specialChars = "!@#$%^&*()_+";
    let numbers = "1234567890";

    if (isNumberAllowed) {
      str += numbers;
    }
    if (isCharacterAllowed) {
      str += specialChars;
    }

    let _password = '';
    for (let i = 0; i < length; i++) {
      _password += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(_password); // updating state variable password with newly created passsword
  }, [length, isCharacterAllowed, isNumberAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isCharacterAllowed, isNumberAllowed]);

  return (
    <div className='w-full max-w-md bg-gray-800 text-orange-500 mx-auto shadow-md rounded-lg px-4 py-5 my-20'>
      <h1 className='text-center text-white my-3 text-2xl'>Password Generator</h1>
      <div className='w-full flex flex-row gap-4 shadow rounded-lg justify-between px-4 my-4'>
        <input type="text" value={password} className='w-full outline-none px-2 py-2 bg-white rounded-md font-semibold text-black'  placeholder='password' disabled />
        <button className='px-3 rounded-xl bg-blue-400 outline-none text-white font-semibold hover:scale-110 transition-all' >copy</button>
      </div>
      <div className='w-full px-4 flex center justify-between flex-wrap py-1.5'>
        <input id="range" name="passwordSize" className='hover:cursor-pointer' type="range" min={6} max={20} defaultValue={8} onChange={(e) => setLength(e.target.value)} />{`${length}`}
        <div className='flex items-center justify-center gap-2'>
          <label htmlFor='isNumber'>Numbers</label>{" "}<input type="checkbox" id="isNumber" onChange={(e) => setIsNumberAllowed(e.target.checked)} className='hover:cursor-pointer' />
        </div>
        <div className='flex items-center justify-center gap-2'>
          <label htmlFor='isChar'>Characters</label>{" "}<input type="checkbox" id="isChar" onChange={(e) => setIsCharacterAllowed(e.target.checked)} className='hover:cursor-pointer'/>
        </div>
      </div>
    </div>
  );
}