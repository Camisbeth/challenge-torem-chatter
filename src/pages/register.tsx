import { useEffect } from 'react';
import RegisterForm from '../layout/RegisterForm';
import MainLeftSide from './mainLeftSide';
import { getJWT } from '../utils/handleJWT';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  useEffect(() => {
    const JWT = getJWT();

    if (JWT) {
      router.push('/chat');
    }
  }, []);

  return (
    <div className="main-wrapper d-flex row flex-grow-1 body-height">
      <MainLeftSide />
      <RegisterForm />
    </div>
  );
}
export default Home;
