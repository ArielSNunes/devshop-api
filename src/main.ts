import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule)

	app.enableCors()

	const appConfig = app.get(ConfigService)

	const swaggerConfig = new DocumentBuilder()
		.addTag('DevShop API')
		.setTitle('DevShop API')
		.setDescription('Documentação da API DevShop')
		.setVersion('1.0')
		.build()

	const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig)
	SwaggerModule.setup('docs', app, swaggerDocument)

	const PORT = appConfig.get('PORT', 3003)
	await app.listen(PORT)
}
bootstrap()
