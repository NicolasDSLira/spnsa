import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { useEffect, useState } from 'react';

interface Post {
    title: string;
    CNPJ: string;
    unidade: string;
    numero: number;
    tipo: string;
    processo: number;
    objetivo: string;
    valorTotal: string;
    dataAssinatura: string;
    dataInicio: string;
    dataFim: string;
    termoColaboracao: string;
    planoTrabalho: string;
    termoAditivo: string;
}

{
    /** Breadcrumb */
}
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Transparência',
        href: '/transparency',
    },
];

export default function Transparency() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('/api/transparecy')
            .then((res) => {
                if (!res.ok) throw new Error('Erro ao buscar posts');
                return res.json();
            })
            .then((data: Post[]) => setPosts(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <div className="bg-[url('/assets/imagem/bg/figuras.webp')] bg-amber-400 bg-cover bg-center">
                    <aside className="flex items-center justify-center p-10">
                        <h1 className="bg-gray-50/80 p-10 text-4xl font-black shadow-2xl backdrop-blur">Prestação de contas</h1>
                    </aside>
                    <article className="flex flex-wrap justify-center p-10">

                        {/* Item */}
                        <div className="m-4 w-full rounded-lg border-b border-gray-200 bg-gray-50 p-6 shadow-lg md:w-3/5">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900 md:text-xl text-center">Termo Aditivo - CEI PASTORINHAS </h2>
                                </div>
                                <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                                    <p className="col-span-2 text-center">
                                        <span className="font-bold">CPNJ:</span> 58.477.555/0004-51
                                    </p>
                                    <p>
                                        <span className="font-bold">6ª Termo Aditivo</span>
                                    </p>
                                    <p>
                                        <span className="font-bold">Termo de Colaboração nº:</span> 04/2021
                                    </p>
                                    <p>
                                        <span className="font-bold">Unidade:</span> CEI PASTORINHAS I
                                    </p>
                                    <p>
                                        <span className="font-bold">Objetivo:</span> Atendimento educacional na modalidade Educação Infantil- Creche
                                    </p>
                                    <p>
                                        <span className='font-bold'>Valor Anual:</span> R$1.277.997,83
                                    </p>
                                    <p>
                                        <span className='font-bold'>Data de assinatura:</span> 22/05/2025
                                    </p>
                                    <p>
                                        <span className='font-bold'>Data de início:</span> 02/01/2025
                                    </p>
                                    <p>
                                        <span className='font-bold'>Data de término:</span> 31/12/2025
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Item */}
                        <div className="m-4 w-full rounded-lg border-b border-gray-200 bg-gray-50 p-6 shadow-lg md:w-3/5">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900 md:text-xl text-center">CJ ANGELINA I </h2>
                                </div>
                                <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                                    <p className="col-span-2 text-center">
                                        <span className="font-bold">CPNJ:</span> 58.477.555/0005-32
                                    </p>
                                    <p>
                                        <span className="font-bold">2ª Termo Aditivo</span>
                                    </p>
                                    <p>
                                        <span className="font-bold">Termo de Colaboração nº:</span> 004/2022
                                    </p>
                                    <p>
                                        <span className="font-bold">Processo Administrativo nº:</span> 17.095/2022
                                    </p>
                                    <p >
                                        <span className="font-bold">Unidade:</span> SERVIÇO PROMOCIONAL NOSSA SENHORA APARECIDA – ANGELINA I
                                    </p>
                                    <p className='col-span-2'>
                                        <span className="font-bold">Objetivo:</span> SERVIÇO DE CONVIVÊNCIA E FORTALECIMENTO DE VÍNCULOS PARA CRIANÇAS E ADOLESCENTES - SCFV CA
                                    </p>
                                    <p>
                                        <span className='font-bold'>Valor Anual:</span> R$285.912,00
                                    </p>
                                    <p>
                                        <span className='font-bold'>Data de assinatura:</span> 27/12/2024
                                    </p>
                                    <p>
                                        <span className='font-bold'>Data de início:</span> 01/01/2025
                                    </p>
                                    <p>
                                        <span className='font-bold'>Data de término:</span> 31/12/2025
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Item */}
                        <div className="m-4 w-full rounded-lg border-b border-gray-200 bg-gray-50 p-6 shadow-lg md:w-3/5">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900 md:text-xl text-center">CJ ANGELINA II </h2>
                                </div>
                                <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                                    <p className="col-span-2 text-center">
                                        <span className="font-bold">CPNJ:</span> 58.477.555/0005-32
                                    </p>
                                    <p>
                                        <span className="font-bold">2ª Termo Aditivo</span>
                                    </p>
                                    <p>
                                        <span className="font-bold">Termo de Colaboração nº:</span> 005/2022
                                    </p>
                                    <p>
                                        <span className="font-bold">Processo Administrativo nº:</span> 17.096/2022
                                    </p>
                                    <p >
                                        <span className="font-bold">Unidade:</span> SERVIÇO PROMOCIONAL NOSSA SENHORA APARECIDA – ANGELINA II
                                    </p>
                                    <p className='col-span-2'>
                                        <span className="font-bold">Objetivo:</span> SERVIÇO DE CONVIVÊNCIA E FORTALECIMENTO DE VÍNCULOS PARA CRIANÇAS E ADOLESCENTES - SCFV CA
                                    </p>
                                    <p>
                                        <span className='font-bold'>Valor Anual:</span> R$285.912,00
                                    </p>
                                    <p>
                                        <span className='font-bold'>Data de assinatura:</span> 27/12/2024
                                    </p>
                                    <p>
                                        <span className='font-bold'>Data de início:</span> 01/01/2025
                                    </p>
                                    <p>
                                        <span className='font-bold'>Data de término:</span> 31/12/2025
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Item */}
                        <div className="m-4 w-full rounded-lg border-b border-gray-200 bg-gray-50 p-6 shadow-lg md:w-3/5">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900 md:text-xl text-center">CJ MARGARIDA </h2>
                                </div>
                                <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                                    <p className="col-span-2 text-center">
                                        <span className="font-bold">CPNJ:</span> 58.477.555/0003-70
                                    </p>
                                    <p>
                                        <span className="font-bold">2ª Termo Aditivo</span>
                                    </p>
                                    <p>
                                        <span className="font-bold">Termo de Colaboração nº:</span> 006/2022
                                    </p>
                                    <p>
                                        <span className="font-bold">Processo Administrativo nº:</span> 17.097/2022
                                    </p>
                                    <p >
                                        <span className="font-bold">Unidade:</span> SERVIÇO PROMOCIONAL NOSSA SENHORA APARECIDA – MARGARIDA
                                    </p>
                                    <p className='col-span-2'>
                                        <span className="font-bold">Objetivo:</span> SERVIÇO DE CONVIVÊNCIA E FORTALECIMENTO DE VÍNCULOS PARA CRIANÇAS E ADOLESCENTES - SCFV CA
                                    </p>
                                    <p>
                                        <span className='font-bold'>Valor Anual:</span> R$285.912,00
                                    </p>
                                    <p>
                                        <span className='font-bold'>Data de assinatura:</span> 27/12/2024
                                    </p>
                                    <p>
                                        <span className='font-bold'>Data de início:</span> 01/01/2025
                                    </p>
                                    <p>
                                        <span className='font-bold'>Data de término:</span> 31/12/2025
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Item */}
                        <div className="m-4 w-full rounded-lg border-b border-gray-200 bg-gray-50 p-6 shadow-lg md:w-3/5">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900 md:text-xl text-center">CJ SANTO ANTÔNIO </h2>
                                </div>
                                <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                                    <p className="col-span-2 text-center">
                                        <span className="font-bold">CPNJ:</span> 58.477.555/0002-90
                                    </p>
                                    <p>
                                        <span className="font-bold">Processo de Chamamento Público nº: </span> 194/2025 Edital nº 001/2025
                                    </p>
                                    <p>
                                        <span className="font-bold">Termo de Colaboração nº:</span> 002/2025
                                    </p>
                                    <p>
                                        <span className="font-bold">Processo Administrativo nº:</span> 7947/2025
                                    </p>
                                    <p >
                                        <span className="font-bold">Unidade:</span> SERVIÇO PROMOCIONAL NOSSA SENHORA APARECIDA – SANTO ANTÔNIO
                                    </p>
                                    <p className='col-span-2'>
                                        <span className="font-bold">Objetivo:</span> SERVIÇO DE CONVIVÊNCIA E FORTALECIMENTO DE VÍNCULOS PARA CRIANÇAS E ADOLESCENTES - SCFV CA
                                    </p>
                                    <p>
                                        <span className='font-bold'>Valor Anual:</span> R$190.608,00
                                    </p>
                                    <p>
                                        <span className='font-bold'>Data de assinatura:</span> 30/04/2024
                                    </p>
                                    <p>
                                        <span className='font-bold'>Data de início:</span> 01/05/2025
                                    </p>
                                    <p>
                                        <span className='font-bold'>Data de término:</span> 31/12/2025
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Item */}
                        <div className="m-4 w-full rounded-lg border-b border-gray-200 bg-gray-50 p-6 shadow-lg md:w-3/5">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900 md:text-xl text-center">CJ SÃO LUIS  </h2>
                                </div>
                                <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                                    <p className="col-span-2 text-center">
                                        <span className="font-bold">CPNJ:</span> 58.477.555/0006-13
                                    </p>
                                    <p>
                                        <span className="font-bold">Processo de Chamamento Público nº: </span> 194/2025 Edital nº 001/2025
                                    </p>
                                    <p>
                                        <span className="font-bold">Processo Administrativo nº:</span> 7946/2025
                                    </p>
                                    <p className='col-span-2'>
                                        <span className="font-bold">Unidade:</span> SERVIÇO PROMOCIONAL NOSSA SENHORA APARECIDA – SANTO ANTÔNIO
                                    </p>
                                    <p className='col-span-2'>
                                        <span className="font-bold">Objetivo:</span> : SERVIÇO DE CONVIVÊNCIA E FORTALECIMENTO DE VÍNCULOS PARA CRIANÇAS E ADOLESCENTES - SCFV CA
                                    </p>
                                    <p>
                                        <span className='font-bold'>Valor Anual:</span> R$190.608,00
                                    </p>
                                    <p>
                                        <span className='font-bold'>Data de assinatura:</span> 30/04/2024
                                    </p>
                                    <p>
                                        <span className='font-bold'>Data de início:</span> 01/05/2025
                                    </p>
                                    <p>
                                        <span className='font-bold'>Data de término:</span> 31/12/2025
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </AppLayout>
        </>
    );
}
