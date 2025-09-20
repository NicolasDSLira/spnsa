import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

{
    /* Breadcrumb */
}
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Notas Fiscais',
        href: '/invoices',
    },
];

export default function Invoices() {
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
            <Head title="Notas Fiscais" />
            <AppLayout breadcrumbs={breadcrumbs}>
                <div style={{ backgroundImage: "url('assets/imagem/bg/quadrados.webp')" }} className="z-0 min-h-dvh bg-contain bg-center bg-repeat">
                    <div className="relative z-10 min-h-dvh bg-gray-100/50">
                        <div
                            className="mx-auto flex flex-col items-center justify-center gap-6 p-10 text-gray-900 md:w-1/2"
                            data-aos="zoom-in-up"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <h1 className="text-4xl font-black">Doe Notas Fiscais</h1>
                            <h3 className="text-xl font-bold">É Rápido e Fácil </h3>
                        </div>

                        <aside
                            className="mx-auto w-4/5 rounded-xl border-red-800 bg-gray-200/50 shadow-lg md:w-2/4 md:border-4"
                            data-aos="zoom-in-up"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <iframe
                                width="706"
                                height="397"
                                src="https://www.youtube.com/embed/RDKe9ODRt4E"
                                title="Nota Fiscal Paulista - Doação Automática de Cupons"
                                allowFullScreen
                                className="w-full rounded-xl"
                            ></iframe>
                        </aside>

                        <article className="grid items-stretch gap-10 p-10 md:grid-cols-3">
                            <div
                                className="rounded-xl border-2 border-amber-400 bg-gray-100/40 p-10 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in"
                                data-aos="zoom-out-right"
                                data-aos-anchor-placement="top-bottom"
                            >
                                <div className="mb-8 flex flex-row items-center justify-center gap-4">
                                    <img src="assets/imagem/icons/smartphone_FILL0_wght400_GRAD0_opsz24.svg" className="w-10" alt="icone" />
                                    <h1 className="text-3xl font-bold">Doe pelo APP</h1>
                                </div>
                                <ol className="list-inside list-decimal space-y-4">
                                    <li>Baixe o aplicativo da Nota Fiscal Paulista: GOOGLE PLAY ou APPLE STORE</li>
                                    <li>Faça o login ou cadastre-se se ainda não for cadastrado clicando na opção "Registre sua conta"</li>
                                    <li>Clique em "Doação"</li>
                                    <li>Capture o QR Code impresso ou escolha a opção "doação manual" para digitar os dados.</li>
                                    <li>A seguir selecione a entidade.</li>
                                    <li>Coloque o nosso CNPJ 58.477.555/0001-09.</li>
                                    <li>Confira os dados e clique em "Doar".</li>
                                </ol>
                            </div>

                            <div
                                className="rounded-xl border-2 border-amber-400 bg-gray-100/40 p-10 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in"
                                data-aos="zoom-out-up"
                                data-aos-anchor-placement="top-bottom"
                            >
                                <div className="mb-8 flex flex-row items-center justify-center gap-4">
                                    <img src="assets/imagem/icons/desktop_windows_FILL0_wght400_GRAD0_opsz24.svg" className="w-10" alt="icone" />
                                    <h1 className="text-3xl font-bold">Doe pelo site</h1>
                                </div>
                                <ol className="list-inside list-decimal space-y-4">
                                    <li>Entre no site da Receita Federal e cadastre-se ou se já é cadastrado, acesse sua conta.</li>
                                    <li>Faça o login ou cadastre-se.</li>
                                    <li>Clique em "Doação de Notas".</li>
                                    <li>Depois em "Nova doação".</li>
                                    <li>Preencha os dados da nota e na mesma tela insira o nosso CNPJ 58.477.555/0001-09.</li>
                                    <li>Confirme a entidade.</li>
                                    <li>Para finalizar clique no botão "Registrar doação".</li>
                                </ol>
                            </div>

                            <div
                                className="rounded-xl border-2 border-amber-400 bg-gray-100/40 p-10 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in"
                                data-aos="zoom-out-left"
                                data-aos-anchor-placement="top-bottom"
                            >
                                <div className="mb-8 flex flex-row items-center justify-center gap-4">
                                    <img src="assets/imagem/icons/calendar_clock_FILL0_wght400_GRAD0_opsz24.svg" className="w-10" alt="icone" />
                                    <h1 className="text-3xl font-bold">Doação automática</h1>
                                </div>
                                <ol className="list-inside list-decimal space-y-4">
                                    <li>Entre no site da Receita Federal e cadastre-se ou se já é cadastrado, acesse sua conta.</li>
                                    <li>Selecione a opção "Entidades".</li>
                                    <li>Escolha o período de doação.</li>
                                    <li>Coloque o nosso CNPJ 58.477.555/0001-09.</li>
                                    <li>Confirme a entidade.</li>
                                    <p>
                                        Seguindo esses poucos passos o repasse será automático pelo período escolhido. Basta informar seu CPF a cada
                                        compra e você estará ajudando a cuidar de nossas crianças e adolescentes.
                                    </p>
                                </ol>
                            </div>
                        </article>

                        <section
                            className="mx-auto flex w-4/5 flex-col items-center justify-center gap-6 rounded-2xl border-2 border-red-900 bg-amber-400/50 p-10 text-gray-900 shadow-lg backdrop-blur-sm md:w-1/2"
                            data-aos="zoom-in-up"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <h2 className="text-2xl font-bold">E se eu for sorteado pela Nota Fiscal Paulista?</h2>
                            <p>Os sorteios dos prêmios serão do doador, ou seja, se for sorteado o prêmio e todo seu.</p>
                        </section>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
