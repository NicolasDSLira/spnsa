<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\File;
use Mail;
use Illuminate\Http\Request;

class GetAPIController extends Controller
{
    public function galeria(): JsonResponse
    {
        $path = public_path('assets/imagem/galeria');

        if (! is_dir($path)) {
            return response()->json([]);
        }

        $files = File::files($path);

        $fileNames = array_map(function ($file) {
            return asset('assets/imagem/galeria/'.$file->getFilename());
        }, $files);

        return response()->json($fileNames);
    }

    public function parceiros(): JsonResponse
    {
        $path = public_path('assets/imagem/parceiros');
        $files = File::files($path);

        $fileNames = array_map(function ($file) {
            return asset('assets/imagem/parceiros/'.$file->getFilename());
        }, $files);

        return response()->json($fileNames);
    }

    public function transparecy(): JsonResponse
    {
        $data = [
            [
                'title' => 'SERVIÇO PROMOCIONAL NOSSA SENHORA APARECIDA',
                'CNPJ' => '58.477.555/0001-09',
                'unidade'=> ' CEI PASTORINHAS I',
                'numero'=> 61,
                'tipo'=> 'Termo de Colaboração',
                'processo'=> 304,
                'objetivo' => 'Atendimento gratuito em Creche, visando ao desenvolvimento sócioeducativo das crianças residentes no Município de Ferraz de Vasconcelos.',
                'valorTotal' => '859.855,12',
                'dataAssinatura' => '15/02/2017',
                'dataInicio'=> '02/02/2017',
                'dataFim'=> ' 31/12/2017',
                'termoColaboracao'=> 'Termo de Colaboração',
                'planoTrabalho'=> 'Plano de Trabalho',
                'termoAditivo'=> 'Termo Aditivo',
            ],
        ];

        return response()->json($data);
    }

    public function send(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'nullable|string|max:20',
            'message' => 'required|string',
        ]);

        $data = [
            'name'      => $request->name,
            'body'      => $request->message,
            'email'     => $request->email,
            'phone'     => $request->phone,
            'data'      => now()->format('d/m/Y H:i:s'),
        ];

        Mail::send('utilitarios.email', $data, function ($message) use ($request) {
            $message->to('contato@spnsa.org.br', 'Contato Web - ' . $request->name)
                ->subject('Formulário de Contato')
                ->from('contato@spnsa.org.br', $request->name);
        });

        return redirect()->back()->with('success', true)->with('message', 'Mensagem enviada com sucesso!');

    }
}
