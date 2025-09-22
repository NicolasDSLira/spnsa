import { FormInput, FormText } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { useForm } from '@inertiajs/react';
import React from 'react';
import { usePage } from '@inertiajs/react';


interface FlashProps {
    success?: boolean;
    message?: string;
}




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

    const { setData, post } = useForm({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/contato/send');
    }

    const { props } = usePage<{ flash: FlashProps }>();
    const success = props.flash?.success;
    const message = props.flash?.message;

    {
        success && (
            <div className="col-span-2 text-center text-green-600">
                {message}
            </div>
        )
    }


    return (


        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="space-y-6 px-10 py-20 bg-[url('/assets/imagem/bg/figuras.webp')] bg-cover bg-amber-400">
                <div className='bg-gray-50/80 backdrop-blur-3xl p-10 w-4/5 mx-auto'>
                    <h1 className="text-center text-4xl font-bold">Nós Envie uma mensagem</h1>
                    <form onSubmit={submit} className="mx-auto gap-10 space-y-6 md:grid md:grid-cols-2">
                        <FormInput type="text" name="name" placeholder="Nome Completo" label="Nome" required autoComplete='nome' onChange={e => setData('name', e.target.value)} />

                        <FormInput type="email" name="email" placeholder="email@email.com" label="E-mail" required autoComplete='email' onChange={e => setData('email', e.target.value)} />

                        <FormInput type="text" name="phone" placeholder="Telefone" label="Telefone" required autoComplete='phone' onChange={e => setData('phone', e.target.value)} />

                        <FormText name="message" placeholder="Digite sua mensagem" label="Mensagem" required onChange={e => setData('message', e.target.value)} />
                        <div className="col-span-2 flex items-center justify-center">
                            <input
                                type="submit"
                                value="Enviar"
                                className="bg-amber-400 px-8 py-2 shadow transition-all duration-500 hover:cursor-pointer hover:shadow-xl"
                            />
                        </div>
                    </form>
                </div>
            </div>


        </AppLayout>
    );
}
