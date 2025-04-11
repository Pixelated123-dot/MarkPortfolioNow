import React from 'react'
import styles from './Testimonial.module.css/'

function Testimonials() {
    return (
        <div className={styles.testi_con}>
            <h3 className={styles.testi_title}>Testimonials</h3>
            <div className={styles.testi_list}>
                <div className={styles.testi_items}>
                    <p>
                    "This platform is incredibly intuitive. It’s made task management in our team smoother and more organized than ever."
                    </p>
                    <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                    <h4>John doe</h4>
                    <p className={styles.testi_bio}>Web Developer</p>
                </div>
                <div className={styles.testi_items}>
                    <p>
                    "I was impressed by how fast and responsive the site is. It’s packed with features that actually help streamline teamwork."
                    </p>
                    <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                    <h4>Jahn doe</h4>
                    <p className={styles.testi_bio}>Web Developer</p>
                </div>
                <div className={styles.testi_items}>
                    <p>
                    "Since using this system, our workflow has become more efficient. The reminders and assignments features are real game-changers."
                    </p>
                    <img src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                    <h4>Jilue doe</h4>
                    <p className={styles.testi_bio}>Web Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
