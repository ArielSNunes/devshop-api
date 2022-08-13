import {
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator'
import { CategoriesService } from '../categories.service'

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
		return !slug
	}

	defaultMessage?(validationArguments?: ValidationArguments): string {
		return 'Slug já existente'
	}
}
