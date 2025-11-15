const data = {
    endereco: 'Rua Abílio Leite Guimarães, 35 – Jardim São João – Ferraz de Vasconcelos / SP - CEP: 08545-200',
    cnpj: '58.477.555/0001-09',
    email: 'contato@spnsa.org.br',
    phone: '1146767122',
    social: {
        tiktok: 'https://spnsa.org.br',
        insta: 'https://www.instagram.com/servipromocional',
        face: 'https://www.facebook.com/servproaparecida',
        whats: 'https://wa.me/551146767122',
    },
    creator: 'L4Soft',
};

export default function () {
    // Log data for debugging
    console.log(data);
    return (
        <div className="flex items-center justify-center gap-10 p-4 bottom-0 bg-gray-50">
            {/** row 1 */}
            <div className="flex w-1/3 flex-col items-center gap-6 text-center">
                <div>
                    <img src="/assets/logo.png" alt="SPNSA" width={50}/>
                </div>
                <div>
                    <p>{data.endereco}</p>
                </div>
            </div>
            {/** row 2 */}
            <div className="flex w-1/3 flex-col justify-between gap-4">
                <div>
                    <p>
                        <span className="font-bold">CNPJ:</span> {data.cnpj}
                    </p>
                </div>
                <div>
                    <p>
                        <span className="font-bold">Email:</span> {data.email}
                    </p>
                </div>
                <div>
                    <p>
                        <span className="font-bold">Telefone:</span> {data.phone}
                    </p>
                </div>
            </div>
            {/** row 3 */}
            <div className="flex w-1/3 gap-6">
                <a href={data.social.tiktok} aria-label="Tik Tok">
                    <img src="/assets/icons/tiktok.svg" alt="Tik Tok" width={25}/>
                </a>
                <a href={data.social.insta} aria-label="Instagram">
                    <img src="/assets/icons/instagram.svg" alt="Instagram"  width={25}/>
                </a>
                <a href={data.social.face} aria-label="Facebook">
                    <img src="assets/icons/facebook.svg" alt="Facebook" width={25}/>
                </a>
                <a href={data.social.whats} aria-label="WhatsApp">
                    <img src="/assets/icons/whatsapp.svg" alt="WhatsApp" width={25}/>
                </a>
            </div>
        </div>
    );
}
