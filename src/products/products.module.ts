import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { ProductResolver } from './product.resolver'
import { ProductsService } from './products.service'

@Module({
	providers: [PrismaService, ProductsService, ProductResolver],
})
export class ProductsModule {}
