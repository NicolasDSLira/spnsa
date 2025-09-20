"use client";
import React, { useRef } from "react";
import { animate } from "motion";

function AnimateSeparator(): React.ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  let controls: ReturnType<typeof animate>;

  const handleMouseEnter = () => {

    if (ref.current) {
      controls?.cancel();
      controls = animate(
        ref.current,
        { "--bg-size": ["0% 100%", "100% 100%"] },
        {
          duration: 0.3,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    }
  };

  // Azul recolhe ao mouse sair
  const handleMouseLeave = () => {
    if (ref.current) {
      controls?.cancel();
      controls = animate(
        ref.current,
        { "--bg-size": ["100% 100%", "0% 100%"] },
        {
          duration: 0.3,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    }
  };

  return (
    <article className="flex md:w-[90%] w-full justify-center md:flex-row flex-col md:items-stretch items-center rounded-b-4xl md:rounded-e-full border-blue-600 border-4 hover:cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // data-aos="fade-right"
      // data-aos-offset="100"
      // data-aos-easing="ease-in"
      >
      <div className="md:w-fit w-full bg-blue-600 text-gray-100 p-4 flex">
        <h1 className="w-full font-extrabold md:text-5xl text-2xl self-center whitespace-nowrap">
          Nosso Objetivo
        </h1>
      </div>
      <div
        ref={ref}

        className="max-w-fit p-10 rounded-b-4xl md:rounded-e-full transition duration-200 ease-in-out cursor-pointer md:relative overflow-hidden "
        style={{
          background:
            "linear-gradient(to left, #155dfc 0%, #155dfc 100%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "var(--bg-size, 0% 100%)",
        }}
      >
        <p className="text-blue-900 font-semibold group-hover:text-gray-100 transition duration-100 md:rounded-e-full">
          Oferecer um espaço acolhedor, possibilitando o pleno desenvolvimento intelectual, esportivo, artístico e espiritual, proporcionando atividades de forma lúdica, ampliando e fortalecendo as oportunidades de aprendizado, convivência e socialização, contribuindo com sua formação como cidadãos comprometidos com ações transformadoras da realidade em gradativo crescimento futuro, e o processo de aprendizagem no período do contra turno escolar, possibilitando: Aprender a conhecer, aprender a fazer, aprender a conviver e aprender a ser.
        </p>
      </div>
    </article>
  );
}

export { AnimateSeparator };
