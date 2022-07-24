import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class ProductUpdateInput {
	@Field()
	id: string

	@Field({ nullable: true })
	name?: string

	@Field({ nullable: true })
	slug?: string

	@Field({ nullable: true })
	descripton?: string

	@Field({ nullable: true })
	categoryId?: string
}
