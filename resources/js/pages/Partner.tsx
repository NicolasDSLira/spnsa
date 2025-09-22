import { ButtonRed, ButtonYelow, ButttonOutlineRed } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

{
    /** Breadcrumb */
}
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Parceiros',
        href: '/partner',
    },
];

export default function Partner() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <section className="bg-[url('/assets/imagem/bg/bg-parceria.webp')]  flex flex-col items-center justify-center gap-6 bg-amber-400 bg-cover bg-fixed bg-top p-10 text-gray-900 md:min-h-screen md:py-20">
                    <div
                        className="w-full space-y-6 rounded-2xl border-4 border-gray-900 bg-amber-400/10 p-10 text-justify shadow-2xl backdrop-blur-xs md:w-2/3"
                        data-aos="fade-right"
                        data-aos-offset="300"
                    >
                        <h1 className="text-center text-4xl font-bold decoration-4">Seja um parceiro!</h1>
                        <p className="text-center text-xl">Sua empresa pode nos ajudar e ainda possuir diversos benefícios.</p>

                        <p className="text-xl">
                            Temos parceiros que doam alimentos, outros já pintaram nossas sedes, o que a sua empresa pode nos oferecer? Com certeza
                            toda ajuda será muito bem-vinda.
                        </p>
                    </div>
                </section>

                <article className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 p-10 py-20 text-gray-900 select-none">
                    <h1 className="my-4 text-3xl font-black md:my-10 md:text-4xl">Benefícios para a empresa que se torna parceira:</h1>

                    <div className="w-full max-w-6xl gap-10 md:grid md:grid-cols-3">
                        <div className="col-span-2 cursor-zoom-in space-y-4 border-2 border-red-900 bg-gray-100 p-4 tracking-wide transition-transform duration-300 ease-in-out hover:scale-105 md:p-10 md:text-justify md:indent-2">
                            <h3 className="text-2xl font-bold text-red-900">Dedução no imposto de renda</h3>
                            <p>
                                Sabia que quando uma empresa doa para uma ONG, ela pode ter uma porcentagem do Imposto de Renda deduzido? Assim, em
                                vez de dar o seu dinheiro para o governo, ajudará uma instituição que promove o bem-estar de comunidades carentes,
                                especialmente crianças e adolescentes.
                            </p>
                            <p>
                                Isso só é possível para empresas que utilizam o modelo completo de declaração e essas doações têm um limite de valor
                                que varia a cada ano. Você também pode optar por doar para apenas uma ou para várias instituições.
                            </p>
                            <p>
                                Porém, doando para uma instituição, o procedimento torna-se mais transparente e fica mais fácil acompanhar todos os
                                programas e projetos. Assim, você saberá exatamente como o seu dinheiro será utilizado.
                            </p>
                            <p>
                                Empresas tributadas pelo lucro real podem deduzir do Imposto de Renda 34% do valor doado, até o limite de 2% do lucro
                                operacional, conforme Lei 9249 – inciso III do § 2° do artigo 13.
                            </p>
                        </div>
                        <div className="cursor-zoom-in bg-[url(/assets/imagem/parceria-01.webp)] bg-cover bg-top transition-transform duration-300 ease-in-out hover:scale-105"></div>
                    </div>

                    <div className="w-full max-w-6xl gap-10 md:grid md:grid-cols-3">
                        <div className="cursor-zoom-in bg-[url(/assets/imagem/parceria-02.webp)] bg-cover bg-top transition-transform duration-300 ease-in-out hover:scale-105"></div>
                        <div className="col-span-2 cursor-zoom-in space-y-4 border-2 border-red-900 bg-gray-100 p-4 tracking-wide transition-transform duration-300 ease-in-out hover:scale-105 md:p-10 md:text-justify md:indent-2">
                            <h3 className="text-2xl font-bold text-red-900">Mudança na forma como o consumidor vê o estabelecimento</h3>
                            <p>
                                Hoje em dia, preços abaixo do mercado ou um bom atendimento já não representam muito para o comprador. O consumidor
                                deseja mais do que isso e, com toda essa concorrência, sua empresa precisa de um diferencial para se destacar da
                                maioria.
                            </p>
                            <p>
                                Isso só é possível para empresas que utilizam o modelo completo de declaração e essas doações têm um limite de valor
                                que varia a cada ano. Você também pode optar por doar para apenas uma ou para várias instituições.O mundo dos negócios
                                já descobriu que a responsabilidade social é um bom atrativo e uma forma de conseguir mais clientes e fidelizar os que
                                já existem. Isso porque as ações sociais cresceram, a consciência cidadã se tornou mais presente na vida das pessoas,
                                especialmente por conta das redes sociais. As gerações Y e Z estão mais preocupadas com a coletividade e querem se
                                sentir mais engajadas no bem-estar de todos. As empresas também precisam se preocupar como são vistas pelo seu público
                                nesses ambientes.
                            </p>
                            <p>
                                Muitas pessoas querem fazer algo a mais pelo mundo, mas muitos não conseguem ou mesmo não sabem como fazer isso.
                                Adquirir produtos de um estabelecimento que apoia uma causa cidadã já é uma maneira de ajudar outras pessoas, ainda
                                que indiretamente.
                            </p>
                            <p>
                                Assim, fazer doações para ONGs aumenta o valor da sua marca e ela passa a se promover por si mesma. As pessoas passam
                                a comentar e a parabenizar a sua empresa e isso agrega valor, oferecendo também maior visibilidade.
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-6xl gap-10 md:grid md:grid-cols-2">
                        <div className="cursor-zoom-in space-y-4 border-2 border-red-900 bg-gray-100 p-4 tracking-wide transition-transform duration-300 ease-in-out hover:scale-105 md:p-10 md:text-justify md:indent-2">
                            <h3 className="text-2xl font-bold text-red-900">Agregação de valor à marca</h3>
                            <p>
                                A palavra de ordem no mundo dos negócios é relacionamento. Depois da explosão das redes sociais e dos aplicativos para
                                celular, ter um bom relacionamento com os consumidores é um dos aspectos que mais impacta nos resultados de uma
                                empresa. Quanto melhor o relacionamento com o cliente, maiores são as chances de vendas.
                            </p>
                            <p>
                                A forma com a qual os consumidores enxergam a sua empresa faz toda a diferença na decisão de compra. As pessoas se
                                sentem mais confortáveis quando fazem uma compra que, de certa forma, irá contribuir para a melhora na vida de alguém.
                            </p>
                        </div>
                        <div className="cursor-zoom-in bg-[url(/assets/imagem/parceria-03.webp)] bg-cover bg-top transition-transform duration-300 ease-in-out hover:scale-105"></div>
                    </div>

                    <div className="w-full max-w-6xl gap-10 md:grid md:grid-cols-3">
                        <div className="cursor-zoom-in bg-[url(/assets/imagem/parceria-04.webp)] bg-cover bg-top transition-transform duration-300 ease-in-out hover:scale-105"></div>
                        <div className="col-span-2 cursor-zoom-in space-y-4 border-2 border-red-900 bg-gray-100 p-4 tracking-wide transition-transform duration-300 ease-in-out hover:scale-105 md:p-10 md:text-justify md:indent-2">
                            <h3 className="text-2xl font-bold text-red-900">O governo oferece incentivos fiscais</h3>
                            <p>
                                Se você tem uma empresa, não importando se ela é física ou virtual, certamente precisa pagar alguns impostos ao
                                governo. Que bom seria se você pudesse escolher, dentro de algumas boas opções, para onde gostaria de destinar esse
                                dinheiro não é mesmo? Assim, teria a certeza para onde o fruto do seu esforço e os lucros do seu negócio estão indo.
                            </p>
                            <p>
                                A esse processo chama-se Renúncia Fiscal e as regras dependem de cada município ou estado. E você não ganha apenas no
                                poder de escolha, os projetos que receberam o seu apoio divulgam a sua marca em diversos eventos com placas de
                                reconhecimento, sua logo em sites institucionais e outros materiais que ajudam a criar uma espécie de marketing
                                empresarial.
                            </p>
                            <p>
                                Para isso, alguns documentos podem servir como pré-requisitos como certidões negativas de débito junto à Receita
                                Federal e também as de âmbito estadual e municipal. Os incentivos fiscais têm um foco maior em empresas que contribuem
                                para projetos que ajudam crianças, adolescentes, idosos e portadores de deficiência.
                            </p>
                        </div>
                    </div>
                </article>

                <aside className="bg-amber-200 p-10 py-20 text-gray-900">
                    <div className="m:w-2/4 mx-auto space-y-4">
                        <h1 className="text-center text-4xl font-bold">Como efetivar a parceria?</h1>
                        <p>Entre em contato com a nossa administração ou nós faça uma visita:</p>
                        <a href="https://maps.app.goo.gl/ToXhzARwCrwBPxWHA" className="font-bold">
                            Rua Abílio Leite Guimarães, 35 – Jardim São João – Ferraz de Vasconcelos / SP - CEP: 08545-200
                        </a>
                    </div>
                    <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-4 md:w-2/4 md:flex-row md:gap-10">
                        <ButtonRed link="mailto:contato@spnsa.org.br">
                            <p>Entre em contato</p>
                        </ButtonRed>
                        <ButttonOutlineRed link="tel:+551146767122">
                            <div className="flex gap-4">
                                <img src="assets/imagem/icons/phone.svg" alt="Phone" className="w-6" />
                                <p>Ligue agora</p>
                            </div>
                        </ButttonOutlineRed>
                    </div>

                    <div className="mx-auto mt-20 flex flex-col items-center justify-around gap-4 bg-gray-50 py-10 md:w-3/4 md:flex-row md:p-10">
                        <p className="text-lg font-bold">Confira nossos parceiros</p>
                        <ButtonYelow link="/partners">Veja nossos parceiros</ButtonYelow>
                    </div>
                </aside>
            </AppLayout>
        </>
    );
}
