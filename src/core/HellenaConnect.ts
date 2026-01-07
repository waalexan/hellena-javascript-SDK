export class HellenaConnect {
    protected readonly apiUrl = "https://hellena-api-for-devs.vercel.app";
    protected readonly apiVersion = "v1";
    protected readonly apiEndpoint = `${this.apiUrl}/${this.apiVersion}`;

    constructor(protected readonly apiKey: string) { }

    protected getHeaders() {
        return {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.apiKey}`,
        };
    }

    getApiKey() { return this.apiKey; }

    getApiEndpoint() { return this.apiEndpoint; }

    getApiVersion() { return this.apiVersion; }

    getApiUrl() { return this.apiUrl; }
}
