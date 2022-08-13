import {
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator'
import { ProductUpdateInput } from '../dto/product-update.input'
import { ProductsService } from '../products.service'

@ValidatorConstraint({ async: true, name: 'CategoryUniqueSlug' })
export class ProductUniqueSlugValidator
	implements ValidatorConstraintInterface
{
	constructor(private readonly productService: ProductsService) {}

	async validate(
		value: any,
		validationArguments?: ValidationArguments,
	): Promise<boolean> {
		const slug = await this.productService.findBySlug(value)

		if (!slug) {
			return true
		}

		const { id } = validationArguments.object as ProductUpdateInput

		if (slug && !id) {
			return false
		}
		if (!id) {
			return true
		}
		return slug.id === id
	}

	defaultMessage?(validationArguments?: ValidationArguments): string {
		return 'Slug já existente'
	}
}
