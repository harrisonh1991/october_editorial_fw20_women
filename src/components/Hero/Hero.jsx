import React, { useEffect, useState, useRef } from 'react';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import * as ScrollMagic from "scrollmagic";
import styles from './styles/hero.module.scss';
import Content from '../Content/content.jsx';
import { TweenMax, TimelineMax, Sine } from "gsap";
import { useMediaQuery } from 'react-responsive';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const Hero = props => {

    const { banner, title, content } = props;
    const containerRef = useRef(null);

    let [desktopDevice, setDesktopDevice] = useState(useMediaQuery({
        query: '(min-width: 1024px)'
      }));

    let controller, tl;

    useEffect(() => {
        console.log(desktopDevice);
        if(desktopDevice) {
            controller = new ScrollMagic.Controller();
            tl = new TimelineMax();
            //tl.to(containerRef.current, 4, {rotation: 100, ease: Sine.Out });

            new ScrollMagic.Scene({
                triggerElement: containerRef.current,
                triggerHook: "onLeave",
                duration: "100%",
            })
                .setPin(containerRef.current)
                .on("progress", onPinScrollProgress)
                .addTo(controller);
        }
    }, []);


    function onPinScrollProgress(e) {
        let scaleProgress = ((e.progress / 0.8) * 0.75) + 0.25;
        let yProgress = (1 - (e.progress/ 0.8)) * 30;

        let progress = e.progress / 0.8;
        console.log(scaleProgress.toFixed(2));

        if(progress > 1) {
            progress = 1;
        }

        if(scaleProgress > 1) {
            scaleProgress = 1;
        }

        if(yProgress < 0) {
            yProgress = 0;
        }
     
        TweenMax.to(containerRef.current, 0.2, { scale: scaleProgress, rotation: progress * 360, y: yProgress*-1 + "%", ease: Sine.Out });
        
    }

    let defaultStyles = desktopDevice ? { transform: 'translate(0, -30%) scale(0.25)' } : {}
    return (
        <div className={styles.background}>
            <header className={styles['header-position']} ref={containerRef} style={defaultStyles}>
                <div className={styles.container}>
                    {banner}
                    <div className={styles.inner}>
                        <Content title={title} content={content}/>
                    </div>
                </div>
            </header>
        </div>
        
    );

}

export default Hero;