<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function dashboard()
    {
        if (Auth::id()) {
            $role = Auth::user()->role;
            if ($role == '001') {
                return view('user.dashboard');
            } else {
                return view('admin.dashboard');
            }
        }
    }
}
