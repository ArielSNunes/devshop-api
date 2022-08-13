import { Field, InputType } from '@nestjs/graphql'
import { IsUUID, Length, Matches, Validate } from 'class-validator'
import { CategoryUniqueSlugValidator } from '../validations/CategoryUniqueSlugValidator'

@InputType()
export class CategoryUpdateInput {
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
	@Validate(CategoryUniqueSlugValidator)
	slug: string
}
