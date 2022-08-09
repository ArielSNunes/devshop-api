import { Field, InputType } from '@nestjs/graphql'
import { IsOptional, IsUUID, Length } from 'class-validator'

@InputType()
export class ProductUpdateInput {
	@Field()
	id: string

	@Field({ nullable: true })
	@Length(3)
	name?: string

	@Field({ nullable: true })
	@Length(3)
	slug?: string

	@Field({ nullable: true })
	@Length(20)
	description?: string

	@Field({ nullable: true })
	@IsUUID()
	@IsOptional()
	categoryId?: string
}
