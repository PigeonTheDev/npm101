import {} from 'dotenv/config';
import {getURLdata} from "./index.js"

const dt = await getURLdata(process.env.API_KEY);

console.log(dt.data.reduce((a,b) => a + b.id,0));

//a + b.id'yi  {}'e koyduğumda çalışmıyor neden acaba?