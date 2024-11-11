'use client';
import { useAuth } from '@/app/contexts/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      // Salva a página que o usuário tentou acessar
      sessionStorage.setItem('intendedRoute', pathname);
      router.push('/login');
    }
  }, [isAuthenticated, loading, router, pathname]);

  // Mostra um loading enquanto verifica a autenticação
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
      </div>
    );
  }

  // Só renderiza o conteúdo se estiver autenticado
  return isAuthenticated ? children : null;
}
