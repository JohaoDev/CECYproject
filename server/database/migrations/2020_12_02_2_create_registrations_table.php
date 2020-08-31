<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegistrationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //matriculas
        Schema::connection('pgsql-cecy')->create('registrations', function (Blueprint $table) {
            $table->id();
            $table->string('date_registration', 50); //fecha_matricula
            $table->foreignId('person_participant_id')->constrained('authentication.users'); //id_persona_participante
            $table->boolean('approved'); //aprobado
            $table->foreignId('state_id')->constrained("ignug.states"); //id_estado
            $table->foreignId('registration_type_id')->constrained('cecy.catalogues'); //id_tipo_matricula
            $table->integer('number_registration'); //numero_de_matricula
            $table->foreignId('planification_id')->constrained('cecy.planifications'); //id_tipo_matricula
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('pgsql-cecy')->dropIfExists('registrations');
    }
}
