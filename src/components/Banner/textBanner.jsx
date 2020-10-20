import React from 'react';

import styles from './styles/textBanner.module.scss';
import { Tags } from '../Tag/tag.jsx';

const TextBanner = props => {

    const { title, tags } = props;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {title}                 
            </h1>  
            <Tags tags={tags} />
        </div>
    );
}

export default TextBanner;