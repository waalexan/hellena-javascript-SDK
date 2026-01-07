import type { HellenaConnect } from "@/core/HellenaConnect.js";
import { ProductFeature } from "./product.feature.js";
import { ProductService } from "./service/product.ser.js";

export function ProductModel(connect: HellenaConnect) {
    const service = new ProductService(connect);
    return new ProductFeature(service);
}