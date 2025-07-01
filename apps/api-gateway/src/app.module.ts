import { PRODUCTS_PACKAGE_NAME } from '@app/common';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProductController } from './product/product.controller';


@Module({
  imports: [ClientsModule.register([
    {
      name: PRODUCTS_PACKAGE_NAME,
      transport: Transport.GRPC,
      options: {
        package: PRODUCTS_PACKAGE_NAME,
        protoPath: join(__dirname, "../products.proto"),
      }
    }
  ])],
  controllers: [ProductController],
  providers: [],
})
export class AppModule {}
