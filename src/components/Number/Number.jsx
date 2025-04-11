//import React, { useRef, useEffect } from 'react'
import styles from './Number.module.css'
import CountUp from 'react-countup';
//import VisibilitySensor from 'react-visibility-sensor'; ทำงานไม่ได้

function Number() {

return (
    <>
        <div className={styles.number_con}>
            <div className={styles.number_items}>
                <h3>
                    <CountUp start={0} end={10} duration={10} />+
                </h3>
                <p>Project Delivered</p>
            </div>
            <div className={styles.number_items}>
                <h3>
                    <CountUp start={0} end={0} duration={10} />
                </h3>
                <p>Companies Helped</p>
            </div>
            <div className={styles.number_items}>
                <h3>
                    <CountUp start={0} end={2} duration={10} />+
                </h3>
                <p>Years of experience</p>
            </div>
            <div className={styles.number_items}>
                <h3>
                    <CountUp start={0} end={5} duration={10} />+
                </h3>
                <p>Happy Clients</p>
            </div>
        </div>
    </>
)
}

export default Number
