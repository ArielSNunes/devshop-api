import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CategoriesService } from './categories.service'
import { CategoryCreateInput } from './dto/category-create.input'
import { CategoryPublic } from './dto/category.gql'

@Resolver()
export class CategoriesResolver {
	constructor(private readonly categoryService: CategoriesService) {}

	@Query(returns => [CategoryPublic], { name: 'getAllCategories' })
	async getAllCategories(): Promise<CategoryPublic[]> {
		return await this.categoryService.findAll()
	}

	@Mutation(returns => CategoryPublic, { name: 'createCategory' })
	async createCategory(
		@Args('input') input: CategoryCreateInput,
	): Promise<CategoryPublic> {
		return await this.categoryService.create(input)
	}
}
