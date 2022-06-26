import { ParseUUIDPipe } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CategoryMapper } from './categories.mapper'
import { CategoriesService } from './categories.service'
import { CategoryCreateInput } from './dto/category-create.input'
import { CategoryPublic } from './dto/category.object'

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
		return await this.categoryService.create(CategoryMapper.toEntity(input))
	}

	@Mutation(returns => Boolean, { name: 'deleteCategory' })
	async deleteCategory(
		@Args('id', ParseUUIDPipe) id: string,
	): Promise<boolean> {
		return await this.categoryService.delete(id)
	}
}
