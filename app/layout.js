
export const metadata = {
  title: 'Senai Valinhos', 
  description: 'Site do SENAI Valinhos', 
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR"> 
      <body>{children}</body>
    </html>
  );
}
