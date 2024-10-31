<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class BooksTableSeeder extends Seeder

{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $books = [
            [
                'title' => 'To Kill a Mockingbird',
                'author' => 'Harper Lee',
                'published_year' => 1960,
                'genere' => 'Fiction',
                'description' => 'A novel about the serious issues of rape and racial inequality.',
            ],
            [
                'title' => '1984',
                'author' => 'George Orwell',
                'published_year' => 1949,
                'genere' => 'Dystopian',
                'description' => 'A story about a totalitarian regime that uses surveillance and propaganda to control the populace.',
            ],
            [
                'title' => 'Moby Dick',
                'author' => 'Herman Melville',
                'published_year' => 1851,
                'genere' => 'Adventure',
                'description' => 'The narrative of Captain Ahab’s obsessive quest to seek revenge on Moby Dick, a giant white whale.',
            ],
            [
                'title' => 'Pride and Prejudice',
                'author' => 'Jane Austen',
                'published_year' => 1813,
                'genere' => 'Romance',
                'description' => 'A romantic novel that charts the emotional development of the protagonist, Elizabeth Bennet.',
            ],
            [
                'title' => 'The Great Gatsby',
                'author' => 'F. Scott Fitzgerald',
                'published_year' => 1925,
                'genere' => 'Tragedy',
                'description' => 'A story about the young and mysterious millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan.',
            ],
            [
                'title' => 'War and Peace',
                'author' => 'Leo Tolstoy',
                'published_year' => 1869,
                'genere' => 'Historical',
                'description' => 'An epic tale that intertwines the lives of families against the backdrop of the Napoleonic wars.',
            ],
            [
                'title' => 'The Catcher in the Rye',
                'author' => 'J.D. Salinger',
                'published_year' => 1951,
                'genere' => 'Fiction',
                'description' => 'A story about teenage rebellion and alienation narrated by the cynical Holden Caulfield.',
            ],
            [
                'title' => 'The Hobbit',
                'author' => 'J.R.R. Tolkien',
                'published_year' => 1937,
                'genere' => 'Fantasy',
                'description' => 'A children’s fantasy novel that follows the adventures of a hobbit named Bilbo Baggins.',
            ],
            [
                'title' => 'Fahrenheit 451',
                'author' => 'Ray Bradbury',
                'published_year' => 1953,
                'genere' => 'Dystopian',
                'description' => 'A novel about a future society where books are outlawed and "firemen" burn any that are found.',
            ],
            [
                'title' => 'Jane Eyre',
                'author' => 'Charlotte Brontë',
                'published_year' => 1847,
                'genere' => 'Gothic',
                'description' => 'A novel that follows the experiences of an orphaned girl, Jane, as she matures into adulthood.',
            ],
        ];

        DB::table('books')->insert($books);
    }
}
