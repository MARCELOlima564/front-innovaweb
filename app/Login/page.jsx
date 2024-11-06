'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '@/app/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/DashBoard');
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      router.push('/DashBoard');
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles['login-reg-panel']}>
        <div className={styles['white-panel']}>
          <div className={styles.loginContainer}>
            <h2 className={styles.loginTitle}>Login</h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  required
                  className={styles.loginInput}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  required
                  className={styles.loginInput}
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {error && (
                <div className={styles.loginError}>
                  {error}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={styles.loginButton}
                >
                  {loading ? 'Carregando...' : 'Entrar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
