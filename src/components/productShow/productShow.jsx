import React from 'react';
import styles from './styles/productShow.module.scss';
import Content2 from '../Content/content2';
import ScrollMagicDiv from '../ScrollMagic/ScrollMagicDiv.jsx';
import Tags from '../Tag/tag.jsx';
import ProductSwiper from '../swiper/productSwiper.jsx';

const ProductShow = props => {

    const { title, content, scrollMagicItems, photosTags, products, scrollMagicElement} = props;

    return (
        <div className={styles.container}>
            <Content2 title={title} content={content} />
            <div className={styles.photos}>
                <ScrollMagicDiv scrollMagicElement={scrollMagicElement} scrollMagicItems={scrollMagicItems}/>
            </div>
            <Tags tags={photosTags}/>
            <ProductSwiper
                products={products}/>
        </div>
    );

}

export default ProductShow;