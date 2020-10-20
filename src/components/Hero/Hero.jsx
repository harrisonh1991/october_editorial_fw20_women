import React from 'react';

import styles from './styles/hero.module.scss';
import Content from '../Content/content.jsx';

const Hero = props => {

    const { banner, title, content } = props;

    return (
        <header>
            <div className={styles.container}>
                {banner}
                <Content title={title} content={content}/>
            </div>
        </header>
    );

}

export default Hero;