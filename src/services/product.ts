class ProductService {
    private apiHost: string;
    private token: string;


    constructor({ apiHost, token }: { apiHost: string, token: string }) {
        this.apiHost = apiHost;
        this.token = token;
    }

    async getProducts() {
        const response = await fetch(`${this.apiHost}/all`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            }
        });

        return response.json();
    }
}