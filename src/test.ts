import dotenv from "dotenv";
import { HellenaClient } from "./main.js";

dotenv.config({ quiet: true });

async function main() {
    const hellena = new HellenaClient(process.env.HELLENA_API_KEY!);

    console.log("carregando...")
    const products = await hellena.product.findMany();

    console.log(products);
}

main();