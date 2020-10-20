<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateParamsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'params';

    /**
     * Run the migrations.
     * @table params
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->increments('id');
            $table->enum('lang', ['fr', 'en'])->default('en');
            $table->enum('display_mode', ['dark', 'light'])->default('light');
            $table->integer('user_id')->unsigned();

            $table->foreign('user_id')
                ->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
     public function down()
     {
       Schema::dropIfExists($this->tableName);
     }
}
