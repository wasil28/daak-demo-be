# daak-demo-be

Backend contoh untuk latihan deploy lewat portal **daak.ut.ac.id/d3v0ps** (DAAK Deploy Kit).

- NestJS mini + PostgreSQL (`pg` langsung, kredensial dari env `TYPEORM_*`)
- `yarn build` → `dist/` · `yarn migration` → buat tabel · `yarn seed` → data awal
- Endpoint: `GET /api/health`, `GET /api/pesan`, `POST /api/pesan`
- **Sengaja TANPA** `Dockerfile` & `.env.example` → biar fitur *Scan repo* + *Auto-fix* portal kelihatan kerjanya.
- `GET /api/pesan` **sengaja tanpa auth** → bahan temuan *Scan Keamanan* 🔴 (jangan ditiru di app sungguhan!)
