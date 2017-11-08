<?php

//use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::group('api/', function (Request $request) {
//     Route::get('animal', function (Request $request) {
//         return $request->user();
//     });
// });

Route::resource('animais', 'AnimalController');
Route::get('api/animais', 'AnimalController@index')->name('animais.index');
Route::get('api/animais', 'AnimalController@store')->name('animais.store');
Route::get('api/animais/{id}', 'AnimalController@show')->name('animais.show');
Route::get('api/animais/{id}', 'AnimalController@update')->name('animais.update');
Route::get('api/animais/{id}/edit', 'AnimalController@edit')->name('animais.edit');
Route::get('api/animais/{id}', 'AnimalController@destroy')->name('animais.destroy');
Route::get('api/animais/create', 'AnimalController@create')->name('animais.create');


