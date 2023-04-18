# Getting started

## Usage

### Docker

```bash
  docker run -d -p 8080:8080 ownhub/ownhub
```

### Manual

#### Requirements

- Node.js >= 18.16.0 (LTS)
- Neo4j >= 5

#### Installation

```bash
git clone
cd ownhub
npm install
npm run build
npm run start
```

#### Configuration

```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
```

Edit the `.env` files and set the environment variables.

#### Database

Create a new database in Neo4j and set the database name in the `.env` file.
