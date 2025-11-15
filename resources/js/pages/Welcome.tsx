{
    /* Importações */
}
import { MotionPath } from '@/components/heroDraw';
import { Line } from '@/components/line';
import { ButtonRed } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardLine, CardTitle } from '@/components/ui/card';
import { Slider, SliderContent } from '@/components/ui/slider';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Link } from '@inertiajs/react';

{
    /* Breadcrumb */
}
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '/',
    },
];

{
    /* Array Helper from map items */
}
const helper = [
    {
        icon: '/assets/icons/3.svg',
        title: 'Seja um Parceiro',
        desc: 'Empresas podem nos ajudar e muito! Saiba como sua empresa pode iniciar uma parceria de mão dupla.',
    },
    {
        icon: '/assets/icons/1.svg',
        title: 'Seja Voluntário',
        desc: 'Doe seu tempo! Seu carinho, seu serviço, seu conhecimento...tudo feito com o coração tem inestimado valor.',
    },
    {
        icon: '/assets/icons/2.svg',
        title: 'Faça uma doação',
        desc: 'Faça uma doação única de acordo com sua possibilidade. Toda ajuda conta muito!',
    },
];

export default function Welcome() {
    return (
        <>
            {/** Use layout base */}
            <AppLayout breadcrumbs={breadcrumbs}>
                {/** Use Slider Swiper */}
                <Slider>
                    <SliderContent url={'/assets/imagem/galeria/img_centro_juventude_angelina_cj1_1.jpg'} title="" description="">
                        <h1 className="text-xl font-bold md:text-2xl">🎯 Conheça nossas Unidades</h1>
                        <div className="py-2 md:py-4">
                            <p>✨ Cada unidade é um ponto de esperança, aprendizado e oportunidade.</p>
                        </div>
                        <div className="py-8">
                            <a href={'/Unidades'} className="bg-amber-400 p-4 font-black">
                                Nossas unidades
                            </a>
                        </div>
                    </SliderContent>

                    <SliderContent url={'/assets/imagem/bg/about.webp'} title="" description="">
                        <h1 className="text-xl font-bold md:text-2xl">🌟 Serviço Promocional Nossa Senhora Aparecida</h1>

                        <div className="py-2 md:py-4">
                            <p>Uma trajetória dedicada à formação cidadã e ao futuro das crianças.</p>
                        </div>
                        <div className="py-8">
                            <a href="link" className="bg-amber-400 p-4 font-black">
                                Conheça nossa história!
                            </a>
                        </div>
                    </SliderContent>
                </Slider>

                {/** animate motion element and What we move */}
                <MotionPath data-aos="fade-up" data-aos-anchor-placement="top-bottom" />

                {/** How to helper */}
                <section className="space-y-6 bg-amber-400 px-10 py-10 md:px-20">
                    <h1 className="mx-auto w-fit text-center text-2xl font-extrabold text-gray-950 md:text-4xl" data-aos="fade-left">
                        Como ajudar
                    </h1>
                    <Line className="w-1/4 border-red-800" data-aos="fade-right"></Line>
                    <h3 className="mx-auto w-fit text-center font-bold text-gray-950 md:text-lg" data-aos="fade-left">
                        Toda ajuda é bem-vinda. Veja como você pode nos ajudar:
                    </h3>
                    <div className="flex flex-col gap-10 md:flex-row md:p-10">
                        {/** map helper */}
                        {helper.map((item, idx) => (
                            <Card className="w-full rounded-2xl px-6 py-14 md:w-1/3" key={idx} data-aos="fade-up">
                                <CardHeader>
                                    <img src={item.icon} alt={item.title} className="h-40" />
                                    <CardTitle className="text-center uppercase">{item.title}</CardTitle>
                                </CardHeader>
                                <CardLine className="mx-auto w-1/4 border-1 border-red-800" />
                                <CardContent>
                                    <CardDescription>{item.desc}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/** Agenda section */}
                <div className="flex w-full flex-col bg-amber-200 px-6 pt-6 md:flex-row md:px-10 md:pt-10">
                    <div className="flex w-full flex-col items-center justify-center gap-0 md:w-2/4 md:gap-10" data-aos="flip-right">
                        <h1 className="text-xl font-extrabold text-red-800 md:text-4xl">Fique por dentro</h1>
                        <div>
                            <img src="/assets/icons/schedule.svg" alt="Agenda" className="hidden md:block" />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center gap-8 p-6 md:w-2/4 md:p-10" data-aos="flip-left">
                        <p>
                            Quer ficar por dentro de todas as atividades e eventos que temos organizado? Não perca mais nenhum detalhe! Acesse agora a
                            nossa agenda e descubra como fazer parte das iniciativas que estão transformando vidas.
                        </p>
                        <ButtonRed link="/agenda">
                            <p>Confira nossa agenda</p>
                        </ButtonRed>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
