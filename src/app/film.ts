export default class Film {
    public name: string;
    public img: string;
    public price?: number;
    public description?: string;
    constructor(name: string = '', img: string = '', price?: number) {
        this.name = name;
        this.img = img;
        this.price = price;
    }
}
