import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';
import taskImg1 from './Future Shop.png';
import taskImg2 from './Todolist.png';
import taskImg3 from './Task Assigner Website.png';
import taskImg4 from './Winform.png';
import taskImg5 from './KanBan Board.png';
import taskImg6 from './My shop.png';

function Portfolio() {
    return (
        <div className={styles.port_con}>
            <h3 className={styles.port_title}> Portfolio</h3>
            <div className={styles.port_list}>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src={taskImg1}></img>
                        <p>Future Shop</p>
                    </Tilt>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src={taskImg2}></img>
                        <p>Todolist</p>
                    </Tilt>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src={taskImg3}></img>
                        <p>Task Assigner Website</p>
                    </Tilt>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src={taskImg4}></img>
                        <p>Winform</p>
                    </Tilt>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src={taskImg5}></img>
                        <p>KanBan Board</p>
                    </Tilt>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src={taskImg6}></img>
                        <p>My Shop</p>
                    </Tilt>
                </div>

            </div>
        </div>
    )
}

export default Portfolio
