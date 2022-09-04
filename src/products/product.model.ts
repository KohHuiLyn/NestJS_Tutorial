// To show what's in a product

export class Product {
    
    // --NORMAL WAY OF DEFINING:

    // id: string;
    // title: string;
    // description: string;
    // price: number;

    // constructor(id: string, title: string, desc: string, price: number) {
    //     this.id = id;
    //     this.title = title;
    //     this.description = desc;
    //     this.price = price;
    // };

    // --TYPESCRIPT WAY
    //public = available outside of this class, private = cant
    constructor(
        public id: string, 
        public title: string, 
        public description: string, 
        public price: number){}
}