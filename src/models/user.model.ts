import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'users' })
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: 'text', nullable: true })
	firstName?: string

	@Column({ type: 'text', nullable: true })
	lastName?: string

	@Column({ type: 'varchar', length: 20, unique: true, nullable: false })
	username!: string

	@Column({ type: 'text', nullable: false })
	password!: string

	@Column({ type: 'text', unique: true, nullable: false })
	email!: string

	@Column({ type: 'enum', enum: ['admin', 'user'], default: 'user' })
	role!: string

	@Column({ type: 'text', nullable: true })
	avatar?: string

	@Column({ type: 'date', default: () => 'CURRENT_DATE' })
	createdAt!: Date
}
