import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import '@/styles/globals.css';

export const metadata = {
  title: 'Shopping Cart',
  description: 'Copy of x-kom.pl',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <main className='flex h-screen min-h-full w-screen flex-col overflow-hidden bg-gray-800 px-16'>
          <Header />
          <div className='flex flex-1 justify-center'>{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
