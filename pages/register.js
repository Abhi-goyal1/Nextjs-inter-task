"use client";  // Mark the component as a Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation';  // Use this instead of 'next/router'

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle registration logic here

    // Example: After successful registration, redirect to the dashboard
    router.push('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
