import React from 'react';

import LazyLoad from 'react-lazyload';
import styles from './styles/image.module.scss'

const Image = props => {

    const { image } = props,
    offset = 400;

    let once = false , img;
    if(typeof image !== 'undefined'){
        if(typeof image.src !== 'undefined'){
            once = true;
            img = (<img className={styles.image} src={image.src} alt={image.alt} offset={offset}/>)
        }else{
            img = (
                <div>
                    <img className={styles.image_mb} src={image.mobile} alt={image.alt} offset={offset}/>
                    <img className={styles.image_dt} src={image.desktop} alt={image.alt} offset={offset}/>
                </div>
            )
        }
    }

    return (
        <LazyLoad once={once} >
            {img}
        </LazyLoad>
    );

}

export default Image;