import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule)

	app.enableCors()

	const appConfig = app.get(ConfigService)

	const PORT = appConfig.get('PORT', 3003)
	await app.listen(PORT)
}
bootstrap()
