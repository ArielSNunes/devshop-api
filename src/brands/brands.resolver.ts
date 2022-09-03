import { ParseUUIDPipe } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { BrandMapper } from './brands.mapper'
import { BrandService } from './brands.service'
import { BrandCreateInput } from './dto/brand-create.input'
import { BrandUpdateInput } from './dto/brand-update.input'
import { BrandPublic } from './dto/brands.object'

@Resolver()
export class BrandResolver {
	constructor(private readonly brandService: BrandService) {}

	@Query(returns => [BrandPublic], { name: 'getAllBrands' })
	async getAllBrands(): Promise<BrandPublic[]> {
		return await this.brandService.findAll()
	}
	@Query(returns => BrandPublic, { name: 'getBrandById' })
	async getBrandById(@Args('id') id: string): Promise<BrandPublic> {
		return await this.brandService.findById(id)
	}

	@Mutation(returns => BrandPublic, { name: 'createBrand' })
	async createBrand(
		@Args('input') input: BrandCreateInput,
	): Promise<BrandPublic> {
		return await this.brandService.create(BrandMapper.toEntity(input))
	}
	@Mutation(returns => BrandPublic, { name: 'updateBrand' })
	async updateBrand(
		@Args('input') input: BrandUpdateInput,
	): Promise<BrandPublic> {
		return await this.brandService.update(input.id, { ...input })
	}

	@Mutation(returns => Boolean, { name: 'deleteBrand' })
	async deleteBrand(@Args('id', ParseUUIDPipe) id: string): Promise<boolean> {
		return await this.brandService.delete(id)
	}
}
