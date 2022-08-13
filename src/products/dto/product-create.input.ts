import { Field, InputType } from '@nestjs/graphql'
import { IsUUID, Length, Matches, Validate } from 'class-validator'
import { ProductUniqueSlugValidator } from '../validations/ProductUniqueSlugValidator'

@InputType()
export class ProductCreateInput {
	@Field()
	@Length(3)
	name: string

	@Field()
	@Length(20)
	description: string

	@Field()
	@Length(3)
	@Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
	@Validate(ProductUniqueSlugValidator)
	slug: string

	@Field()
	@IsUUID()
	categoryId: string
}
