import {
  ProductRequest,
  ProductResponce,
  ProductServiceController,
  ProductServiceControllerMethods,
} from '@app/common';
import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';

@Controller('product')
@ProductServiceControllerMethods()
export class ProductController implements ProductServiceController {
  getProduct(
    request: ProductRequest,
  ): Promise<ProductResponce> | Observable<ProductResponce> | ProductResponce {
      return {
          productId: 12,
          name: "laptop",
          price:3000,
      }
  }
}
