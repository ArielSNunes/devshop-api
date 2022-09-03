import {
	BadRequestException,
	Injectable,
	UnprocessableEntityException,
} from '@nestjs/common'
import { Brand } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { BrandCreateInput } from './dto/brand-create.input'
import { BrandUpdateInput } from './dto/brand-update.input'

@Injectable()
export class BrandService {
	constructor(private readonly prismaService: PrismaService) {}

	async findAll(): Promise<Brand[]> {
		return await this.prismaService.brand.findMany()
	}

	async findBySlug(slug: string): Promise<Brand> {
		return await this.prismaService.brand.findFirst({
			where: { slug },
		})
	}
	async create(input: BrandCreateInput): Promise<Brand> {
		const brandExists = await this.findBySlug(input.slug)
		if (brandExists) {
			throw new UnprocessableEntityException('Slug já existente')
		}

		return await this.prismaService.brand.create({
			data: input,
		})
	}
	async findById(id: string) {
		return await this.prismaService.brand.findFirst({
			where: { id },
		})
	}
	async delete(id: string): Promise<boolean> {
		const brand = await this.findById(id)
		if (!brand) {
			return true
		}
		try {
			await this.prismaService.brand.delete({
				where: { id },
			})
			return true
		} catch (error) {
			return false
		}
	}
	async update(id: string, input: Omit<BrandUpdateInput, 'id'>) {
		const brand = await this.findById(id)
		if (!brand) {
			throw new BadRequestException('Marca não identificada')
		}
		return await this.prismaService.brand.update({
			where: { id: id },
			data: { ...input },
		})
	}
}
