
import { FaBuilding } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdForklift } from "react-icons/md";
import { Footer } from "./components/footer";
import { Card } from "./components/card";

export default function Home() {
  const cards = [
    {color: "bg-orange-200", qty:"100", text:"Ambientes", icon:<FaBuilding size={48} />, href: "/cadastro-de-maquinas"}, 
    {color: "bg-blue-200", qty:"100", text:"Equipamentos", icon:<MdForklift size={48} />, href: "/cadastro-de-equipamentos"},
    {color: "bg-red-200", qty:"100", text:"O.S. Abertas", icon:<GrNotes size={48} />, href: "/os-abertas"},
    {color: "bg-green-200", qty:"100", text:"O.S. Concluídas", icon:<IoMdCheckboxOutline size={48} />, href: "/os-concluidas"},
  ];

  return (
    
    <div className="h-screen flex flex-col">

      <div className="flex-1 flex">

        <main className="flex-1 flex flex-col">

          <h1 className="text-4xl font-bold uppercase w-full bg-neutral-900 p-6 text-center text-slate-100">
            Sistema de Gestão de Manutenção
          </h1>

          <div className="grid grid-cols-4 gap-4 p-6">
            {cards.map((props) => (
              <Card 
                key={props.text}
                color={props.color}
                qty={props.qty}
                text={props.text}
                icon={props.icon}
                href={props.href} // Passando a propriedade href
              />
            ))}
          </div>

        </main>

      </div>

      <Footer />

    </div>
  );
}
