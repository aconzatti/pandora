# Generic REST and GraphQL API

Generic project that provides a initial environment and convention patterns

&nbsp;
# Requirements 

- [ ] Module structure

    - [ ] Entities (with relations)
    - [ ] Dto (with validation and GraphQL types)
    - [ ] Service
    - [ ] Controller (REST approuch)
    - [ ] Resolver (GraphQL approuch)
    - [ ] Module    

- [ ] User Authentication

- [ ] Roles registrables and manageables

- [ ] Endpoints REST and GraphQL access

- [ ] Global Auth Guard and Roles Guard for both REST and GraphQLa


&nbsp;
# Stack

- [Nestjs v7.0.0](https://docs.nestjs.com/)
- [Fastify](https://docs.nestjs.com/techniques/performance)
- [TypeOrm](https://docs.nestjs.com/techniques/database) (Repository Pattern)
- [GraphQL](https://docs.nestjs.com/graphql/quick-start) (Code First)
- Authentication - Bcrypt (jwt)
- [Bull](https://docs.nestjs.com/techniques/queues) (queues)
- Redis (cache, queue and "session")
- Class Validator

