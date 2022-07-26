import {} from 'dotenv/config';
import { getURLdata } from "./index.js";

const dt = await getURLdata(process.env.API_KEY);

console.log(dt.data.filter( a=> a.coordinate.lat>0));