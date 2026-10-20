import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function utama() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const port = parseInt(process.env.PORT || '3000', 10);
  // bind ke 127.0.0.1 — hanya bisa diakses lewat nginx (pola DAAK)
  await app.listen(port, '127.0.0.1');
  console.log(`daak-demo-be jalan di http://127.0.0.1:${port}/api`);
}
utama();
