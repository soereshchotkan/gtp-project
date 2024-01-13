import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Tekst en knop aan de linkerkant */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start p-10 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Welkom op mijn website</h1>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    
            Naar Login Pagina

        </Link>
      </div>

      {/* Afbeelding aan de rechterkant */}
      <div className="flex flex-1 justify-center items-center">
        <Image src="/naaimachine.jpg" width={1000} height={1000} alt='home image'/>
      </div>
    </div>
  );
}

