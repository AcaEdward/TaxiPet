<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Animal;
use App\Http\Controllers\Controller;

class AnimaisController extends Controller
{
    /**
     * Apresenta todos os animais cadastrados no App.
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Animal::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'nome' => 'required',
            'raca' => 'required',
            'especie' => 'required'
        ]);
        
        $animal = new Animal();
        $animal->nome = $request->get('nome');
        $animal->raca = $request->get('raca');
        $animal->especie = $request->get('especie');
        
        $animal->save();
        return redirect()->route('animais.index')->with('message', 'Animal cadastrado com sucesso!');
    }

    /**
     * Apresenta ao usuário o animal específico que foi selecionado. 
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Animal $animal)
    {
        return $animal;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
