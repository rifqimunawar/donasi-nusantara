<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

// Artisan::command('backup {type?}', function ($type = null) {
//     $tableNames = config('permission.table_names');
//     $is_windows = strtoupper(substr(PHP_OS, 0, 3)) === 'WIN';

//     $win_parse = function ($str) use ($is_windows) {
//         return str_replace(['\\', '/'], ($is_windows ? '\\' : '/'), $str);
//     };

//     $root = dirname(__FILE__);
//     $root = "$root/../../..";

//     // Pindahkan folder dulu
//     $folder_parent = $win_parse("$root/backup");
//     $folder_backup = $win_parse("$folder_parent/" . date('Y-m-d'));

//     if (!file_exists($folder_parent)) {
//         echo shell_exec("mkdir $folder_parent");
//     }
//     if (!file_exists($folder_backup)) {
//         echo shell_exec("mkdir $folder_backup");
//     }
//     $copy = $is_windows ? 'copy' : 'cp -R';
//     shell_exec($win_parse("$copy $root/database/seeders/* $folder_backup"));

//     echo 'Berhasil backup data sebelumnya' . PHP_EOL;

//     $tables = [
//         'campaigns' => [
//             'campaigns',
//         ],
//         'category_campaigns' => [
//             'category_campaigns',
//         ],
//     ];

//     // Tidak ada opsi 'users' yang didefinisikan pada perintah 'backup'
//     // Jadi, hilangkan pengecekan opsi 'users'

//     foreach ($tables as $k => $t) {
//         $typeTables = $type == 'all' ? $t : ($k == $type ? $t : []);
//         foreach ($typeTables as $table) {
//             echo shell_exec('php artisan iseed ' . $table . ' --force');
//         }
//     }
// })->describe('Backup database tables and seed them');


Artisan::command('backup', function () {
  // Mendapatkan informasi database dari file konfigurasi Laravel
  $databaseConfig = config('database.connections.mysql');

  // Membuat nama file untuk backup
  $backupFileName = 'backup_' . date('YmdHis') . '.sql';

  // Jalankan perintah mysqldump untuk backup database
  $backupCommand = sprintf(
      'mysqldump -u%s -p%s %s > %s',
      escapeshellarg($databaseConfig['username']),
      escapeshellarg($databaseConfig['password']),
      escapeshellarg($databaseConfig['database']),
      storage_path('app/' . $backupFileName)
  );
  shell_exec($backupCommand);

  // Memindahkan file seeder yang ada sebelumnya ke folder backup
  $backupFolderName = 'backup_' . date('Ymd');
  $backupFolderPath = storage_path('app/' . $backupFolderName);

  if (!file_exists($backupFolderPath)) {
      mkdir($backupFolderPath, 0777, true);
  }

  $existingSeeders = glob(database_path('seeders/*.php'));
  foreach ($existingSeeders as $seeder) {
      rename($seeder, $backupFolderPath . '/' . basename($seeder));
  }

  // Membuat seeder baru dengan isi backup database
  $newSeederContent = "<?php\n\nuse Illuminate\Database\Seeder;\n\n" .
      "class DatabaseBackupSeeder extends Seeder\n{\n" .
      "    public function run()\n    {\n" .
      "        \$sql = file_get_contents(storage_path('app/{$backupFileName}'));\n" .
      "        DB::unprepared(\$sql);\n" .
      "    }\n" .
      "}\n";

  $newSeederPath = database_path('seeders/DatabaseBackupSeeder.php');
  file_put_contents($newSeederPath, $newSeederContent);

  $this->info("Database backed up successfully and seed file created: {$backupFileName}");
})->purpose('Backup entire database and create a seeder with the backup content');
