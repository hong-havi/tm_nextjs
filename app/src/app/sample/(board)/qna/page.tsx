'use client'
import { useEffect, useState } from "react"
import styles from './../page.module.css'

interface ProductItf{
    id: number,
    name: string,
    price: number,
    desc: string,
}

export default function QnaBoard(){
    const [datas, setDatas] = useState([])
    useEffect(()=>{
        fetch('/api/sample?category=2')   
            .then((res) => res.json())
            .then((data) =>{
                setDatas(data);
            })
    },[])
    return (
        <div className={ styles.list }>
            <h2>QNA 리스트</h2>
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

