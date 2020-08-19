<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkingInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //informacion_laboral
        Schema::connection('pgsql-cecy')->create('working_information', function (Blueprint $table) {
            $table->id();
            $table->string('company_name',150); //empresa_nombre
            $table->string('company_address',150); //empresa_direccion
            $table->string('company_email',150); //empresa_correo
            $table->string('company_phone',150); //empresa_telefono
            $table->string('company_activity',150); //empresa_actividad
            $table->string('company_summmary',255); //empresa_resumen
            $table->boolean('company_sponsor'); //empresa_auspiciado
            $table->string('sponsor_name',255); //nombre_auspiciante
            $table->foreignId('person_instructor_id')->constrained('authentication.users'); //id_persona_instructor
            $table->string('knowledge_course',150); //conocimiento_curso
            $table->string('recomendation_course',150); //recomendacion_curso
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('pgsql-cecy')->dropIfExists('working_information');
    }
}