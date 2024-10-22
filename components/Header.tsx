import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">ArtShop</Link>
        <ul className="flex space-x-4 items-center">
          <li><Button variant="ghost" asChild><Link href="/">Home</Link></Button></li>
          <li><Button variant="ghost" asChild><Link href="/portfolio">Portfolio</Link></Button></li>
          <li><Button variant="ghost" asChild><Link href="/shop">Shop</Link></Button></li>
          <li><Button variant="ghost" asChild><Link href="/about">About</Link></Button></li>
          <li><Button variant="ghost" asChild><Link href="/contact">Contact</Link></Button></li>
          <li>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-6 w-6" />
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;