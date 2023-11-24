import { Barlow_Condensed, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Container from '@/components/Container';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Travelzilla',
    template: 'Travelzilla | %s',
  },
  description: 'Find the perfect destination',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} grid h-screen grid-cols-[260px_1fr] grid-rows-[80px_auto_40px] bg-slate-50 text-slate-800`}
      >
        <Header />
        <Sidebar />
        <main>
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
