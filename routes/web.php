<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BookController;

// Welcome route
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Dashboard route
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Group of routes that require authentication
Route::middleware('auth')->group(function () {
    // Profile routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Book routes
    Route::get('/books', [BookController::class, 'index'])->name('books.index'); // Fetch all books
    Route::get('/books/{id}', [BookController::class, 'show'])->name('books.show'); // Fetch single book
    Route::get('/add-book', function () {
        return Inertia::render('AddBook'); // Page for adding new books
    })->name('books.create');
    Route::post('/books', [BookController::class, 'store'])->name('books.store'); // Create new book
    Route::get('/edit-book/{id}', [BookController::class, 'edit'])->name('books.edit'); // Edit book
    Route::put('/books/{id}', [BookController::class, 'update'])->name('books.update'); // Update existing book
    Route::delete('/books/{id}', [BookController::class, 'destroy'])->name('books.destroy'); // Delete book
});

// Include authentication routes
require __DIR__.'/auth.php';
