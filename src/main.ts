import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('BOOT');
  const PORT = process.env.PORT || 3001;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  logger.log(`Server blazing 🔥  on port ${PORT}`);
}
bootstrap();
