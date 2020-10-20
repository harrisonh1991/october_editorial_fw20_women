import React from 'react';

import styles from './styles/redirectBannerCta.module.scss'
import { CtaBit } from '../Cta/cta.jsx';

const RedirectBannerCta = props => {

    const { cta, media } = props;
    const { titles, content } = props.desc;

    return (
        <section className={styles.container}>
            <div className={styles.media}>
                {media}
            </div>
            <div className={styles.desc}>
                <div className={styles.desc_inner}>
                    <h2 className={styles.title}>
                        {titles.map((item, index)=> (
                            <div key={item+index}>{item}</div>
                        ))}
                    </h2>
                    <div className={styles.content}>{content}</div>
                    <div className={styles.cta}>
                        <CtaBit link={cta.link} content={cta.content}/>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default RedirectBannerCta;