import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { type ReactNode, useEffect } from 'react';

interface AppLayoutProps {
    children?: ReactNode;
    breadcrumbs: BreadcrumbItem[];
}

export default function AppLayout({ children, breadcrumbs, ...props }: AppLayoutProps) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, // anima só na primeira vez que aparece
        });
    }, []);

    return (
        <div className="relative min-h-screen scroll-smooth bg-gray-100 text-gray-900" {...props}>
            {/* Ajuste: pega o título do primeiro breadcrumb se existir */}
            <Head title={breadcrumbs && breadcrumbs.length > 0 ? breadcrumbs[0].title : 'Página'} />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
