'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Loader2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../components/ui/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      Cookies.set('jwt-token', response.data.token, { expires: 7 });
      toast.success('Signed in successfully');
      router.push('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container flex flex-col items-center justify-center min-h-screen px-4'>
      <div className='w-full max-w-sm space-y-6'>
        <div className='text-center'>
          <h1 className='text-2xl font-semibold'>Sign In</h1>
        </div>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='you@example.com'
            />
          </div>
          <div>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='••••••••'
            />
          </div>
          <Button type='submit' disabled={isLoading} className='w-full'>
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />} Sign In
          </Button>
        </form>
        <div className='text-center text-sm'>
          Don't have an account?
          <Link href='/sign-up' className='ml-1 text-blue-600 hover:underline'>Sign Up <ArrowRight className='inline h-4 w-4' /></Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;