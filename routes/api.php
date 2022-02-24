<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\StatController;
use App\Http\Controllers\RefereeController;
use App\Http\Controllers\MatchController;
use App\Http\Controllers\DayController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::apiResources([
    'teams' => TeamController::class,
    'players' => PlayerController::class,
    'stats' => StatController::class,
    'referees' => RefereeController::class,
    'matches' => MatchController::class,
    'days' => DayController::class,
]);