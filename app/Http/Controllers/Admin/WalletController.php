<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Http\Request;

class WalletController extends Controller
{
    public function createwallet(User $user)
    {
        $wallet = new Wallet();
        $wallet->user_id = $user->id;
        $wallet->balance = 0.00;
        $wallet->save();
        return back();
    }

    public function updatebalanceview(User $user)
    {

        // $users = User::with('wallet')->where('role', '=', '001')->latest()->paginate(20);

        return view('admin.updatebalance', \compact('user'));
    }

    public function updatebalance(User $user, Request $request)
    {
        $users = User::with('wallet')->where('role', '=', '001')->latest()->paginate(20);


        $userId = $user->id;
        $wallet = Wallet::where('user_id', $userId)->first();

        if ($wallet) {
            $wallet->balance = $request->balance;
            $wallet->save();
        } else {
            // Handle the case where the user doesn't have a wallet, return back with error

        }

        return view('admin.allusers', \compact('users'));
    }
}
