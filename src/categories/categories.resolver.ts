import { Query, Resolver } from '@nestjs/graphql'
import { Category } from '@prisma/client'
import { CategoriesService } from './categories.service'
import { CategoryPublic } from './dto/category.gql'

@Resolver()
export class CategoriesResolver {
	constructor(private readonly categoryService: CategoriesService) {}
	@Query(returns => [CategoryPublic], { name: 'getAllCategories' })
	async getAllCategories(): Promise<Category[]> {
		return await this.categoryService.findAll()
	}
}
