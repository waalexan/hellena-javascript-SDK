class HellenaClient extends HellenaConnect {
    private apiUrl: string = "https://hellena-api-for-devs.vercel.app";
    private apiKey: string;
    
    constructor({ apiKey }: { apiKey: string }) {
        this.apiKey = apiKey;
    }

    getApiUrl() {
        return this.apiUrl;
    }
}