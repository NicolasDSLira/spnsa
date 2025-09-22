import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

type Items = {
    label: string;
    href: string;
    subItems?: Items[];
};

interface NavbarProps {
    items?: Items[];
}

const defaultItems: Items[] = [
    { label: 'Home', href: '/home' },
    { label: 'Quem Somos', href: '/about' },
    {
        label: 'Como Ajudar',
        href: '/donations',
        subItems: [
            { label: 'Doações', href: '/donations' },
            { label: 'Notas Fiscais', href: '/invoices' },
            { label: 'Seja um Parceiro', href: '/partner' },
        ],
    },
    { label: 'Parceiros', href: '/partners' },
    { label: 'Transparência', href: '/transparency' },
    { label: 'Agenda', href: '/agenda' },
    { label: 'Contato', href: '/contact' },
];

// Helper para pegar pathname (SSR-safe)
const getPath = () => (typeof window !== 'undefined' ? window.location.pathname : '/');

const Navbar: React.FC<NavbarProps> = ({ items = defaultItems }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const pathname = getPath();

    const isActive = (href: string) => pathname === href;

    const renderDesktopItem = (item: Items) => {
        if (item.subItems && item.subItems.length > 0) {
            return (
                <div key={item.label} className="group relative">
                    <button
                        type="button"
                        onClick={() =>
                            setOpenDropdown(openDropdown === item.label ? null : item.label)
                        }
                        className={`rounded-md px-3 py-2 text-sm font-medium transition duration-200 ease-in
                                text-gray-700 hover:bg-red-800 hover:text-gray-100`}
                        aria-current={isActive(item.href) ? 'page' : undefined}
                    >
                        {item.label}
                    </button>
                    <ul
                        className={`absolute left-0 z-50 mt-2 w-48 rounded-md bg-white shadow-lg transition-all duration-300 ${
                            openDropdown === item.label ? 'block' : 'hidden'
                        }`}
                    >
                        {item.subItems.map((sub) => (
                            <li key={sub.label}>
                                <Link
                                    href={isActive(sub.href) ? undefined : sub.href}
                                    tabIndex={isActive(sub.href) ? -1 : 0}
                                    className={`block px-4 py-2 text-sm transition ${
                                        isActive(sub.href)
                                            ? 'pointer-events-none cursor-not-allowed bg-amber-400 text-gray-800'
                                            : 'text-gray-700 hover:bg-red-800 hover:text-gray-100'
                                    }`}
                                >
                                    {sub.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

        return (
            <Link
                key={item.label}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition duration-200 ease-in ${
                    isActive(item.href)
                        ? 'pointer-events-none cursor-not-allowed bg-amber-400 text-gray-800'
                        : 'text-gray-700 hover:bg-red-800 hover:text-gray-100'
                }`}
                aria-current={isActive(item.href) ? 'page' : undefined}
            >
                {item.label}
            </Link>
        );
    };

    const renderMobileItem = (item: Items) => {
        if (item.subItems && item.subItems.length > 0) {
            return (
                <div key={item.label} className="relative">
                    <button
                        type="button"
                        onClick={() =>
                            setOpenDropdown(openDropdown === item.label ? null : item.label)
                        }
                        className={`block w-full text-left rounded-md px-3 py-2 text-base font-medium transition ${
                            isActive(item.href)
                                ? 'pointer-events-none cursor-not-allowed bg-amber-400 text-gray-800'
                                : 'text-gray-700 hover:bg-red-800 hover:text-gray-100'
                        }`}
                    >
                        {item.label}
                    </button>
                    {openDropdown === item.label && (
                        <div className="ml-4">
                            {item.subItems.map((sub) => (
                                <Link
                                    key={sub.label}
                                    href={isActive(sub.href) ? undefined : sub.href}
                                    tabIndex={isActive(sub.href) ? -1 : 0}
                                    className={`block rounded px-4 py-2 text-sm transition ${
                                        isActive(sub.href)
                                            ? 'pointer-events-none cursor-not-allowed bg-amber-400 text-gray-800'
                                            : 'text-gray-700 hover:bg-red-800 hover:text-gray-100'
                                    }`}
                                >
                                    {sub.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            );
        }

        return (
            <Link
                key={item.label}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-base font-medium transition ${
                    isActive(item.href)
                        ? 'pointer-events-none cursor-not-allowed bg-amber-400 text-gray-800'
                        : 'text-gray-700 hover:bg-red-800 hover:text-gray-100'
                }`}
            >
                {item.label}
            </Link>
        );
    };

    return (
        <nav className="sticky top-0 z-100 w-full bg-gray-100 shadow-md">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-[15dvh] items-center justify-between">
                    <div className="flex w-full items-center justify-between">
                        <div className="flex max-h-fit max-w-fit flex-1 items-center text-xl font-bold">
                            <img src="/assets/logo.png" alt="Logo" width="80%" />
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden md:ml-6 md:flex md:space-x-4">
                            {items.map(renderDesktopItem)}
                        </div>
                    </div>

                    {/* Mobile toggle button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:cursor-pointer hover:bg-red-800 hover:text-gray-100"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={
                                        mobileOpen
                                            ? 'M6 18L18 6M6 6l12 12'
                                            : 'M4 6h16M4 12h16M4 18h16'
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {items.map(renderMobileItem)}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
