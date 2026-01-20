<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cities = ['Dhaka', 'Chittagong'];

        foreach ($cities as $city) {
            City::firstOrCreate([
                'name' => $city
            ]);
        }
    }
}
