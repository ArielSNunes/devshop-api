import {
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator'
import { BrandService } from '../brands.service'
import { BrandUpdateInput } from '../dto/brand-update.input'

@ValidatorConstraint({ async: true, name: 'BrandUniqueSlug' })
export class BrandUniqueSlugValidator implements ValidatorConstraintInterface {
	constructor(private readonly brandService: BrandService) {}

	async validate(
		value: any,
		validationArguments?: ValidationArguments,
	): Promise<boolean> {
		const slug = await this.brandService.findBySlug(value)
		if (!slug) {
			return true
		}

		const { id } = validationArguments.object as BrandUpdateInput

		if (!id) {
			return true
		}
		return slug.id === id
	}

	defaultMessage?(validationArguments?: ValidationArguments): string {
		return 'Slug já existente'
	}
}
