import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

// Ties all the products stuff together so that it can be used in the main controller
@Module({
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}

// Have to import this module into the main app.module.ts