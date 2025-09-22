import { cn } from '@/lib/utils';
import { Transition } from 'motion/react';
import * as motion from 'motion/react-client';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const transition: Transition = {
    duration: 6,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
};

interface AnimatedPath {
    className: string;
    style?: React.CSSProperties;
}

const elementos = [
    {
        icon: '/assets/icons/4.svg',
        title: 'Transformando Vidas',
        desc: 'Dedicamos nossa trajetória a impactar positivamente pessoas em vulnerabilidade. Por meio da educação, do acolhimento e do acompanhamento constante, buscamos abrir caminhos, criar oportunidades e transformar histórias.',
    },
    {
        icon: '/assets/icons/6.svg',
        title: 'Missão e Esperança',
        desc: 'Nossa missão é desenvolver integralmente crianças, adolescentes e famílias. Oferecemos esperança e condições para que cada um supere desafios e construa um futuro mais justo e cheio de possibilidades. Cada conquista, por menor que pareça, é uma vitória.',
    },
    {
        icon: '/assets/icons/5.svg',
        title: 'Juntos pelo Futuro',
        desc: 'O que nos move é a certeza de que a transformação acontece quando caminhamos lado a lado. Cada sorriso, aprendizado e história de superação nos fortalece e inspira a seguir na construção de um mundo mais humano e solidário.',
    },
];

const motionPathD = `M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5`;

function AnimatedPath({ className, style }: AnimatedPath) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437" className={className} style={style}>
            <motion.path
                d={motionPathD}
                fill={'transparent'}
                strokeWidth={'12'}
                stroke={'#fbbf24'}
                strokeLinecap={'round'}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={transition}
            />
        </svg>
    );
}

function MotionPath({ ...props }) {
    return (
        <article className="relative flex w-full overflow-hidden" {...props}>
            <div className="absolute top-0 flex h-fit w-full flex-col items-stretch justify-between md:flex-row">
                <AnimatedPath className="pointer-events-none w-fit" style={{ zIndex: 0 }} />
                <AnimatedPath className="pointer-events-none w-fit" style={{ zIndex: 0 }} />
            </div>
            <div className="absolute bottom-0 flex h-fit w-full flex-col items-stretch justify-around md:flex-row">
                <AnimatedPath className="pointer-events-none w-fit" style={{ zIndex: 0 }} />
                <AnimatedPath className="pointer-events-none w-fit" style={{ zIndex: 0 }} />
                <AnimatedPath className="pointer-events-none w-fit" style={{ zIndex: 0 }} />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-screen flex-col items-center gap-4 border-x-4 border-b-4 border-amber-400 bg-gray-50/30 p-10 shadow-2xl backdrop-blur-lg md:w-[90%] md:gap-8 md:rounded-ee-2xl md:bg-gray-100/80">
                <h1 className="text-2xl font-bold md:text-4xl">O que nós move</h1>
                <hr className="w-full" />
                <p className="text-base">
                    Há mais de três décadas seguimos firmes no propósito de transformar vidas e construir um futuro mais justo. Acreditamos que a
                    educação, o cuidado e o apoio contínuo são caminhos para gerar esperança e criar oportunidades. Unidos, podemos mudar a realidade
                    de crianças, adolescentes e famílias em situação de vulnerabilidade social.
                </p>

                <div className="flex flex-col gap-8 md:flex-row md:gap-4">
                    {elementos.map((item, idx) => (
                        <Card
                            className="w-full md:w-1/3"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-anchor-placement="center-bottom"
                            key={idx}
                        >
                            <CardHeader>
                                <img src={item.icon} className="w-3/4" alt={item.title}/>
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="px-4 md:px-2">
                                <CardDescription>{item.desc}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <div className="absolute end-0 hidden h-20 w-full self-end bg-amber-400 md:block"></div>
        </article>
    );
}

interface HeroCenter {
    className?: string;
    title?: string;
    subtitle?: string;
    aos?: string;
    aosDuration?: string | number;
    img?: string;
}

function HeroCenter({ className, title, subtitle, aos, aosDuration, img }: HeroCenter) {
    return (
        <div
            className={cn('flex h-[85dvh] w-full items-center justify-center bg-cover bg-center', className)}
            style={{ backgroundImage: "url('" + img + "')" }}
            data-aos={aos}
            data-aos-duration={aosDuration}
        >
            <div className="space-y-4 rounded-xl bg-gray-100 p-10 shadow-2xl shadow-gray-900">
                <h1 className="text-4xl font-bold">{title}</h1>
                <h3 className="text-sm font-bold">{subtitle}</h3>
            </div>
        </div>
    );
}

export { HeroCenter, MotionPath };
