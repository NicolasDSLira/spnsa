import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

{
    /** Breadcrumb */
}
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Doações',
        href: '/donations',
    },
];

export default function Donations() {
    const cnpj =
        '00020126380014br.gov.bcb.pix0116adm@spnsa.org.br27600016BR.COM.PAGSEGURO0136F6AE7AC4-A6D2-48F1-8265-A222884E561B5204835153039865802BR5925Servico Promocional Nossa6015FERRAZ DE VASCO62290525PAGS0000000002508131223606304B752';

    const copyCnpj = async () => {
        try {
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(cnpj);
            } else {
                const textArea = document.createElement('textarea');
                textArea.value = cnpj;
                textArea.style.position = 'fixed';
                textArea.style.opacity = '0';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
            }
            alert('Chave pix copiado para a área de transferência!');
        } catch (err) {
            console.error('Erro ao copiar chave pix: ', err);
        }
    };

    return (
        <>
            <Head title="Doações" />
            <AppLayout breadcrumbs={breadcrumbs}>
                <div className="bg-[url('/assets/imagem/bg/figuras.webp')] flex flex-col items-center justify-center gap-6 bg-amber-400 bg-contain bg-repeat p-10 py-20 text-gray-900">
                    <h1 className="text-4xl font-bold text-red-800 underline decoration-red-800 decoration-4">Faça sua doação</h1>
                    <p>Ajude a transformar a vida de nossas crianças.</p>

                    <div className="bg-gray-50">
                        <img src="/assets/imagem/bancos/pix.png" alt="Chave pix - QRcode" width={250} />
                    </div>
                    <button
                        className="group flex cursor-pointer flex-col items-center justify-center gap-10 bg-gray-50 px-10 py-4 font-bold transition-all duration-400 hover:scale-105 md:flex-row"
                        onClick={copyCnpj}
                    >
                        Copiar chave pix
                    </button>
                </div>
            </AppLayout>
        </>
    );
}
