<?php

//use Illuminate\Http\Request;

/*
  |--------------------------------------------------------------------------
  | API Routes
  |--------------------------------------------------------------------------
  |
  | Aqui é onde você pode registrar as rotas da API para sua aplicação. Estes
  | as rotas são carregadas pelo RouteServiceProvider dentro de um grupo que
  | é atribuído o grupo de middleware "api". Aproveite a construção de sua API!
  |
 */

// Route::group('api/', function (Request $request) {
//     Route::get('animal', function (Request $request) {
//         return $request->user();
//     });
// });

Route::resource('animais', 'AnimalController');
Route::get('animais', 'AnimalController@index')->name('animais.index');
Route::get('animais', 'AnimalController@store')->name('animais.store');
Route::get('animais/{id}', 'AnimalController@show')->name('animais.show');
Route::get('animais/{id}', 'AnimalController@update')->name('animais.update');
Route::get('animais/{id}/edit', 'AnimalController@edit')->name('animais.edit');
Route::get('animais/{id}', 'AnimalController@destroy')->name('animais.destroy');
Route::get('animais/create', 'AnimalController@create')->name('animais.create');

Route::resource('usuario', 'UsuarioController');
Route::get('usuario', 'UsuarioController@index')->name('usuario.index');
Route::get('usuario', 'UsuarioController@store')->name('usuario.store');
Route::get('usuario/{id}', 'UsuarioController@show')->name('usuario.show');
Route::get('usuario/{id}', 'UsuarioController@update')->name('usuario.update');
Route::get('usuario/{id}/edit', 'UsuarioController@edit')->name('usuario.edit');
Route::get('usuario/{id}', 'UsuarioController@destroy')->name('usuario.destroy');
Route::get('usuario/create', 'UsuarioController@create')->name('usuario.create');


