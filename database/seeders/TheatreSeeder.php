<?php

namespace Database\Seeders;

use App\Models\Theatre;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TheatreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $theatres = [
            ['name' => 'Bashundhara Shopping Mall, Panthapath', 'city_id' => 1],
            ['name' => 'Shimanto Shambhar, Dhanmondi 2', 'city_id' => 1],
            ['name' => 'Star Cineplex, SKS Tower, Mohakhali', 'city_id' => 1],
            ['name' => 'Star Cineplex, Military Museum', 'city_id' => 1],
            ['name' => 'Star Cineplex, Bali Arcade, Chattogram', 'city_id' => 2],
        ];

        foreach ($theatres as $theatre) {
            Theatre::firstOrCreate(
                [
                    'name' => $theatre['name'],
                    'city_id' => $theatre['city_id'],
                ]
            );
        }
    }
}
