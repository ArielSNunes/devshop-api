import { Injectable, UnprocessableEntityException } from '@nestjs/common'
import { Category } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { CategoryCreateInput } from './dto/category-create.input'

@Injectable()
export class CategoriesService {
	constructor(private readonly prismaService: PrismaService) {}

	async findAll(): Promise<Category[]> {
		return await this.prismaService.category.findMany()
	}

	async findBySlug(slug: string): Promise<Category> {
		return await this.prismaService.category.findFirst({
			where: { slug },
		})
	}
	async create(input: CategoryCreateInput): Promise<Category> {
		const categoryExists = await this.findBySlug(input.slug)
		if (categoryExists) {
			throw new UnprocessableEntityException('Slug já existente')
		}

		return await this.prismaService.category.create({
			data: input,
		})
	}
}
