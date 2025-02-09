import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'wamiq@cognitex.ltd' && password === 'cogni194') {
      onLogin(email);  // Pass the email to the login function
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#142124]">
     <div className="bg-[#142124b2] p-8 rounded-lg shadow-lg w-full max-w-md border border-[#396268]/30">
        <h2 className="text-3xl font-light text-neutral-300 text-center mb-8">Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Mail className="text-neutral-400" size={20} />
              <label className="text-neutral-300 text-sm">Email</label>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#396268] text-[#D9D9D9] rounded-md p-3 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Lock className="text-neutral-400" size={20} />
              <label className="text-neutral-300 text-sm">Password</label>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#396268] text-[#D9D9D9] rounded-md p-3 outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#396268] hover:bg-[#2a484d] text-[#D9D9D9] rounded-md p-3 transition-colors duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;