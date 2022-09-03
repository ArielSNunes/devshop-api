import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { BrandsModule } from './brands/brands.module'
import { CategoriesModule } from './categories/categories.module'
import { ProductsModule } from './products/products.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			autoSchemaFile: 'schema.graphql',
			driver: ApolloDriver,
		}),
		CategoriesModule,
		ProductsModule,
		BrandsModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
