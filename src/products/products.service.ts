import { Injectable, NotFoundException } from "@nestjs/common";

// Importing modules that i created
import { Product } from "./product.model"; 

@Injectable()
export class ProductsService {
    // Define this as an empty array initially !!
    private products: Product[] = [];
    // Insert Product function must be injected into controller
    insertProduct(title: string, desc: string, price: number) {
        // the id is just some dummy id
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId,title, desc, price)
        console.log(newProduct)
        this.products.push(newProduct)
        return prodId; 
    }

    getProducts(){
        // Syntax: return an array of the Copy of the items in this.products.
        return [...this.products]
    }

    getOneProduct(productId: string){
        const product = this.findProduct(productId)[0];
        return { ...product };
    }

    updateProduct(productId: string, title: string, desc: string, price:number) {
        // const product = this.findProduct(productId)[0];
        // const index = this.findProduct(productId)[1];
        const [product, index] = this.findProduct(productId)
        const updatedProduct = {...product}

        // If title exists etc
        if (title){
            updatedProduct.title = title
        }
        if (desc){
            updatedProduct.description = desc
        }
        if (price){
            updatedProduct.price = price
        }
        // Override existing product
        this.products[index] = updatedProduct

    }
    deleteProduct(prodId: string){
        const index = this.findProduct(prodId)[1];
        // From this array, remove the index, and remove 1 element.
        this .products.splice(index,1)
    }
    // common methods used in this service file
    // find product will return an array with [A Product, ProductIndex (number)]
    private findProduct(id: string): [Product, number]{
                // find function -> for all product in products array, find the one where the id is equals to the get request params
                const productIndex = this.products.findIndex(prod => prod.id === id)
                const product = this.products[productIndex];
                // If product is null
                if (!product){
                    throw new NotFoundException('Could not find product :(');
                }
                return [product, productIndex];
    }
    

}