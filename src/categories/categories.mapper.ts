import { Category } from '@prisma/client'
import { CategoryCreateInput } from './dto/category-create.input'

export class CategoryMapper {
	public static toEntity(input: CategoryCreateInput): Omit<Category, 'id'> {
		return {
			name: input.name,
			slug: input.slug,
		}
	}
}
