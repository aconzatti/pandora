# Generic REST and GraphQL API

Generic project that provides a initial environment and convention patterns

&nbsp;
# Requirements 

- [ ] Environment variables configuration

- [ ] Docker and Docker Compose configuration

- [ ] Module structure

    - [ ] Entities (with relations)
    - [ ] Dto (with validation and GraphQL types)
    - [ ] Service
    - [ ] Controller (REST approuch)
    - [ ] Resolver (GraphQL approuch)
    - [ ] Module    

- [ ] TypeORM management migrations

- [ ] User Authentication

- [ ] Roles registrables and manageable

- [ ] Endpoints REST and GraphQL access

- [ ] Global Auth Guard and Roles Guard for both REST and GraphQL


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
docker-compose up -d
```
