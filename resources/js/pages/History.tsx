import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

{
    /** Breadcrumb */
}
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'About',
        href: '/about',
    },
];

export default function History() {
    const [imagens, setImagens] = useState<string[]>([]);

    useEffect(() => {
        fetch('/api/galeria')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Erro ao buscar imagens');
                }
                return res.json();
            })
            .then((data: string[]) => setImagens(data))
            .catch((err) => console.error(err));
    }, []);

    {
        /** Init AOS from welcome page */
    }
    useEffect(() => {
        AOS.init({
            duration: 1000, // duração da animação (ms)
            once: true, // anima apenas uma vez
        });
    }, []);

    return (
        <>
            <Head title="História" />
            <AppLayout breadcrumbs={breadcrumbs}>
                <article style={{ backgroundImage: "url('assets/imagem/bg/quadrados.webp')" }} className="bg-contain bg-center bg-repeat">
                    <div className="flex flex-row items-center justify-center gap-10 p-10 md:gap-20">
                        <div className="md:w-fit">
                            <img src="/assets/logo.png" alt="" width={'80%'} className="hidden md:block md:flex-1" />
                        </div>
                        <div className="w-fit">
                            <h1 className="font-bold text-red-800 md:text-4xl">Conheça nossa um pouco de nossa história</h1>
                        </div>
                    </div>

                    <div className="gap-6 p-6 md:grid md:grid-cols-3 md:p-10 md:px-20">
                        <div
                            className="space-y-6 rounded-lg border-2 border-red-800 bg-gray-200/50 p-4 text-justify shadow-lg md:col-span-2 md:p-10"
                            data-aos="fade-up-right"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <p>
                                O Serviço Promocional Nossa Senhora Aparecida, é uma entidade filantrópica, sem fins lucrativos, fundada em 05 de
                                março de 1989, reconhecida como utilidade Pública Federal, Estadual e Municipal. Através da Congregação das Irmãs da
                                Caridade de Ottawa um grupo de leigos da Pastoral Social compromissados com a causa fazia visitas nos lares e fornecia
                                alimentos às famílias.
                            </p>
                            <p>
                                Reavaliando a situação o grupo concluiu que as mães não precisavam apenas de alimentos e sim de pessoas que ficassem
                                com seus filhos para que pudessem trabalhar. Assim iniciou a Creche Comunitária das Pastorinhas com 10 crianças no
                                Salão Paroquial da Igreja Nossa Senhora Aparecida no ano de 1988 na cidade de Ferraz de Vasconcelos, o primeiro
                                município à leste da Cidade de São Paulo.{' '}
                            </p>
                            <p>
                                {' '}
                                Os parceiros diversos da Sociedade Civil tiveram papel fundamental para o provimento do trabalho existente e sua
                                extensão, inclusive construindo as novas instalações. Em 1999 no Jardim São João foi inaugurada a sede da CEI
                                Pastorinhas I em parceria com a Fundação do Brasil. Atualmente atendemos no CEI Pastorinhas I um total de 216
                                crianças.
                            </p>
                        </div>
                        <div
                            className="hidden rounded-lg border-2 border-red-800 shadow-lg md:block"
                            data-aos="fade-up-left"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <img
                                src="/assets/imagem/galeria/centro-de-ensino-infantil-pastorinhas10.jpg"
                                alt="centro-de-ensino-infantil-pastorinhas10.jpg"
                                className="h-full w-fit rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="gap-6 p-6 md:grid md:grid-cols-3 md:p-10 md:px-20">
                        <div
                            className="hidden rounded-lg border-2 border-red-800 shadow-lg md:block"
                            data-aos="fade-up-right"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <img
                                src="/assets/imagem/galeria/centro-de-ensino-infantil-pastorinhas10.jpg"
                                alt="centro-de-ensino-infantil-pastorinhas10.jpg"
                                className="h-full w-fit rounded-lg"
                            />
                        </div>
                        <div
                            className="space-y-6 rounded-lg border-2 border-red-800 bg-gray-200/50 p-4 text-justify shadow-lg md:col-span-2 md:p-10"
                            data-aos="fade-up-left"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <p>
                                O Serviço Promocional Nossa Senhora Aparecida, é uma entidade filantrópica, sem fins lucrativos, fundada em 05 de
                                março de 1989, reconhecida como utilidade Pública Federal, Estadual e Municipal. Através da Congregação das Irmãs da
                                Caridade de Ottawa um grupo de leigos da Pastoral Social compromissados com a causa fazia visitas nos lares e fornecia
                                alimentos às famílias.
                            </p>
                            <p>
                                Reavaliando a situação o grupo concluiu que as mães não precisavam apenas de alimentos e sim de pessoas que ficassem
                                com seus filhos para que pudessem trabalhar. Assim iniciou a Creche Comunitária das Pastorinhas com 10 crianças no
                                Salão Paroquial da Igreja Nossa Senhora Aparecida no ano de 1988 na cidade de Ferraz de Vasconcelos, o primeiro
                                município à leste da Cidade de São Paulo.{' '}
                            </p>
                            <p>
                                {' '}
                                Os parceiros diversos da Sociedade Civil tiveram papel fundamental para o provimento do trabalho existente e sua
                                extensão, inclusive construindo as novas instalações. Em 1999 no Jardim São João foi inaugurada a sede da CEI
                                Pastorinhas I em parceria com a Fundação do Brasil. Atualmente atendemos no CEI Pastorinhas I um total de 216
                                crianças.
                            </p>
                        </div>
                    </div>

                    <section className="grid grid-cols-1 gap-6 p-10 md:grid-cols-4" data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
                        {imagens.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt={`Imagem ${i + 1}`}
                                className="h-60 rounded-xl shadow-md transition-transform duration-500 hover:scale-105"
                            />
                        ))}
                    </section>
                </article>
            </AppLayout>
        </>
    );
}
