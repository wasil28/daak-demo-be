// Migrasi sederhana: dijalankan dengan `yarn migration` (lewat portal, langkah Test)
import { pool } from './db';

async function utama() {
  console.log('Migrasi: membuat tabel pesan (kalau belum ada)…');
  await pool.query(`
    CREATE TABLE IF NOT EXISTS pesan (
      id     SERIAL PRIMARY KEY,
      isi    TEXT NOT NULL,
      dibuat TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
  console.log('Migrasi selesai ✅');
  await pool.end();
}
utama().catch((e) => {
  console.error('Migrasi gagal:', e.message);
  process.exit(1);
});
