<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['middleware' => 'cors'], function (){
    Route::post('login', 'Api\AuthenticateController@authenticate');
    Route::group(['middleware' => 'jwt.auth'], function(){
        Route::post('order', 'Api\PagSeguroController@order');
        Route::get('session', 'Api\PagSeguroController@getSessionId');
        
        Route::get('products', 'Api\ProductsController@index');
        Route::get('products/{product}', 'Api\ProductsController@show');
        
        Route::get('animais/{animal}', 'Api\AnimaisController@show')->where('animal', '[0-9]+');
        Route::post('animais/incluir', 'Api\AnimaisController@store');
        Route::get('animais', 'Api\AnimaisController@index')->name('animais.index');
    });
});
