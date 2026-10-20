import { Pool } from 'pg';

// Kredensial dibaca dari environment (diisi otomatis oleh DAAK Deploy Kit)
export const pool = new Pool({
  host: process.env.TYPEORM_HOST || 'localhost',
  port: parseInt(process.env.TYPEORM_PORT || '5432', 10),
  user: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
});
