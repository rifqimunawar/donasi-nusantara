<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseBackupSeeder extends Seeder
{
    public function run()
    {
        $sql = file_get_contents(base_path('database/seeds/backup_20240317184752.sql'));
        DB::unprepared($sql);
    }
}
