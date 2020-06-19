# Generic REST and GraphQL API

Generic learn project that provides a initial environment and patterns


&nbsp;
# Implementations

- [x] Docker and Docker Compose configuration: Node v14.4.0 Alpine, Redis v6.0.2 Alpine, Postgres v12.3

- [x] Environment variables configuration

- [x] Create project: NesteJS, Fastify, TypeOrm, GraphQL, Bull


&nbsp;
# TODO

- [ ] Shared Modules and Features

    - [ ] Global Modules ( @Global() ): ___
    - [ ] Decorators: ___
    - [ ] Types: ___
    - [ ] Args: ___
    - [ ] Classes: ___
    - [ ] Interfaces: ___

- [ ] Modules:  Roles  |  Roles Grants  |  User  |  User Roles  |  Auth  |  Session

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

- [ ] Interceptors (?)

- [ ] Task Scheduling

- [ ] Tests


&nbsp;
# Stack

- Docker | Docker Compose
- Node v14.4.0
- Postgres v12.3s
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

_If you want, you can change configurations and parameters in .env file (root)_

```
docker-compose up -d
```
