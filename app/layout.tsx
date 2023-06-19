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
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
