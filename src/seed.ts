// Seeder: data awal, dijalankan dengan `yarn seed`
import { pool } from './db';

async function utama() {
  const ada = await pool.query('SELECT COUNT(*)::int AS n FROM pesan');
  if (ada.rows[0].n > 0) {
    console.log('Seeder: data sudah ada, dilewati.');
  } else {
    await pool.query(`
      INSERT INTO pesan (isi) VALUES
      ('Halo dari DAAK! 👋'),
      ('App demo ini di-deploy lewat portal d3v0ps.'),
      ('Coba tambah pesan dari halaman frontend.');
    `);
    console.log('Seeder: 3 pesan awal dimasukkan ✅');
  }
  await pool.end();
}
utama().catch((e) => {
  console.error('Seeder gagal:', e.message);
  process.exit(1);
});
