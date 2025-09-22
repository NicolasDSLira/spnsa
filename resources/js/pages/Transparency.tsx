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
                        {posts.map((post) => (
                            <div key={post.title} className="m-4 w-full rounded-lg border-b border-gray-200 bg-gray-50 p-6 shadow-lg md:w-3/5">
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-lg font-bold text-gray-900 md:text-xl">{post.title}</h2>
                                    </div>
                                    <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                                        <p className="col-span-2">
                                            <span className="font-bold">CPNJ:</span> {post.CNPJ}
                                        </p>
                                        <p>
                                            <span className="font-bold">N°</span> {post.numero}
                                        </p>
                                        <p>
                                            <span className="font-bold">Tipo:</span> {post.tipo}
                                        </p>
                                        <p>
                                            <span className="font-bold">Processo Administrativo:</span> {post.processo}
                                        </p>
                                        <p>
                                            <span className="font-bold">Unidade:</span> {post.unidade}
                                        </p>
                                    </div>
                                    <div className="gap-4">
                                        <p>
                                            <span className="font-bold">Objetivo:</span> {post.objetivo}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <p>
                                            <span className="font-bold">Valor total:</span> {post.valorTotal}
                                        </p>
                                        <p>
                                            <span className="font-bold">Data de assinatura:</span> {post.dataAssinatura}
                                        </p>
                                        <p>
                                            <span className="font-bold">Data de início:</span> {post.dataInicio}
                                        </p>
                                        <p>
                                            <span className="font-bold">Data de término:</span> {post.dataFim}
                                        </p>
                                    </div>
                                    <div className="md:grid-col-3 grid gap-4"></div>
                                </div>
                            </div>
                        ))}
                    </article>
                </div>
            </AppLayout>
        </>
    );
}
