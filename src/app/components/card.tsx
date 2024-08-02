import React from "react";

interface CardInterface {
    color?: string;
    qty?: string;
    text?: string;
    icon?: React.ReactNode;
    href?: string;
}

export function Card({ color, qty, text, icon, href }: CardInterface) {
    const Component = href ? 'a' : 'div'; // Usa 'a' se houver href, senão usa 'div'

    return (
        <Component href={href} className={`${color} p-6 flex gap-2 rounded-xl`}>
            <div className="flex-1 flex flex-col">
                <strong className="text-3xl font-bold text-zinc-800">{qty}</strong>
                <span className="text-sm text-zinc-700">{text}</span>
            </div>
            {icon}
        </Component>
    );
}
