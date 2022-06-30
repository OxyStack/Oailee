import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: 'varchar', length: 20, unique: true, nullable: false })
	username!: string

	@Column({ type: 'text', nullable: false })
	password!: string

	@Column({ type: 'text', unique: true, nullable: false })
	email!: string

	@Column({ type: 'text', nullable: true })
	firstName?: string

	@Column({ type: 'text', nullable: true })
	lastName?: string
}
