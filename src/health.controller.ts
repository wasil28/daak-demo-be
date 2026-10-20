import { Controller, Get } from '@nestjs/common';
import { pool } from './db';

@Controller('health')
export class HealthController {
  @Get()
  async cek() {
    let db = 'ok';
    try {
      await pool.query('SELECT 1');
    } catch {
      db = 'gagal';
    }
    return { status: 'ok', db, waktu: new Date().toISOString() };
  }
}
