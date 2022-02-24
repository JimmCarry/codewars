<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function home()
    {
        return view('master');
    }

    public function about()
    {
        return 'about page';
    }

    public function contact()
    {
        return 'contact page';
    }
}
