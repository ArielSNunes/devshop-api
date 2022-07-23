import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ProductCreateInput } from './dto/product-create.input'
import { ProductPublic } from './dto/product.object'
import { ProductsService } from './products.service'

@Resolver(of => ProductPublic)
export class ProductResolver {
	constructor(private readonly productService: ProductsService) {}

	@Query(returns => [ProductPublic], { name: 'getAllProducts' })
	async getAllProducts(): Promise<ProductPublic[]> {
		return await this.productService.findAll()
	}

	@Mutation(returns => ProductPublic, { name: 'createProduct' })
	async createProduct(
		@Args('input') input: ProductCreateInput,
	): Promise<ProductPublic> {
		return await this.productService.create(input)
	}
}
