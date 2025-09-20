import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, EffectCreative, Autoplay } from 'swiper/modules';
import { type ReactNode } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-creative';



interface Slider {
    children: ReactNode[]
}

interface SliderAbout {
    children: ReactNode[]
}


interface SliderContent {
    url: string,
    title: string,
    description?: string,
    children?: ReactNode
}

interface SliderAboutItem {
    person: string,
    role: string,
    img: string,
}

function Slider({ children }: Slider) {
    return (
        <Swiper
            modules={[Pagination, A11y, EffectCreative]}
            slidesPerView={1}
            effect={'creative'}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: ['-100%', 0, -200],
                    rotate: [0, 60, 0],
                    opacity: 0.8,
                },
                next: {
                    shadow: true,
                    translate: ['100%', 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 0.8,
                },
            }}
            speed={900}
            loop={true}
            className='h-[85dvh]'
            pagination={{ clickable: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}>
            {children.map((item, idx) => (
                <SwiperSlide key={idx}>
                    {item}
                </SwiperSlide>
            ))}

        </Swiper>
    );
}

function SliderContent({ url, title, description, children }: SliderContent) {
    return (
        <div className='w-full h-full'>
            <div className='w-full bg-red-50 h-full absolute z-0 bg-cover bg-center' style={{ backgroundImage: "url('" + url + "')" }}></div>
            <div className="z-10 absolute w-full flex items-center h-full bg-gray-50/30 backdrop-blur bg-blend-color-burn" >
                <div className="p-4 md:p-6 bg-gray-50 border-4 border-amber-400 rounded-xl md:w-2/4 mx-auto max-w-[90dvw]">
                    <h3 className="text-xl md:text-4xl font-extrabold">{title}</h3>
                    <p className="font-light md:text-xl">{description}</p>
                    <div>{children}</div>
                </div>
            </div>

        </div>

    );
}

function SliderAbout({ children }: SliderAbout) {
    return (
        <>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1, // mobile
                    },
                    640: {
                        slidesPerView: 2, // tablet / monitor pequeno
                    },
                    1024: {
                        slidesPerView: 3, // monitor normal
                    },
                }}
                spaceBetween={30}
                loop={true}
                modules={[Autoplay, A11y]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                className="w-full max-w-[90dvw] mx-auto h-full"
            >
                {children.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        {item}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

function SliderAboutItem({ person, img, role }: SliderAboutItem) {
    return (
        <>
            <div className='h-full w-full p-4 rounded-lg bg-gray-200 flex flex-row items-center justify-center gap-4'>
                <div className='w-24 h-24 rounded-full overflow-hidden border-4 border-red-800'>
                    <img src={img} alt={person} className='w-full h-full' />
                </div>
                <div>
                    <h1 className='font-bold'>{person}</h1>
                    <h2>{role}</h2>
                </div>
            </div>
        </>
    );
}

export { Slider, SliderContent, SliderAbout, SliderAboutItem }