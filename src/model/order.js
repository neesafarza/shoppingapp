module.exports.Order = class {
    constructor (products, total) {
        this.products = products;
        this.total = total;
    }

    setId(id) {
        this.id = id;
    }
}