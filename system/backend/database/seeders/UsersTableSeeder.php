<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $profileAdmin = 'https://wallpapercave.com/wp/wp5196725.png';
        $fileAdmin = 'profile_' . Str::random(10) . '.png';
        $imageAdmin = file_get_contents($profileAdmin);
        Storage::disk('public')->put('auth/images/profile_pictures/' . $fileAdmin, $imageAdmin);

        DB::table('users')->insert([
            'profile_picture' => $fileAdmin,
            'name' => 'administrator',
            'email' => 'russelcuevas0@gmail.com',
            'password' => Hash::make('123456789'),
            'contact' => '09495748302',
            'user_role' => 'admin',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $profileCustomers = 'https://th.bing.com/th/id/OIP.Gfp0lwE6h7139625a-r3aAHaHa?rs=1&pid=ImgDetMain';
        $fileCustomers = 'profile_' . Str::random(10) . '.png';
        $imageCustomers = file_get_contents($profileCustomers);
        Storage::disk('public')->put('auth/images/profile_pictures/' . $fileCustomers, $imageCustomers);

        DB::table('users')->insert([
            'profile_picture' => $fileCustomers,
            'name' => 'Russel Vincent Cuevas',
            'email' => 'russelcuevas00@gmail.com',
            'password' => Hash::make('123456789'),
            'contact' => '09495748300',
            'user_role' => 'customers',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
