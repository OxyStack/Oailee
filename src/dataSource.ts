import { DataSource } from "typeorm";
import { User } from "./models/user";

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'oailee-admin',
    password: 'N0name6355',
    database: 'oailee',
    entities: [User],
    synchronize: true,
    logging: true,
})