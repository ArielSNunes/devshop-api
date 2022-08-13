import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CategoriesResolver } from './categories.resolver'
import { CategoriesService } from './categories.service'
import { CategoryUniqueSlugValidator } from './validations/CategoryUniqueSlugValidator'

@Module({
	providers: [
		PrismaService,
		CategoriesService,
		CategoriesResolver,
		CategoryUniqueSlugValidator,
	],
})
export class CategoriesModule {}
