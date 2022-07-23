import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { ProductCreateInput } from './dto/product-create.input'
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
}
