interface ProductItf{
    id: number,
    name: string,
    price: number,
    desc: string,
}

export default async function Item(props : Readonly<{
    data : ProductItf
}>){
    const item = props.data;
    return (
        <div>
            <span>상품명 : {item.name}</span>
            <span>금액 : {item.price}</span>
            <span>설명 : {item.desc}</span>
        </div>
    )
}

