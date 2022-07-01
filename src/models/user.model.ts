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

	@Column({ type: 'text', nullable: true })
	role!: string

	@Column({ type: 'text', nullable: true })
	profile_img?: string

	@Column({ type: 'date', nullable: true })
	createdAt: Date = new Date()
}
