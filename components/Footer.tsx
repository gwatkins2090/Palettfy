import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2023 ArtShop. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">Instagram</Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Facebook</Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500">Twitter</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;