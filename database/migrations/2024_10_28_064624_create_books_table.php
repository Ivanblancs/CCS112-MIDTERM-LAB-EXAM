<?php
// Book migration for 'books' table in 'laravel_midterm_lab_exam'
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    protected $connection = 'mysql';

    public function up(): void
    {
        // Check if the 'books' table does not exist before creating it
        if (!Schema::connection($this->connection)->hasTable('books')) {
            Schema::connection($this->connection)->create('books', function (Blueprint $table) {
                $table->id();
                $table->string('title');
                $table->string('author');
                $table->integer('published_year');
                $table->string('genere');
                $table->text('description');
                $table->timestamps(); // Adds created_at and updated_at columns
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::connection($this->connection)->dropIfExists('books');
    }
};
