import type { HellenaConnect } from "@/core/HellenaConnect.js";
import type { ProductDTO } from "../dto/product.dto.js";

export class ProductService {
    constructor(private readonly connect: HellenaConnect) {}

    async getAllProducts(): Promise<ProductDTO[]> {
        const response = await fetch(
            `${this.connect["apiEndpoint"]}/product/all`,
            {
                method: "GET",
                headers: this.connect["getHeaders"](),
            }
        );

        if (!response.ok) {
            throw new Error(`Erro ao buscar produtos (${response.status})`);
        }

        return response.json();
    }

    async getProductById(id: string): Promise<ProductDTO> {
        const response = await fetch(
            `${this.connect["apiEndpoint"]}/product/${id}`,
            {
                method: "GET",
                headers: this.connect["getHeaders"](),
            }
        );

        if (!response.ok) {
            throw new Error(`Erro ao buscar produto (${response.status})`);
        }

        return response.json();
    }
}
