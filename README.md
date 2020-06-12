# Generic REST and GraphQL API

Generic learn project that provides a initial environment and patterns


&nbsp;
# Implementations

- [x] Docker and Docker Compose configuration

- [x] Environment variables configuration

- [x] Project Nestejs with: Fastify, TypeOrm, GraphQL, Bull

- [ ] Generics Args, Classes, Decorators, Types

- [ ] Module structure (user sample)

    - [ ] Entity (with relations)
    - [ ] Dto (with validation and GraphQL types)
    - [ ] Service
    - [ ] Controller (REST approuch)
    - [ ] Resolver (GraphQL approuch)
    - [ ] Module    

- [ ] TypeORM management migrations

- [ ] Security (Helmet, CORS, CSRF...)

- [ ] User Authentication

- [ ] Roles registrables and manageable

- [ ] Global Auth Guard and Roles Guard for both REST and GraphQL

- [ ] Queues

- [ ] Serialization

- [ ] Compression

- [ ] Middleware (?)

- [ ] Interceptors (?)

- [ ] Task Scheduling

- [ ] Tests



&nbsp;
# Stack

- Docker | Docker Compose
- Node v12.16.3
- Postgres v12.3
- Redis v6.0.2 (cache, queue and "session")
- [Nestjs v7.0.0](https://docs.nestjs.com/)
- [Fastify](https://docs.nestjs.com/techniques/performance)
- [TypeOrm](https://docs.nestjs.com/techniques/database) (Repository Pattern)
- [GraphQL](https://docs.nestjs.com/graphql/quick-start) (Code First)
- Authentication - Bcrypt (jwt)
- [Bull](https://docs.nestjs.com/techniques/queues) (queues)
- Class Validator


&nbsp;
# Getting 

_This learn project uses docker to run dev and prod environment, so you'll need to have Docker and Docker Compose installed on your system._


```
git clone https://github.com/aconzatti/pandora.git project
cd project
npm install
```

if you want, you can change configurations and parameters in .env file (root)

```
docker-compose up -d
```
