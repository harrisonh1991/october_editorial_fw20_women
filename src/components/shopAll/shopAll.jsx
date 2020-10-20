import React from 'react';
import styles from './styles/shopAll.module.scss';
import {CtaBitDesktopWLimit} from '../Cta/cta.jsx';

export const ShopAll = props => {

    const { link, content } = props.cta;

    return (
        <div className={styles.container}>
            <CtaBitDesktopWLimit 
                link={link}
                content= {content}
            />
        </div>
    );

}