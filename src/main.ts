import { HellenaConnect } from "./core/HellenaConnect.js";
import { OrganizationModel } from "./resources/organization/organization.model.js";
import { ProductModel } from "./resources/product/product.model.js";

export class HellenaClient extends HellenaConnect {
    public readonly product = ProductModel(this);
    public readonly organization = OrganizationModel(this);

    constructor(apiKey: string) {
        super(apiKey);
    }    
}
