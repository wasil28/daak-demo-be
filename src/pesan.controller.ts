import { Body, Controller, Get, Post } from '@nestjs/common';
import { pool } from './db';

// CATATAN DEMO: endpoint ini SENGAJA dibiarkan tanpa guard/auth,
// supaya fitur "Scan Keamanan" di portal punya temuan 🔴 untuk ditunjukkan.
// Di aplikasi sungguhan: pasang @UseGuards(...) di sini.
@Controller('pesan')
export class PesanController {
  @Get()
  async daftar() {
    const r = await pool.query(
      'SELECT id, isi, dibuat FROM pesan ORDER BY id DESC LIMIT 50',
    );
    return { ok: true, data: r.rows };
  }

  @Post()
  async tambah(@Body() body: { isi?: string }) {
    const isi = (body?.isi || '').toString().trim().slice(0, 200);
    if (!isi) return { ok: false, pesan: 'isi tidak boleh kosong' };
    const r = await pool.query(
      'INSERT INTO pesan (isi) VALUES ($1) RETURNING id, isi, dibuat',
      [isi],
    );
    return { ok: true, data: r.rows[0] };
  }
}
