import { Montserrat } from 'next/font/google';
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
        className={`${montserrat.className} grid h-screen grid-cols-2 grid-rows-[80px_60px_auto_40px] bg-slate-50 text-slate-800 sm:grid-cols-[260px_1fr] sm:grid-rows-[80px_auto_40px]`}
      >
        <Header />
        <Sidebar />
        <main className="col-span-2 overflow-y-scroll scrollbar-thin scrollbar-track-transparent  scrollbar-thumb-slate-300 scrollbar-thumb-rounded-full md:col-span-1">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
