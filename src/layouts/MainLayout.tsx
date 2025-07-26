import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <>
    <style>
      {`
        main, nav, footer {
          padding: 0 10%;
          font-family: 'Manrope';
        }
      `}
    </style>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
