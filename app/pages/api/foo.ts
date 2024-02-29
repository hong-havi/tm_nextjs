import { NextApiRequest, NextApiResponse } from "next"

interface SampleApiList extends NextApiRequest{
    body : {
        "category": string
    }
}

interface ProductsItf {
    name : string,
    price: number,
    desc : string
}

export default async function handler( 
    request: SampleApiList, 
    response: NextApiResponse 
){
    console.log(1);
    
    let datas: ProductsItf[];
    switch( request.body.category){
        case '1' :
            datas = [
                {
                    "name" : "상품",
                    "price" : 1000,
                    "desc" : "하하하",
                },
                {
                    "name" : "상품이지롱",
                    "price" : 10000,
                    "desc" : "놉",
                },
                {
                    "name" : "상품아님",
                    "price" : 10,
                    "desc" : "~~",
                },
            ]
            break;
        case '2' :
            datas = [
                {
                    "name" : "카테2 상품",
                    "price" : 1002,
                    "desc" : "하하하",
                },
                {
                    "name" : "카테2 상품이지롱",
                    "price" : 10030,
                    "desc" : "놉",
                },
                {
                    "name" : "카테2 상품아님",
                    "price" : 20,
                    "desc" : "~~",
                },
            ]
            break;
        default :
            datas = [];
            break;
    }

    switch( request.method  ){
        case 'GET' :
            response.status(200).json({name:"ss"})
        default :
            response.status(500).json('Not use Method') 
            break;
        
    }
}