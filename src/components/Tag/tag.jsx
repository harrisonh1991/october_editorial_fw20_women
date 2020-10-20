import React from 'react';
import styles from './styles/tag.module.scss';

const Tag = props => {

    const { content } = props;

    return (
        <div className={styles.tag__container}>
            <span className={styles.tag}>
                { content }
            </span>
        </div>
    );

}

const Tags = props => {

    const { tags } = props;
    const _tags = tags.map((item) => { return <Tag key={item} content={item}/>});

    return (
        <div className={styles.container}>
            {_tags}
        </div>
    );

}

export default Tags;