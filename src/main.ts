class HellenaClient {
    private apiUrl: string = "https://hellena-api-for-devs.vercel.app";
    private apiVersion: string = "v1";
    private apiHost: string = `${this.apiUrl}/${this.apiVersion}`;
    private apiKey: string;

    private productService: ProductService;

    constructor({ apiKey }: { apiKey: string }) {
        this.apiKey = apiKey;
    }
}