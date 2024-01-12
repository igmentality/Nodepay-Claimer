<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function allusersview(){

        $users = User::with('wallet')->where('role', '=', '001')->latest()->paginate(20);

        return view('admin.allusers', \compact('users'));
    }

    public function suspendUser(User $user)
    {
        $ban_for_next_30_days = Carbon::now()->addDays(30);

        $user->banned_until = $ban_for_next_30_days;
        $user->save();

        return back()->with(['success' => 'User has been suspended']);
    }

    public function banUser(User $user)
    {
        $ban_permanently = 0;

        $user->banned_until = $ban_permanently;
        $user->save();

        return back()->with(['success' => 'User has been banned']);
    }

    public function unbanUser(User $user)
    {
        $user->banned_until = null;
        $user->save();

        return back()->with(['success' => 'User has been unbanned']);
    }
}
