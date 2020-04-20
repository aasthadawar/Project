import React from 'react';
import styles from '../Helpline/Helpline.module.css';

const Helpline=()=>{
    return(
        <div className={styles.helpline}>
            <div className={styles.overlay}>
                <ul>
                    <li className={styles.box}>
                    <a href="https://www.youtube.com/watch?v=sHP0UIdZyI4" target="blank">https://www.youtube.com/watch?v=sHP0UIdZyI4</a></li>
                <li className={styles.box}>
                    <a href="https://www.youtube.com/watch?v=dSQztKXR6k0" target="blank">https://www.youtube.com/watch?v=dSQztKXR6k0</a></li>
                    <li className={styles.box}>
                    <a href="https://www.who.int/health-topics/coronavirus#tab=tab_1" target="blank">https://www.who.int/health-topics/coronavirus#tab=tab_1</a></li>
                    <li className={styles.box}>
                    <a href="https://en.wikipedia.org/wiki/Coronavirus" target="blank">https://en.wikipedia.org/wiki/Coronavirus</a></li>
                    <li className={styles.box}>
                    <a href="https://www.youtube.com/watch?v=FVIGhz3uwuQ" target="blank">https://www.youtube.com/watch?v=FVIGhz3uwuQ</a></li>
                    <li className={styles.box}>
                    <a href="https://www.youtube.com/watch?v=sWjYs7aILZ8" target="blank">https://www.youtube.com/watch?v=sWjYs7aILZ8</a></li>
                    <li className={styles.box}>
                    <a href="https://www.mohfw.gov.in/" target="blank">https://www.mohfw.gov.in/</a></li>
                    <li className={styles.box}>
                    <a href="https://www.youtube.com/watch?v=8c_UJwLq8PI" target="blank">https://www.youtube.com/watch?v=8c_UJwLq8PI</a></li>
                    <li className={styles.box}>
                    <a href="https://www.youtube.com/watch?v=hZDX08RcPmg" target="blank">https://www.youtube.com/watch?v=hZDX08RcPmg</a></li>
                    <li className={styles.box}>
                    <a href="https://www.youtube.com/watch?v=oGruT7Fd54E" target="blank">https://www.youtube.com/watch?v=oGruT7Fd54E</a></li>
                </ul>
            </div>    
        </div>
    );
}

export default Helpline;