<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMatchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('matches', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('game_duration');
            $table->integer('attendance');
            $table->integer('hometeam_id')->unsigned();
            $table->integer('visitorteam_id')->unsigned();
            $table->integer('score_final_home');
            $table->integer('score_final_visitor');
            $table->integer('score_first_home');
            $table->integer('score_second_home');
            $table->integer('score_third_home');
            $table->integer('score_fourth_home');
            $table->integer('score_first_visitor');
            $table->integer('score_second_visitor');
            $table->integer('score_third_visitor');
            $table->integer('score_fourth_visitor');
            $table->integer('home_team_min');
            $table->integer('home_team_fg');
            $table->integer('home_team_fga');
            $table->integer('home_team_3p');
            $table->integer('home_team_3pa');
            $table->integer('home_team_ft');
            $table->integer('home_team_fta');
            $table->integer('home_team_or');
            $table->integer('home_team_dr');
            $table->integer('home_team_tot');
            $table->integer('home_team_a');
            $table->integer('home_team_pf');
            $table->integer('home_team_st');
            $table->integer('home_team_to');
            $table->integer('home_team_bs');
            $table->integer('home_team_plusminus');
            $table->integer('visitor_team_pts');
            $table->integer('visitor_team_min');
            $table->integer('visitor_team_fg');
            $table->integer('visitor_team_fga');
            $table->integer('visitor_team_3p');
            $table->integer('visitor_team_3pa');
            $table->integer('visitor_team_ft');
            $table->integer('visitor_team_fta');
            $table->integer('visitor_team_or');
            $table->integer('visitor_team_dr');
            $table->integer('visitor_team_tot');
            $table->integer('visitor_team_a');
            $table->integer('visitor_team_pf');
            $table->integer('visitor_team_st');
            $table->integer('visitor_team_to');
            $table->integer('visitor_team_bs');
            $table->integer('visitor_team_plusminus');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('matches');
    }
}
