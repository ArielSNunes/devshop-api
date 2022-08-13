import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { useContainer } from 'class-validator'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule)

	app.enableCors()

	/**
	 * Permite injeção de dependências no class validator, a partir do AppModule
	 */
	useContainer(app.select(AppModule), { fallbackOnErrors: true })

	app.useGlobalPipes(new ValidationPipe())

	const appConfig = app.get(ConfigService)

	const PORT = appConfig.get('PORT', 3003)
	await app.listen(PORT)
}
bootstrap()
