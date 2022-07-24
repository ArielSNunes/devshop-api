import { ParseUUIDPipe } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ProductCreateInput } from './dto/product-create.input'
import { ProductUpdateInput } from './dto/product-update.input'
import { ProductPublic } from './dto/product.object'
import { ProductsService } from './products.service'

@Resolver(of => ProductPublic)
export class ProductResolver {
	constructor(private readonly productService: ProductsService) {}

	@Query(returns => [ProductPublic], { name: 'getAllProducts' })
	async getAllProducts(): Promise<ProductPublic[]> {
		return await this.productService.findAll()
	}
	@Query(returns => ProductPublic, { name: 'getProductById' })
	async getProductById(@Args('id') id: string): Promise<ProductPublic> {
		return await this.productService.findById(id)
	}
	@Mutation(returns => ProductPublic, { name: 'createProduct' })
	async createProduct(
		@Args('input') input: ProductCreateInput,
	): Promise<ProductPublic> {
		return await this.productService.create(input)
	}

	@Mutation(returns => ProductPublic, { name: 'updateProduct' })
	async updateProduct(
		@Args('input') input: ProductUpdateInput,
	): Promise<ProductPublic> {
		return await this.productService.update(input.id, { ...input })
	}

	@Mutation(returns => Boolean, { name: 'deleteProduct' })
	async deleteProduct(
		@Args('id', ParseUUIDPipe) id: string,
	): Promise<boolean> {
		return await this.productService.delete(id)
	}
}
