// Header.tsx
import Image from "next/image";
import Link from "next/link"; 

interface HeaderProps {
  onToggleAside: () => void;
}

export function Header({ onToggleAside }: HeaderProps) {
  return (
    <header className="w-full h-16 bg-primario text-white px-6 relative">
      <div className="max-w-screen-xl mx-auto justify-center font-bold uppercase">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <div className="cursor-pointer">
              <Image 
                src={"/image/logo.png"} 
                className="w-full"
                alt="Logo manutenção"
                width={60}
                height={60}
                quality={100}
                priority={true} 
              />
            </div>
          </Link>
          Maintenance
          <div 
            className="items-center ml-auto hidden md:flex mr-16 cursor-pointer" 
            onClick={onToggleAside}
          >
            mais
          </div>
        </nav>
      </div>
    </header>
  );
}
