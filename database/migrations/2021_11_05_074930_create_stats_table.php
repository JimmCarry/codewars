<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stats', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('player_id')->unsigned();
            $table->integer('match_id')->unsigned();
            $table->integer('min');
            $table->integer('fg');
            $table->integer('fga');
            $table->integer('3p');
            $table->integer('3pa');
            $table->integer('ft');
            $table->integer('fta');
            $table->integer('or');
            $table->integer('dr');
            $table->integer('tot');
            $table->integer('a');
            $table->integer('pf');
            $table->integer('st');
            $table->integer('to');
            $table->integer('bs');
            $table->integer('plusminus');
            $table->integer('pts');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stats');
    }
}
