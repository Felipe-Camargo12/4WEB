import Image from 'next/image';
import ImageLogo from "../../public/image/batman.webp"
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaRegBuilding, FaRegUser } from 'react-icons/fa';
import { BsTools } from "react-icons/bs";
import { GrHostMaintenance } from "react-icons/gr";

export default function Home() {
  return (
  <div className="h-screen flex flex-col">
    <div className="flex-1 flex">
      <aside className="w-44 p-6 text-slate-800 bg-slate-500/30">
        <Image className="mt-4"
          src={ImageLogo}
          alt="Logo do site batman"
          width={150}
          height={80}
          quality={100}
          priority={true}
        />

        <nav className="space-y-4 flex flex-col mt-8">
          <a href="" className='flex items-center gap-4 hover:font-semibold'> 
            Dashboard <MdOutlineDashboardCustomize/>
          </a>
          <a href="" className='flex items-center gap-4 hover:font-semibold'> 
            Ambientes <FaRegBuilding/>
          </a>
          <a href="" className='flex items-center gap-4 hover:font-semibold'> 
            Equipamentos <BsTools/>
          </a>
          <a href="" className='flex items-center gap-4 hover:font-semibold'>  
            Manutenção <GrHostMaintenance/>
          </a>
          <a href="" className='flex items-center gap-4 hover:font-semibold'>
            Usuário <FaRegUser/>
          </a>
        </nav>
      </aside>
     
      <main className="flex-1 text-slate-800">
        <h1 className='text-3xl font-bold uppercase w-full bg-white/20 p-6 text-center'>
          Sistema de gestão de Manutenção
        </h1>

        <div>
        <div className='grid grid-cols-4 gap-4 p-6'>
          <div className='bg-slate-600/50 p-4 flex justify-between items-center rounded-xl'>
            <div className='flex flex-col'>
              <strong>200</strong>
              <span>Ambientes</span>
            </div>
            <FaRegBuilding size={48}/>
          </div>

            <div className='bg-slate-600/50 p-4 flex-col flex rounded-xl'>
              <strong>200</strong>
              <span>Ambientes</span>
            </div>

            <div className='bg-slate-600/50 p-4 flex-col flex rounded-xl'>
              <strong>200</strong>
              <span>Ambientes</span>
            </div>

            <div className='bg-slate-600/50 p-4 flex-col flex rounded-xl'>
              <strong>200</strong>
              <span>Ambientes</span>
            </div>
          </div>
        </div>
      </main>

    </div>
    <footer className="p-4 bg-slate-300 text-center
       text-slate-900 ">Todos os direitos reservados &copy; 2024
    </footer>
  </div>
  )
}