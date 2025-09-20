{
    /* Importações */
}
import { HeroCenter } from '@/components/heroDraw';
import { ButtonRed } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimateSeparator } from '@/components/ui/separator';
import { SliderAbout, SliderAboutItem } from '@/components/ui/slider';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

{
    /** Breadcrumb */
}
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'About',
        href: '/about',
    },
];

const mvv = [
    {
        icon: '/assets/icons/4.svg',
        title: 'Missão',
        desc: 'Acolher, conhecer e reconhecer crianças, adolescentes e famílias; potencializando valores pessoais e sociais, visando a transformação da sua própria realidade.',
    },
    {
        icon: '/assets/icons/6.svg',
        title: 'Valores',
        desc: 'Autonomia, criatividade responsabilidade, aguçamento, curiosidade, participação, diálogo, e compromisso.',
    },
    {
        icon: '/assets/icons/2.svg',
        title: 'Visão',
        desc: 'Construção de uma sociedade solidaria e fraterna; com respeito a diversidade de valores pessoais e sociais: culturais, inter-religiosos e multi-raciais.',
    },
];

export default function About() {
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
            <Head title="About" />
            <AppLayout breadcrumbs={breadcrumbs}>
                <HeroCenter
                    title="Quem Somos"
                    subtitle="Conheça o Serviço Promocional Nossa Senhora Aparecida"
                    img="/assets/imagem/bg/about.webp"
                    className=""
                    aos="zoom-out-up"
                    aosDuration={700}
                />
                <AnimateSeparator />
                <section className="bg-amber-200 p-10 md:p-12">
                    <div className="flex flex-col items-stretch justify-stretch gap-10 md:flex-row">
                        {mvv.map((item, idx) => (
                            <Card key={idx} className="w-full items-center justify-center" data-aos="flip-up">
                                <CardHeader className="flex items-center justify-center">
                                    <img src={item.icon} alt={item.title} className="h-40" />
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="px-8 md:p-4">
                                    <CardDescription>{item.desc}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="mx-auto my-10 w-fit" data-aos="fade-up">
                        <ButtonRed link="/history">Conheça Nossa História</ButtonRed>
                    </div>
                </section>
                <aside className="flex flex-col items-center justify-center gap-4 bg-yellow-400 p-10">
                    <h1 className="text-center text-4xl font-black text-gray-900 uppercase">Quem faz acontecer</h1>
                    <div data-aos="zoom-in">
                        <SliderAbout>
                            <SliderAboutItem person="Sirlene Aparecida Campos de Brito" img="/assets/membros/01.jpeg" role="Presidente" />
                            <SliderAboutItem person="Cidinha" img="/assets/membros/02.jpeg" role="vice-presidente" />
                            <SliderAboutItem person="Andréia Santos" img="/assets/membros/03.jpeg" role="Tesoureira" />
                            <SliderAboutItem person="Berenice" img="/assets/membros/04.jpeg" role="Secretaria" />
                            <SliderAboutItem person="Roberta" img="/assets/membros/05.jpeg" role="2ª Tesoureira" />
                            <SliderAboutItem person="Glorinha" img="/assets/membros/06.jpeg" role="Conselheira" />
                            <SliderAboutItem person="Dr. Antônia" img="/assets/membros/07.jpeg" role="Suplente Fiscal" />
                            <SliderAboutItem person="Sidineia" img="/assets/membros/08.jpeg" role="Secretária" />
                            <SliderAboutItem person="Maria da Graça" img="/assets/membros/09.jpeg" role="Conselheira fiscal" />
                            {/* <SliderAboutItem person='Maria da Silva' img='/assets/membros/10.jpeg' role='Coordenadora' />
                            <SliderAboutItem person='Maria da Silva' img='/assets/membros/11.jpeg' role='Coordenadora' /> */}

                            {/* Adicione mais itens conforme necessário */}
                        </SliderAbout>
                    </div>
                </aside>
                <div className="mx-auto flex flex-col items-center justify-center gap-4 bg-amber-200 p-10 md:w-4/5" data-aos="fade-up">
                    <div>
                        <h1 className="text-center text-4xl font-black text-gray-900 uppercase">Beneficiados</h1>
                    </div>
                    <div>
                        <ul className="list-disc text-lg text-gray-900">
                            <li>Crianças e adolescentes de 06 meses a 17 anos</li>
                            <li>Cujas famílias são beneficiárias de programas de transferência de renda</li>
                            <li>De famílias com precário acesso a renda e a serviços públicos</li>
                            <li>Encaminhadas pelos serviços da Proteção Social Especial</li>
                            <li>Em situação de trabalho infantil- PETI</li>
                            <li>Em situação de acolhimento ou que já retornaram ao convívio familiar após medidas protetivas de acolhimento.</li>
                            <li>Egressos de medidas socioeducativas ou em cumprimento de medidas socioeducativas em meio aberto</li>
                            <li>Com deficiência, com prioridade para os benefícios do BPC</li>
                            <li>Em cumprimento ou egressos de medidas de proteção do ECA</li>
                            <li>Vinculados a programas de combate à violência e ao abuso e à exploração sexual.</li>
                            <li>Encaminhados pelos serviços de Proteção e Atendimento Especializado a Família e Indivíduos (PAEFI)</li>
                        </ul>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
