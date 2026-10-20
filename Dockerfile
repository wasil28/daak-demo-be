# Dibuat otomatis oleh DAAK Deploy Kit
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json yarn.lock* package-lock.json* ./
RUN corepack enable 2>/dev/null; \
    if [ -f yarn.lock ]; then yarn install --frozen-lockfile || yarn install; \
    else npm install; fi
COPY . .
RUN if [ -f yarn.lock ]; then yarn build; else npm run build; fi

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json ./
# entry bisa dist/main.js ATAU dist/src/main.js tergantung tsconfig — deteksi saat start
CMD ["sh", "-c", "if [ -f dist/src/main.js ]; then exec node dist/src/main.js; else exec node dist/main.js; fi"]
