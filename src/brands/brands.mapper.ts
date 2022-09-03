import { Brand } from '@prisma/client'
import { BrandCreateInput } from './dto/brand-create.input'

export class BrandMapper {
	public static toEntity(input: BrandCreateInput): Omit<Brand, 'id'> {
		return {
			name: input.name,
			slug: input.slug,
		}
	}
}
