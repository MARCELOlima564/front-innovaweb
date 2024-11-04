'use client';
import RotaProtegida from '@/app/components/RotaProtegida/RotaProtegida';
import { useAuth } from '@/app/contexts/AuthContext';

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <RotaProtegida>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-xl font-bold">Dashboard</h1>
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Olá, {user?.email}</span>
                <button
                  onClick={logout}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                  Sair
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Conteúdo do dashboard aqui */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
              <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Dashboard</h2>
              <p>Este é um conteúdo protegido que só pode ser visto por usuários autenticados.</p>
            </div>
          </div>
        </main>
      </div>
    </RotaProtegida>
  );
}