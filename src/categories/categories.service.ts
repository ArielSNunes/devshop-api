import { Injectable } from '@nestjs/common'
import { Category } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { CategoryCreateInput } from './dto/category-create.input'

@Injectable()
export class CategoriesService {
	constructor(private readonly prismaService: PrismaService) {}

	async findAll(): Promise<Category[]> {
		return await this.prismaService.category.findMany()
	}

	async create(input: CategoryCreateInput): Promise<Category> {
		return await this.prismaService.category.create({
			data: input,
		})
	}
}
