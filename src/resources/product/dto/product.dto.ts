export interface PriceDTO {
    id: string;
    stockId: string;
    quantity: number;
    price: number;
    createdAt: string;
    updatedAt: string;
}

export interface ProductDTO {
    id: string;
    barcode: string;
    name: string;
    category: string | null;
    image: string | null;
    Price: PriceDTO[];
    unit: string;
    quantity: number;
    purchasePrice: number;
    expirationDate: string | null;
    updatedAt: string;
}