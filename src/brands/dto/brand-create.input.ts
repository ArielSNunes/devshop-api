import { Field, InputType } from '@nestjs/graphql'
import { Length, Matches, Validate } from 'class-validator'
import { BrandUniqueSlugValidator } from '../validations/BrandUniqueSlugValidator'

@InputType()
export class BrandCreateInput {
	@Field()
	@Length(3)
	name: string

	@Field()
	@Length(3)
	@Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
	@Validate(BrandUniqueSlugValidator)
	slug: string
}
