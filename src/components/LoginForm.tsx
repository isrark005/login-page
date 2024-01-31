import React, { useState, useEffect } from 'react';
import { FaUser, FaLock  } from "react-icons/fa";


interface LoginFormProps {
  timer: number 
}

const LoginForm: React.FC<LoginFormProps> = ({timer}): any => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState(false)

  
    

  const handleSignIn = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        console.log(response);
        
        alert('Login succesful');
      } else {
        
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    } finally{
      setEmail('');
      setPassword('')
    }
  };

  useEffect(() => {
    if (timer === 0) {
      setIsDisabled(true);
    }
  }, [timer]);

  return (
    <div className='m-5 flex flex-col gap-4' >
      <label className='flex items-center gap-3 bg-white p-3 border-gray-200 rounded-lg group border-2 focus-within:border-blue-400'>
        <FaUser />
        <input type="text" disabled={isDisabled}  placeholder='Email' className={`grow focus:outline-none ${timer <= 0 && 'cursor-not-allowed'}`} value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      
      <label className='flex items-center gap-3 bg-white p-3 border-gray-200 rounded-lg  border-2  focus-within:border-blue-400'>
        <FaLock />
        <input type="password" disabled={isDisabled}  placeholder='Password' className={`grow focus:outline-none ${timer <= 0 && 'cursor-not-allowed'}`} value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      
      <button type='button' disabled={isDisabled}   onClick={handleSignIn} className={`self-start px-5 py-2 rounded-lg text-white bg-blue-400 ${timer <= 0 && 'cursor-not-allowed'}`}>Sign In</button>
    </div>
  );
};

export default LoginForm;
