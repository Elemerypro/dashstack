import {http,HttpResponse} from 'msw';

const handlers=[
    http.get('/api/data' , ()=>{
        return HttpResponse.json({
            data:['Item1','Item2','Item3']
        });
    }),
];
export default handlers;