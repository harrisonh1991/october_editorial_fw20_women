import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap';
import styles from './styles/scrollMagicDiv.module.scss';


const ScrollMagicDiv = props => {
    
    const { scrollMagicItems, rootBackground} = props;
    var _rootBackground = (typeof rootBackground === 'undefined')? 'white': rootBackground;

    return (
        <div style={{background: _rootBackground}}>
            <div className={styles.flex}>
                {scrollMagicItems.map((item, index) => (
                    <div key={item + index} className={styles.flex__item}>
                        <div className={[item.triggerElement, ' scrollMagic__trigger'].join(' ')}></div>
                        <Controller>
                                <Scene 
                                    triggerElement={'.'+item.triggerElement}
                                    triggerHook={(typeof item.triggerHook ==='undefined')?'onCenter': item.triggerHook}
                                    duration={item.duration} 
                                    pin={(typeof item.pin === 'undefined')? false: true}>
                                    {(progress) => (
                                        <Timeline totalProgress={progress} paused>
                                            <Tween from={Object.assign({}, item.from, {className: 'scrollMagic__div'})}
                                                to={item.to}>
                                                    <div>
                                                        <div className={styles.background_wh}>
                                                            {item.children}
                                                        </div>
                                                    </div>
                                            </Tween>
                                        </Timeline>
                                    )}
                                </Scene>
                        </Controller>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ScrollMagicDiv;