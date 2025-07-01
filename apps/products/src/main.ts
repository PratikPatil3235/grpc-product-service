import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './products.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PRODUCTS_PACKAGE_NAME } from '@app/common/types/products';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(ProductsModule, {
    transport: Transport.GRPC,
    options: {
      package: PRODUCTS_PACKAGE_NAME,
      protoPath:join(__dirname,'../products.proto')
    }
  });
  await app.listen();
}
bootstrap();
