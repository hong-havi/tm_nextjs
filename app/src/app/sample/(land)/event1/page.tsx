import Image from 'next/image'
import thumb from '@public/1.jpg'
import { CSSProperties } from 'react';

const imageStyle: CSSProperties = {
    position: "relative",
    width:"500px",
    height:"500px"
};

export default function Event1(props:any) {
    return (
        <div>
            <div>
                <Image src={ thumb } alt="image" />
            </div>
            <div>
                <Image src="https://siwon-cdn.siwonschool.com/www/promo_top07.jpg" 
                    width={500} 
                    height={200} 
                    alt="이미지롱" />
            </div>
            <div style={imageStyle}>
                <Image src="https://siwon-cdn.siwonschool.com/www/promo_benefit.jpg" 
                    fill={true}
                    alt="이미지롱" />                
            </div>
        </div>
    );
}

