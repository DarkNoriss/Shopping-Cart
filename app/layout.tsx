import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ShoppingCartProvider } from '@/context/ShoppingCartContext';
import '@/styles/globals.css';

export const metadata = {
  title: 'Gaymer Shop',
  description: 'Gaming Shop',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <ShoppingCartProvider>
          <main className='flex h-screen min-h-full w-screen flex-col overflow-hidden bg-gray-800 px-16'>
            <Header />
            <div className='flex flex-1 justify-center overflow-auto'>
              {children}
            </div>
            <Footer />
          </main>
        </ShoppingCartProvider>
      </body>
    </html>
  );
};

export default RootLayout;
