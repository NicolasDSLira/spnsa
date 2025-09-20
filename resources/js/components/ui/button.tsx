import { type ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    link?: string;
}


function ButtonRed({children, link }: ButtonProps) {
    return (
        <a className="bg-red-700 w-fit text-gray-100 px-10 py-6 rounded shadow-2xl hover:shadow transition-all duration-400 font-bold" href={link}>
            {children}
        </a>
    );
}

function ButttonOutlineRed({children, link}: ButtonProps) {
    return (
        <a className="w-fit bg-gray-100/50 text-gray-900 border-2 border-red-700 px-10 py-6 rounded shadow-2xl hover:shadow transition-all duration-400 font-bold" href={link}>
            {children}
        </a>
    );
}

const ButtonYelow = ({children, link}: ButtonProps) => {
    return (
        <a className="bg-amber-400 w-fit text-gray-900 px-10 py-6 rounded shadow-2xl hover:shadow transition-all duration-400 font-bold" href={link}>
            {children}
        </a>
    );
}

export { ButtonRed, ButttonOutlineRed, ButtonYelow };