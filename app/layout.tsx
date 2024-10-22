import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Boxes } from '@/components/ui/background-boxes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Art Portfolio & Shop',
  description: 'Discover unique artworks and shop for your favorites',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen overflow-hidden">
          <Boxes className="absolute inset-0 z-0" />
          <div className="relative z-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}