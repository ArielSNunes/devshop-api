import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { BrandResolver } from './brands.resolver'
import { BrandService } from './brands.service'
import { BrandUniqueSlugValidator } from './validations/BrandUniqueSlugValidator'

@Module({
	providers: [
		PrismaService,
		BrandService,
		BrandResolver,
		BrandUniqueSlugValidator,
	],
})
export class BrandsModule {}
