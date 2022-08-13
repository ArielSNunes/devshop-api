import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { ProductResolver } from './product.resolver'
import { ProductsService } from './products.service'
import { ProductUniqueSlugValidator } from './validations/ProductUniqueSlugValidator'

@Module({
	providers: [
		PrismaService,
		ProductsService,
		ProductResolver,
		ProductUniqueSlugValidator,
	],
})
export class ProductsModule {}
