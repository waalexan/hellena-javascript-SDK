import dotenv from "dotenv";
import { HellenaClient } from "./main.js";

dotenv.config({ quiet: true });

async function main() {
    const hellena = new HellenaClient(process.env.HELLENA_API_KEY!);

    const products = await hellena.product.findMany();
    products.forEach((product) => {
        console.log(product.barcode);
    });
}

main();