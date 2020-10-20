import React from 'react';
import styles from './styles/productSwiper.module.scss';
import Swiper from 'react-id-swiper';
import Image from '../Image/image.jsx';

import 'swiper/swiper.scss';
import './styles/swiper.scss';

const ProductSwiper = props => {
    
    const params = {
        grabCursor: true,
        slidesPerView: 1.4,
        spaceBetween: 16,
        scrollbar: {
            draggable: true,
            hidden: false,
            el: '.swiper-scrollbar'
        },
        breakpoints:{
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    };

    return (
        <div className={styles.container}>
            <Swiper {...params}>
                {
                    getSlider(props.products)
                }
            </Swiper>      
        </div> 
    );

};

const getSlider = props => {

    const { shopUrl, imageUrl, imageUrl_end, lists } = props;
    const _lists = [];
    lists.map((item, index) => _lists.push(<div key={item + index} className='swiper-slide'>
                <div>
                    <a className={styles.link} href={shopUrl + item.sku}>
                        <Image image={{src: imageUrl + item.sku + '/' + item.sku +imageUrl_end}} />
                        <div className={styles.desc}>
                            <p className={styles.string}>{item.brand}</p>
                            <p className={styles.string}>{item.name}</p>
                        </div>
                    </a>
                </div>
            </div>
        )
    );
        

    return _lists;
}

export default ProductSwiper;