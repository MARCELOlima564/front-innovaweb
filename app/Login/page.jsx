'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import { motion } from 'framer-motion';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      // Redireciona imediatamente para a página de CrudCursos após o login bem-sucedido
      router.push('/CrudCursos');
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:4000//auth/login'
        , { 
        method: 'POST',
        body: JSON.stringify({ email, senha: password }),
        headers: { 'Content-Type': 'application/json' },
      });
    
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token); // Exemplo, se o backend retornar um token
        setIsAuthenticated(true);  // Atualiza o estado de autenticação
      } else {
        setError(data.message || 'Erro no login');
      }
    } catch (err) {
      console.error('Erro ao tentar fazer login aaaaaa:', err);
      setError('Erro ao tentar fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className={styles.loginPage}>
        <div className={styles.headerDiv}>
          <Header />
        </div>
        <div className={styles['login-reg-panel']}>
          <div className={styles['white-panel']}>
            <div className={styles.loginContainer}>
              <h2 className={styles.loginTitle}>Login</h2>
              <h2 className={styles.loginST}>Painel de controle administrativo</h2>
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
          <motion.div
            className={styles.motivationalText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transformar carreiras começa com a escolha certa, mas as informações precisam ser acessíveis!
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
