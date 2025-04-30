import {http,HttpResponse} from 'msw';
import carddata from "./card-data.json"
import chartdata from "./chart-data.json"

const handlers=[
    http.get('/api/data' , ()=>{
        return HttpResponse.json({
            data:carddata ,
            chartdata:chartdata,
        });
    }),
];
export default handlers;