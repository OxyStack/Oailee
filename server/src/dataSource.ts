import { DataSource } from 'typeorm'
import { User } from './models/user.model'
import { Link } from './models/link.model'

export const dataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'oailee-admin',
	password: 'N0name6355',
	database: 'oailee',
	entities: [User, Link],
	synchronize: true,
	logging: true,
})
