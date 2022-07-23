# DevShop API

## Description

DevShop API is the backend code for DevShop Project

## Installation

```bash
npm install
```

## Database Migrations

### The API have been developed using [Prisma ORM](https://www.prisma.io/)

```bash
# to run the migrations in development environment
npx prisma migrate dev

# to run the migrations in production environment
npx prisma migrate deploy

# to create a new migration after creating the models in schema.prisma file
npx prisma migrate dev --name <migration name>
```

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
