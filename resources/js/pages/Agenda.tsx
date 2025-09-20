import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

{
    /** Breadcrumb */
}
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Agenda',
        href: '/agenda',
    },
];

interface Eventos {
    title: string;
    description?: string;
    data?: string;
    horario?: string;
    local?: string;
}

const eventos: Eventos[] = [
    {
        title: 'BINGO BENEFICENTE ASFAR',
        description: 'Informamos que os convites para o Bingo Beneficente promovido pela ASFAR já estão disponíveis para venda.',
        data: '04/10/2025',
        horario: 'A partir das 14h30',
        local: 'Salão do Rotary – Avenida Brasil, 121, Vila Corrêa – Ferraz de Vasconcelos',
    },
    {
        title: '23° Festa do Yakissoba',
        description:
            'Prepare-se para um dia cheio de sabor, alegria e boa companhia! Vamos celebrar juntos com muita comida deliciosa e aquele clima acolhedor que só a nossa festa tem! ❤️',
        data: '15/06/2025',
        horario: '12:00',
        local: 'CEI Pastorinhas - Rua Abílio Leite Guimarães, 35',
    },
    {
        title: '1° Macarronada SPNSA?✨',
        description: 'Vamos reunir os melhores ingredientes: comida deliciosa, ótima companhia e muito amor!',
        data: '27/04/2025',
        horario: '12:00',
        local: 'CEI Pastorinhas - Rua Abílio Leite Guimarães, 35',
    },
    {
        title: '2° Rodízio Comunidade São Luís e Serviço Promocional',
        description:
            'Participe do 2° Rodízio de Pizzas da Comunidade São Luís e Serviço Promocional! Será uma noite deliciosa de confraternização, com pizzas à vontade e muita alegria. Venha no dia 23/11, às 19h30, e traga sua família para compartilhar esse momento especial conosco. Não perca!',
        data: '23/11/2024',
        horario: '19:30',
        local: 'R. das Margaridas, 710 - Vila Santa Margarida, Ferraz de Vasconcelos',
    },
    {
        title: '24° Bienal do Livro',
        description: 'Visita a 24ª Bienal do Livro, com 80 crianças se adolescentes, visando abertura de novos horizontes.',
        data: '13/09/2024',
        horario: '---',
        local: 'Av. Olavo Fontoura, 1209 - Santana - São Paulo, 02012-021',
    },
    {
        title: '22° Festa do Yakissoba',
        description: 'Você está convidado para uma festa de Yakissoba no dia 16 de junho, das 12:00 às 15:00',
        data: '16/06/2024',
        horario: '12:00',
        local: 'CEI Pastorinhas - Rua Abílio Leite Guimarães, 35',
    },
];

export default function Agenda() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <div className="justify-centers flex flex-col items-center bg-amber-400 bg-[url('assets/imagem/bg/figuras.webp')] bg-cover bg-fixed bg-center p-10">
                    <section className="w-[90dvw] rounded-t-xl border-x-2 border-t-2 border-red-900 bg-gray-50 p-10 md:w-4/5">
                        <h1 className="text-2xl font-bold">Fique por dentro de nossos eventos</h1>
                    </section>
                    <article className="flex max-h-[75dvh] w-[90dvw] snap-y flex-col gap-10 overflow-auto overscroll-contain border-2 border-red-900 bg-gray-50 p-6 md:w-4/5 md:rounded-b-xl md:p-20">
                        {eventos.map((evento) => (
                            <div className="w-[90dvw] max-w-full snap-center space-y-4 border-2 border-l-8 border-red-900 p-4 md:w-full">
                                <div>
                                    <h1 className="text-2xl font-bold">{evento.title}</h1>
                                </div>
                                <div className="flex w-full flex-wrap items-stretch justify-between gap-4 divide-x-0 divide-y-2 border-gray-900 bg-amber-200 p-2 md:flex-nowrap md:divide-x-2 md:divide-y-0">
                                    <div className="flex w-full items-center justify-center px-2 md:w-fit">
                                        <h2 className="font-bold">
                                            Data:<span className="px-2 font-normal">{evento.data}</span>
                                        </h2>
                                    </div>
                                    <div className="flex w-full items-center justify-center px-2 md:w-fit">
                                        <h2 className="font-bold text-nowrap">
                                            Horário:<span className="px-2 font-normal">{evento.horario}</span>
                                        </h2>
                                    </div>
                                    <div className="flex w-full items-center justify-center px-2 md:w-fit">
                                        <h2 className="font-bold">
                                            Local:<span className="px-2 font-normal">{evento.local}</span>
                                        </h2>
                                    </div>
                                </div>
                                <div>{evento.description && <p>{evento.description}</p>}</div>
                            </div>
                        ))}
                    </article>
                </div>
            </AppLayout>
        </>
    );
}
