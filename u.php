<?php

$dir = getcwd();

$it = new RecursiveDirectoryIterator(
  $dir,
  RecursiveDirectoryIterator::SKIP_DOTS
);

$files = new RecursiveIteratorIterator(
  $it,
  RecursiveIteratorIterator::CHILD_FIRST
);

foreach ($files as $file) {
  if ($file == "{$dir}/site.zip") continue;
  if ($file == "{$dir}/u.php") continue;

  if ($file->isDir()) {
    rmdir($file->getPathname());
  } else {
    unlink($file->getPathname());
  }
}

$zip = new ZipArchive();
$zip->open("site.zip");
$zip->extractTo($dir);

unlink("site.zip");
unlink("u.php");
