import { Field, InputType } from '@nestjs/graphql'
import { IsUUID, Length, Matches, Validate } from 'class-validator'
import { BrandUniqueSlugValidator } from '../validations/BrandUniqueSlugValidator'

@InputType()
export class BrandUpdateInput {
	@Field()
	@IsUUID()
	id: string

	@Field()
	@Length(3)
	name: string

	@Field()
	@Length(3)
	@Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
		message: 'A slug deve ter formato de slug',
	})
	@Validate(BrandUniqueSlugValidator)
	slug: string
}
