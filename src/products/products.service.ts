import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { ProductCreateInput } from './dto/product-create.input'
import { ProductUpdateInput } from './dto/product-update.input'
import { ProductPublic } from './dto/product.object'

@Injectable()
export class ProductsService {
	constructor(private readonly prismaService: PrismaService) {}

	async create(input: ProductCreateInput): Promise<ProductPublic> {
		return await this.prismaService.product.create({
			data: input,
			include: { category: true },
		})
	}

	async findAll(): Promise<ProductPublic[]> {
		return await this.prismaService.product.findMany({
			include: { category: true },
		})
	}

	async findById(id: string) {
		return await this.prismaService.product.findFirst({
			where: { id },
			include: {
				category: true,
			},
		})
	}

	async update(id: string, input: Omit<ProductUpdateInput, 'id'>) {
		const product = await this.findById(id)
		if (!product) {
			throw new BadRequestException('Produto não identificado')
		}
		return await this.prismaService.product.update({
			where: { id: id },
			data: { ...input },
			include: { category: true },
		})
	}

	async delete(id: string): Promise<boolean> {
		const cat = await this.findById(id)
		if (!cat) {
			return true
		}
		try {
			await this.prismaService.product.delete({
				where: { id },
			})
			return true
		} catch (error) {
			return false
		}
	}

	async findBySlug(slug: string) {
		return await this.prismaService.product.findFirst({
			where: {
				slug,
			},
		})
	}
}
