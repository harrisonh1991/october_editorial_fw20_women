import React from 'react';
import styles from './styles/content.module.scss';
import styles1 from './styles/content2.module.scss';

const Content2 = props => {

    const { title, content } = props;

    return (
        <div className={styles1.container}>
            <h2 className={styles1.title}>
                {title}
            </h2>
            <div className={styles.content}>
                {content}
            </div>
        </div>
    );

}

export default Content2;