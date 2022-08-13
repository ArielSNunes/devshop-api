import { Field, InputType } from '@nestjs/graphql'
import { IsOptional, IsUUID, Length, Matches, Validate } from 'class-validator'
import { ProductUniqueSlugValidator } from '../validations/ProductUniqueSlugValidator'

@InputType()
export class ProductUpdateInput {
	@Field()
	id: string

	@Field({ nullable: true })
	@Length(3)
	name?: string

	@Field({ nullable: true })
	@Length(3)
	@Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
	@Validate(ProductUniqueSlugValidator)
	slug?: string

	@Field({ nullable: true })
	@Length(20)
	description?: string

	@Field({ nullable: true })
	@IsUUID()
	@IsOptional()
	categoryId?: string
}
