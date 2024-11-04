"use client"
import styles from './login.module.css';
import { useState } from 'react';
import Image from 'next/image';
import AuthLogin from '../components/AuthLogin'


const Login = () => {
  const [error, setError] = useState(null);
  return (
    <>
      {error && <PopUpError error={error} />}
      <div className={styles.divpai}>
        <AuthLogin setError={setError} />
      </div>
    </>
  );
};

export default Login;   