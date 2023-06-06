import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-gray-800 overflow-hidden">
      <Header />
      <Footer />
    </div>
  );
};
