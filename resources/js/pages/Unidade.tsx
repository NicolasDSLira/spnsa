import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";

{
    /* Breadcrumb */
}
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Unidades',
        href: '/Unidades',
    },
];

export default function Unidade() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <section className="relative h-[85dvh] overflow-y-scroll snap-y snap-mandatory scrollbar-hide">


                {/* Unidade 1 */}
                <div className="sticky top-0 flex h-11/12 items-center md:justify-start md:px-20 snap-start bg-animate bg-linear-to-r from-amber-500 to-amber-700 w-dvw">
                    <div className="relative p-10 bg-gray-50 rounded-2xl max-w-full md:space-y-4 shadow-2xl flex flex-col md:flex-row justify-center items-center gap-4 h-4/5 md:m-10 m-4 w-full">
                        <div className="flex flex-col md:gap-10 gap-4 md:w-2/5 justify-center p-4 rounded-lg z-10 bg-gray-50/70 backdrop-blur-sm">
                            <h2 className="md:text-lg font-extrabold md:text-center self-start ">CENTRO DE EDUCAÇÃO INFANTIL – PASTORINHAS</h2>
                            <div className="flex flex-col gap-4 text-sm md:text-base">
                                <a href="">E-mail: ceipastorinhas@spnsa.org.br</a>
                                <a href="">tel: 4674-1343</a>
                                <a href="">Rua Celso Santana, 201. Vila São João, Ferraz de Vasconcelos - SP. CEP: 08545-110</a>
                            </div>
                        </div>
                        <div className="h-full w-full md:w-3/5 border-amber-600 border-4 rounded-lg overflow-hidden shadow-2xl absolute md:relative top-0 right-0 z-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!4v1759794839136!6m8!1m7!1sp2OpUtUpAyVMow19yf1VsQ!2m2!1d-23.53261986046995!2d-46.37099274819874!3f250.09134624506453!4f9.90693862219986!5f0.7820865974627469" className="w-full h-full"></iframe>
                        </div>
                    </div>
                </div>

                {/* Unidade 2 */}
                <div className="sticky top-0 flex h-11/12 items-center md:justify-start md:px-20 snap-start bg-animate bg-linear-to-r from-emerald-500 to-emerald-700 w-dvw">
                    <div className="relative p-10 bg-gray-50 rounded-2xl max-w-full md:space-y-4 shadow-2xl flex flex-col md:flex-row justify-center items-center gap-4 h-4/5 md:m-10 m-4 w-full">
                        <div className="flex flex-col md:gap-10 gap-4 md:w-2/5 justify-center p-4 rounded-lg z-10 bg-gray-50/70 backdrop-blur-sm">
                            <h2 className="md:text-lg font-extrabold md:text-center self-start ">CENTRO DE JUVENTUDE JESUS E MARIA I - Angelina</h2>
                            <div className="flex flex-col gap-4 text-sm md:text-base">
                                <p>E-mail's: <a href="">cjangelinan1@spnsa.org.br</a> - <a href="">cjangelinan2@spnsa.org.br</a></p>
                                <a href="">Tel.: 4676-1886</a>
                                <a href="">
                                    R. Kazuo Yokomizo, 122. Vila Angelina, Ferraz de Vasconcelos – SP . CEP: 08536-540
                                </a>
                            </div>
                        </div>
                        <div className="h-full w-full md:w-3/5 border-emerald-600 border-4 rounded-lg overflow-hidden shadow-2xl absolute md:relative top-0 right-0 z-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!4v1759796435819!6m8!1m7!1sTdNdJtDE-_J93opb1hZexw!2m2!1d-23.53574663997099!2d-46.38490544040771!3f19.373081605957363!4f-19.70638498595183!5f0.7820865974627469" className="w-full h-full"></iframe>
                        </div>
                    </div>
                </div>


                {/* Unidade 3 */}
                <div className="sticky top-0 flex h-11/12 items-center md:justify-start md:px-20 snap-start bg-animate bg-linear-to-r from-rose-500 to-rose-700 w-dvw">
                    <div className="relative p-10 bg-gray-50 rounded-2xl max-w-full md:space-y-4 shadow-2xl flex flex-col md:flex-row justify-center items-center gap-4 h-4/5 md:m-10 m-4 w-full">
                        <div className="flex flex-col md:gap-10 gap-4 md:w-2/5 justify-center p-4 rounded-lg z-10 bg-gray-50/70 backdrop-blur-sm">
                            <h2 className="md:text-lg font-extrabold md:text-center self-start ">CENTRO DE JUVENTUDE JESUS E MARIA II - Santo Antônio</h2>
                            <div className="flex flex-col gap-4 text-sm md:text-base">
                                <a href="">E-mail: cjsantoantonio@spnsa.org.br</a>
                                <a href="">Tel.: 4679-6990</a>
                                <a href="">R. Francisco Fernandes Barroso, 30. Vila Santo Antônio, Ferraz de Vasconcelos – SP. CEP: 08534-200</a>
                            </div>
                        </div>
                        <div className="h-full w-full md:w-3/5 border-rose-600 border-4 rounded-lg overflow-hidden shadow-2xl absolute md:relative top-0 right-0 z-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!4v1759796585491!6m8!1m7!1sRmXQTTacvhefGASB1gaZIg!2m2!1d-23.5508506116951!2d-46.38582155786336!3f297.5938059607121!4f-0.8778942715384375!5f0.7820865974627469" className="w-full h-full"></iframe>
                        </div>
                    </div>
                </div>


                {/* Unidade 4 */}
                <div className="sticky top-0 flex h-11/12 items-center md:justify-start md:px-20 snap-start bg-animate bg-linear-to-r from-violet-500 to-violet-700 w-dvw">
                    <div className="relative p-10 bg-gray-50 rounded-2xl max-w-full md:space-y-4 shadow-2xl flex flex-col md:flex-row justify-center items-center gap-4 h-4/5 md:m-10 m-4 w-full">
                        <div className="flex flex-col md:gap-10 gap-4 md:w-2/5 justify-center p-4 rounded-lg z-10 bg-gray-50/70 backdrop-blur-sm">
                            <h2 className="md:text-lg font-extrabold md:text-center self-start ">CENTRO DE JUVENTUDE JESUS E MARIA III – Margarida</h2>
                            <div className="flex flex-col gap-4 text-sm md:text-base">
                                <a href="">E-mail: cjmargarida@spnsa.org.br</a>
                                <a href="">Tel.: 4676-0562</a>
                                <a href="">R. das Margaridas, 710. Vila Santa Margarida, Ferraz de Vasconcelos –SP. CEP: 08543-220</a>
                            </div>
                        </div>
                        <div className="h-full w-full md:w-3/5 border-violet-600 border-4 rounded-lg overflow-hidden shadow-2xl absolute md:relative top-0 right-0 z-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!4v1759796804471!6m8!1m7!1sVzhQqqhysQOKysX0_LpfgA!2m2!1d-23.52535860522639!2d-46.37105997599675!3f9.12!4f0!5f0.7820865974627469" className="w-full h-full"></iframe>
                        </div>
                    </div>
                </div>

                {/* Unidade 5 */}
                <div className="sticky top-0 flex h-11/12 items-center md:justify-start md:px-20 snap-start bg-animate bg-linear-to-r from-sky-500 to-sky-700 w-dvw">
                    <div className="relative p-10 bg-gray-50 rounded-2xl max-w-full md:space-y-4 shadow-2xl flex flex-col md:flex-row justify-center items-center gap-4 h-4/5 md:m-10 m-4 w-full">
                        <div className="flex flex-col md:gap-10 gap-4 md:w-2/5 justify-center p-4 rounded-lg z-10 bg-gray-50/70 backdrop-blur-sm">
                            <h2 className="md:text-lg font-extrabold md:text-center self-start ">CENTRO DE JUVENTUDE JESUS E MARIA IV – SÃO LUIS</h2>
                            <div className="flex flex-col gap-4 text-sm md:text-base">
                                <a href="">E-mail: cjsaoluiz@spnsa.org.br</a>
                                <a href="">Tel.: 4676-6632</a>
                                <a href="">R. Vicente Custódio da Silva, 744. Jd. Freire, Ferraz de Vasconcelos –SP. CEP: 08543-050</a>
                            </div>
                        </div>
                        <div className="h-full w-full md:w-3/5 border-sky-600 border-4 rounded-lg overflow-hidden shadow-2xl absolute md:relative top-0 right-0 z-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!4v1759796944868!6m8!1m7!1s0U-PdxC87_3sHWptP252Ww!2m2!1d-23.51761235270771!2d-46.37200637445456!3f107.71239191327092!4f-0.97621252637731!5f1.743584189362319" className="w-full h-full"></iframe>
                        </div>
                    </div>
                </div>


            </section>
        </AppLayout>
    );
}
