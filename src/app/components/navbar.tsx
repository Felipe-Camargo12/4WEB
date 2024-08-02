import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { MdDashboard, MdForklift } from "react-icons/md";

export function NavBar() {

    const links = [
        {target: "#", text: "Dashboard", icon: <MdDashboard />},
        {target: "#", text: "Ambientes", icon: <FaBuilding />},
        {target: "#", text: "Equipamentos", icon: <MdForklift />},
        {target: "#", text: "Manutenções", icon: <FaTools />},
        {target: "#", text: "Usuários", icon: <FaUsers />},
    ];

    return (
        <nav className="w-full flex justify-between mr-4 text-slate-200">
            {links.map((obj, index) => (
                <a 
                    key={index}
                    href={obj.target} 
                    className="flex items-center gap-4 hover:font-semibold"
                >
                    {obj.icon}
                    {obj.text}
                </a>
            ))}
        </nav>
    );
}
