<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlayersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('players', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('team_id')->unsigned();
            $table->string('first_name', 200);
            $table->string('last_name', 200);
            $table->integer('number');
            $table->string('position', 200);
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
        Schema::dropIfExists('players');
    }
}
