import { HellenaConnect } from "./core/HellenaConnect.js";
import { ProductModel } from "./resources/product/product.model.js";

export class HellenaClient extends HellenaConnect {
    public readonly product = ProductModel(this);

    constructor(apiKey: string) {
        super(apiKey);
    }
}
