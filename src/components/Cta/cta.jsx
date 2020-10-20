import React from 'react';

import styles from './styles/cta.module.scss'

export const CtaBit = props => {

    const { content, link } = props;

    return (
        <a className={[styles.cta, styles.cta_bit].join(' ')} href={link}>
            <i className={['iconfont icon-icon_arrowright', styles.icon, styles.icon_bit ].join(' ')}></i>{content}
        </a>
    );

}


export const CtaBitDesktopWLimit = props => {

    const { content, link } = props;

    return (
        <a className={[styles.cta, styles.cta_bit_mb_w_full_dt_w_limit].join(' ')} href={link}>
            <i className={['iconfont icon-icon_arrowright', styles.icon, styles.icon_bit ].join(' ')}></i>{content}
        </a>
    );

}