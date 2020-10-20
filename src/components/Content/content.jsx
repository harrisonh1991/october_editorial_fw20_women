import React from 'react';
import styles from './styles/content.module.scss';
import Image from '../Image/image.jsx';

const Content = props => {

    const { image, title, content } = props;

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image image={image}/>
            </div>
            <h2 className={styles.title}>
                { title }
            </h2>
            <div className={styles.content}>
                {content}
            </div>
        </div>
    );

}

export default Content;