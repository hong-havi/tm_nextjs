import styles from './../page.module.css'

interface ProductItf{
    id: number,
    name: string,
    price: number,
    desc: string,
}

export default async function FreeBoard(){
    const datas : ProductItf[] = await (
        await fetch('http://localhost:3000/api/sample?category=1')
    ).json()

    return (
        <div className={ styles.list }>
            <h2>리스트</h2>
            {
                datas.map(( data: ProductItf )=>{
                    return(
                        <div className={ styles.item } key={ data.id }>
                            <span>상품명 : {data.name}</span>
                            <span>금액 : {data.price}</span>
                            <span>설명 : {data.desc}</span>
                        </div>
                    )
                })
            }
        </div>
    )
} 

