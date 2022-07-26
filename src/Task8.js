import {} from 'dotenv/config';
import {getURLdata} from "./index.js";


const dt = await getURLdata(process.env.API_KEY);

dt.data.sort((a,b)=>{
    if(a.id <b.id){
        return -1;
    }
    if(a.id > b.id){
        return 1;
    }
})
console.log(dt.data[10]);
console.log(dt.data[dt.data.length - 11]);