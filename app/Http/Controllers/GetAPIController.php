<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\File;

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
}
