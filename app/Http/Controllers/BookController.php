<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $books = Book::all(); // Fetch all books

            // Return the books as a JSON response
            return response()->json($books);
        } catch (\Exception $e) {
            // Handle any exceptions and return a 500 error
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('BookForm');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'published_year' => 'required|integer',
            'genere' => 'required|string|max:255',
            'description' => 'required|string',
        ]);
    
        Book::create($validatedData);
    
        return redirect()->route('dashboard')->with('message', 'Book added successfully');
    }
    

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $book = Book::find($id); // Fetch the book by ID
        
        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404); // Handle not found case
        }
        
        return response()->json($book); // Return the book data
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($book_id)
    {
        $book = Book::findOrFail($book_id);
        return Inertia::render('EditBook', [
            'bookId' => $book_id, // Pass the ID to the component
            'bookData' => $book // Optionally, you can pass the book data directly
        ]);
    }
    
    // Update a book
    public function update(Request $request, $id)
{
    // Validate incoming request data
    $validatedData = $request->validate([
        'title' => 'required|string|max:255',
        'author' => 'required|string|max:255',
        'published_year' => 'required|integer',
        'genere' => 'required|string|max:255',
        'description' => 'required|string',
    ]);

    // Find the book by ID and update it
    $book = Book::findOrFail($id);
    $book->update($validatedData);

    // Optionally, return a response or redirect
    return redirect()->route('dashboard')->with('success', 'Book updated successfully.');
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $book = Book::findOrFail($id); // Ensure the book exists
            $book->delete(); // Delete the book

            return redirect()->route('dashboard')->with('success', 'Book deleted successfully.'); // Redirect to dashboard with success message
        } catch (\Exception $e) {
            // Handle any exceptions and return an error response
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}

