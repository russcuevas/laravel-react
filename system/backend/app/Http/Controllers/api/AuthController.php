<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function Login(Request $req)
    {
        $email = $req->input('email');
        $password = $req->input('password');

        if (!Auth::attempt([
            'email' => $email,
            'password' => $password
        ])) {
            return response()->json([
                'message' => 'Invalid credentials try again!',
                'status' => 400,
            ]);
        } else {
            $user = Auth::user();
            $token = $user->createToken('token')->plainTextToken;
            $cookie = cookie('jwt', $token);
            return response([
                'token' => $token,
                'user_role' => $user->user_role,
                'message' => 'Login successful',
                'status' => 200,
            ])->withCookie($cookie);
        }
    }
}
