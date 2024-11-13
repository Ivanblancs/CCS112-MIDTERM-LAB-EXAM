<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Book extends Model
{
    protected $connection = 'mysql';
    use HasFactory;
    protected $primaryKey = 'id';
    protected $fillable = [
        'title',
        'author',
        'published_year',
        'genere',
        'description'
    ];

}
