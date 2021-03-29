import { createConnection, Connection } from 'typeorm';

import * as entities from 'entities';

const createDatabaseConnection = (): Promise<Connection> =>
  createConnection({
    type: "postgres",
    entities: Object.values(entities),
    username: "hsrzojdoqiqxia",
    // username: "postgres",
    password: "7301de6dd5313a842feac44e9140e46af5107a9388db5c635e43955611fe330d",
    // password: "postgres",
    database: "deq3hqqqv20c4l",
    // database: "postgres",
    host: "ec2-54-198-252-9.compute-1.amazonaws.com",
    // host: "localhost",
    port: 5432,
    ssl: true,
    // port: 5432,
    synchronize: true,
  });

export default createDatabaseConnection;
