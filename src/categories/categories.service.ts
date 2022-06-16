import { Injectable } from '@nestjs/common'
import { Category } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class CategoriesService {
	constructor(private readonly prismaService: PrismaService) { }
	async findAll(): Promise<Category[]> {
		return await this.prismaService.category.findMany()
	}
}
