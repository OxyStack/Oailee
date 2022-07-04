import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'links' })
export class Link extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: 'text', nullable: true })
	title?: string

	@Column({ type: 'text', nullable: true })
	url?: string

	@Column({ type: 'text', nullable: true })
	thumbnail?: string

	@Column({ type: 'integer', nullable: true })
	clicks?: number
}
