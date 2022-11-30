class productManager {
    constructor (){
        this.product = []

    }
    getProducts = () => {return this.product}
    getNextId = () => {
        const contador = this.product.length
        return (contador > 0) ? this.product[count-1].id + 1 : 1
    }

    addProduct = (title,description,price,thumbnail,code,stock)=> {
        const id = this.getNextId
        const products = {
            id,
            title:'producto prueba',
            description: 'este es un producto prueba',
            price:200,
            thumbnail:'sin imagen',
            code:'abc123',
            stock:25
        }
        this.product.push(products)
    }
}