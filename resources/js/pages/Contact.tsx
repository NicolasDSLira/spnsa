import { FormInput, FormText } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

{
    /** Breadcrumb */
}
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Contato',
        href: '/contact',
    },
];

export default function Contact() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="space-y-6 px-10 py-20">
                <h1 className="text-center text-4xl font-bold">Nós Envie uma mensagem</h1>
                <form action="" className="mx-auto gap-10 space-y-6 md:grid md:w-2/4 md:grid-cols-2">
                    <FormInput type="text" name="name" placeholder="Nome Completo" label="Nome" />

                    <FormInput type="email" name="emai" placeholder="email@email.com" label="E-mail" />

                    <FormInput type="text" name="phone" placeholder="Telefone" label="Telefone" />

                    <FormText name="message" placeholder="Digite sua mensagem" label="Mensagem" />
                    <div className="col-span-2 flex items-center justify-center">
                        <input
                            type="submit"
                            value="Enviar"
                            className="bg-amber-400 px-8 py-2 shadow transition-all duration-500 hover:cursor-pointer hover:shadow-xl"
                        />
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
