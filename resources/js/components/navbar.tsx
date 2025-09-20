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
    { label: 'Home', href: '/' },
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

    return (
        <nav className="sticky top-0 z-100 w-full bg-gray-100 shadow-md">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-[15dvh] items-center justify-between">
                    <div className="flex w-full items-center justify-between">
                        <div className="flex max-h-fit max-w-fit flex-1 items-center text-xl font-bold">
                            <img src="/assets/logo.png" alt="" width={'80%'} />
                        </div>
                        <div className="hidden md:ml-6 md:flex md:space-x-4">
                            {items.map((item) => (
                                <div
                                    key={item.label}
                                    className="group relative"
                                    onMouseEnter={() => setOpenDropdown(item.label)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <a
                                        href={isActive(item.href) ? undefined : item.href}
                                        tabIndex={isActive(item.href) ? -1 : 0}
                                        className={`rounded-md px-3 py-2 text-sm font-medium transition duration-200 ease-in ${
                                            isActive(item.href) && item.href != '/donations'
                                                ? 'pointer-events-none cursor-not-allowed bg-amber-400 text-gray-800'
                                                : 'text-gray-700 hover:bg-red-800 hover:text-gray-100'
                                        } `}
                                        aria-current={isActive(item.href) ? 'page' : undefined}
                                    >
                                        {item.label}
                                    </a>
                                    {item.subItems && item.subItems.length > 0 && (
                                        <ul
                                            className={`absolute left-0 z-50 mt-2 w-48 rounded-md bg-white shadow-lg transition-all duration-1000 ${openDropdown === item.label ? 'block' : 'hidden'} `}
                                        >
                                            {item.subItems.map((sub) => (
                                                <li key={sub.label}>
                                                    <a
                                                        href={isActive(sub.href) ? undefined : sub.href}
                                                        tabIndex={isActive(sub.href) ? -1 : 0}
                                                        className={`block px-4 py-2 text-sm transition ${
                                                            isActive(sub.href)
                                                                ? 'pointer-events-none cursor-not-allowed bg-amber-400 text-gray-800'
                                                                : 'text-gray-700 hover:bg-red-800 hover:text-gray-100'
                                                        } `}
                                                    >
                                                        {sub.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* MOBILE */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:cursor-pointer hover:bg-red-800 hover:text-gray-100"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
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
                        {items.map((item) => (
                            <div key={item.label} className="relative">
                                <a
                                    href={isActive(item.href) ? undefined : item.href}
                                    tabIndex={isActive(item.href) ? -1 : 0}
                                    className={`block rounded-md px-3 py-2 text-base font-medium transition ${
                                        isActive(item.href)
                                            ? 'pointer-events-none cursor-not-allowed bg-amber-400 text-gray-800'
                                            : 'text-gray-700 hover:bg-red-800 hover:text-gray-100'
                                    } `}
                                >
                                    {item.label}
                                </a>
                                {item.subItems && (
                                    <div className="ml-4">
                                        {item.subItems.map((sub) => (
                                            <a
                                                key={sub.label}
                                                href={isActive(sub.href) ? undefined : sub.href}
                                                tabIndex={isActive(sub.href) ? -1 : 0}
                                                className={`block rounded px-4 py-2 text-sm transition ${
                                                    isActive(sub.href)
                                                        ? 'pointer-events-none cursor-not-allowed bg-amber-400 text-gray-800'
                                                        : 'text-gray-700 hover:bg-red-800 hover:text-gray-100'
                                                } `}
                                            >
                                                {sub.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
