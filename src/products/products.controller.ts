import {Controller, Post, Body, Get, Param, Patch, Delete} from '@nestjs/common' 

// Importing our Products Service file that we made
import { ProductsService } from './products.service';

// product controller Handles to /products 
@Controller('products')
export class ProductsController {
    // Injecting functions. private means only can use in this func, and readonly means that we don't intend to replace this var with another
    constructor(private readonly productsService: ProductsService){}
    
    // Handles Post request to /products
    @Post()
    // Syntax: functionName(): returned_object_type {}
    // @Body handler must be imported from top, for first one, @Body will take the title field in the title: xxx, and assign to prodTitle
    addProduct(
        // Or u can do
        // @Body() completeBody: {title: string, description: string, price: number}
        @Body('title') prodTitle : string, 
        @Body('description') prodDesc: string, 
        @Body('price') prodPrice: number): 
        any { 
            // The function insertproduct will return the generatedID
            const generatedId = this.productsService.insertProduct(prodTitle,prodDesc,prodPrice);
            return { id: generatedId } 
        } 

    // Handles /products
    @Get()
    getAllProducts(){
        return this.productsService.getProducts();
    }

    // Handles /products/[id]
    @Get(':id')
    getProduct(@Param('id') prodId: string){
        return this.productsService.getOneProduct(prodId);
    }

    //Patch is basically put, just that the fields remain the same.
    @Patch(":id")
    updateProduct(
        @Param('id') prodId: string, 
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string, 
        @Body('price') prodPrice: number)
        {
            this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
            return null
        }

    @Delete(':id')
    removeProduct(@Param('id') prodId: string){
        this.productsService.deleteProduct(prodId)
        return null;

    }
}