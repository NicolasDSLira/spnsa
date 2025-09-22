import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { useEffect, useState } from 'react';

{
    /** Breadcrumb */
}
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Parceiros',
        href: '/partners',
    },
];

export default function Partners() {
    const [imagens, setImagens] = useState<string[]>([]);

    useEffect(() => {
        fetch('/api/parceiros')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Erro ao buscar imagens');
                }
                return res.json();
            })
            .then((data: string[]) => setImagens(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <aside
                    className="flex min-h-[50dvh] items-center justify-center bg-[url('/assets/imagem/bg/bg-parceiros.webp')] bg-cover bg-scroll bg-center bg-no-repeat md:min-h-screen md:bg-cover"
                    data-aos="fade-up"
                >
                    <div className="w-fit rounded bg-gray-100/50 px-4 py-10 shadow-2xl backdrop-blur md:w-2/4 md:p-10">
                        <h1 className="text-center text-2xl font-bold md:text-4xl">Conheça nossos parceiros</h1>
                    </div>
                </aside>

                <section className="grid grid-cols-1 place-content-center place-items-center gap-10 bg-amber-400 p-10 md:grid-cols-3 md:p-20">
                    {imagens.map((src, i) => (
                        <div key={i} className="flex h-40 w-60 items-center justify-center rounded border border-gray-200 bg-white p-4 shadow">
                            <img key={i} src={src} alt={`Imagem ${i + 1}`} className="h-auto max-h-40 w-4/5 object-contain p-4" />
                        </div>
                    ))}
                </section>
            </AppLayout>
        </>
    );
}
