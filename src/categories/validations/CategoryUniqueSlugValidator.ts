import {
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator'
import { CategoriesService } from '../categories.service'
import { CategoryUpdateInput } from '../dto/category-update.input'

@ValidatorConstraint({ async: true, name: 'CategoryUniqueSlug' })
export class CategoryUniqueSlugValidator
	implements ValidatorConstraintInterface
{
	constructor(private readonly categoryService: CategoriesService) {}

	async validate(
		value: any,
		validationArguments?: ValidationArguments,
	): Promise<boolean> {
		const slug = await this.categoryService.findBySlug(value)
		if (!slug) {
			return true
		}

		const { id } = validationArguments.object as CategoryUpdateInput

		if (!id) {
			return true
		}
		return slug.id === id
	}

	defaultMessage?(validationArguments?: ValidationArguments): string {
		return 'Slug já existente'
	}
}
