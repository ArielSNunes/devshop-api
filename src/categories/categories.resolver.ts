import { Query, Resolver } from '@nestjs/graphql'
import { CategoriesService } from './categories.service'
import { Category } from './dto/category.gql'

@Resolver()
export class CategoriesResolver {
	constructor(private readonly categoryService: CategoriesService) {}
	@Query(returns => [Category], { name: 'getAllCategories' })
	async getAllCategories(): Promise<Category[]> {
		return await this.categoryService.findAll()
	}
}
