import { NextResponse, NextRequest } from "next/server";

interface ProductsItf {
    id : number,
    name : string,
    price: number,
    desc : string
}

interface RequestItf extends NextRequest{
  searchParams : {
    category: number
  }
}

export async function GET( 
    req : RequestItf, 
    res: NextResponse 
){
  const category = req.nextUrl.searchParams.get('category');
  let datas: ProductsItf[] = [];
  if( !category ){
    return NextResponse.json({message:'Not Exist Category'},{status:500})
  }
  switch( category ){
    case '1' :
        datas = [
          {
              "id" : 1,
              "name" : "상품",
              "price" : 1000,
              "desc" : "하하하",
          },
          {
              "id" : 2,
              "name" : "상품이지롱",
              "price" : 10000,
              "desc" : "놉",
          },
          {
              "id" : 3,
              "name" : "상품아님",
              "price" : 10,
              "desc" : "~~",
          },
        ]
        break;
    case '2' :
        datas = [
            {
                "id" : 4,
                "name" : "카테2 상품",
                "price" : 1002,
                "desc" : "하하하",
            },
            {
                "id" : 5,
                "name" : "카테2 상품이지롱",
                "price" : 10030,
                "desc" : "놉",
            },
            {
                "id" : 6,
                "name" : "카테2 상품아님",
                "price" : 20,
                "desc" : "~~",
            },
        ]
        break;
    default :
      return NextResponse.json({message:'Not Exist Category'},{status:500})
  }
  
  return NextResponse.json(datas,{status:200})
}


// Notice the funciton definiton:
export async function POST() {
  try {
    // Get all admins using Prisma

    return NextResponse.json({s:"sdasd"}, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get admins" },
      {
        status: 500,
      }
    );
  }
}