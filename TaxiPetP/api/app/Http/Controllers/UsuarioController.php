<?php

namespace App\Http\Controllers;

use App\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $usuario = Usuario::orderBy('created_at', 'desc')->paginate(10);
        return view('usuario.index', ['products' => $usuario]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('usuario.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $usuario = new Usuario();
        $usuario->nome = $request->nome;
        $usuario->email = $request->email;
        $usuario->senha = $request->senha;
        $usuario->cpf = $request->cpf;
        $usuario->rg = $request->rg;
        $usuario->telefone = $request->telefone;
        $usuario->endereco= $request->endereco;
        $usuario->cnh = $request->cnh;
        $usuario->is_admin = $request->is_admin;
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $usuario = Product::findOrFail($id);
        return view('usuario.edit',compact('usuario'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $usuario = Usuario::findOrFail($id);
        $usuario->nome = $request->nome;
        $usuario->email = $request->email;
        $usuario->senha = $request->senha;
        $usuario->cpf = $request->cpf;
        $usuario->rg = $request->rg;
        $usuario->telefone = $request->telefone;
        $usuario->endereco= $request->endereco;
        $usuario->cnh = $request->cnh;
        $usuario->is_admin = $request->is_admin;
        $usuario->save();
        return redirect()->route('usuario.index')->with('message', 'Usuario atualizado com sucesso!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $usuario = Usuario::findOrFail($id);
        $animal->delete();
        return redirect()->route('usuario.index')->with('alert-success', 'Usuário deletado com sucesso!');
    }
}
