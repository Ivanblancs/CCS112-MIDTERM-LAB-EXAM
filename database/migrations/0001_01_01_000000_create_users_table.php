<?php
// User migration for 'users' table in 'laravel_midterm_lab_exam_v2'
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Check if the users table exists before creating it
        if (!Schema::connection('mysql_secondary')->hasTable('users')) {
            Schema::connection('mysql_secondary')->create('users', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('email')->unique();
                $table->timestamp('email_verified_at')->nullable();
                $table->string('password');
                $table->rememberToken();
                $table->timestamps();
            });
        }

        // Check if the password_reset_tokens table exists before creating it
        if (!Schema::connection('mysql_secondary')->hasTable('password_reset_tokens')) {
            Schema::connection('mysql_secondary')->create('password_reset_tokens', function (Blueprint $table) {
                $table->string('email')->primary();
                $table->string('token');
                $table->timestamp('created_at')->nullable();
            });
        }

        // Check if the sessions table exists before creating it
        if (!Schema::connection('mysql_secondary')->hasTable('sessions')) {
            Schema::connection('mysql_secondary')->create('sessions', function (Blueprint $table) {
                $table->string('id')->primary();
                $table->foreignId('user_id')->nullable()->index();
                $table->string('ip_address', 45)->nullable();
                $table->text('user_agent')->nullable();
                $table->longText('payload');
                $table->integer('last_activity')->index();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Drop the tables if they exist
        Schema::connection('mysql_secondary')->dropIfExists('users');
        Schema::connection('mysql_secondary')->dropIfExists('password_reset_tokens');
        Schema::connection('mysql_secondary')->dropIfExists('sessions');
    }
};
