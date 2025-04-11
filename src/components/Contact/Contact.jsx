import React from 'react'
import styles from './Contact.module.css/'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

function Contact() {
    return (
        <div className={styles.contact_wrapper}>
            <div className={styles.contact_con}>
                <div className={styles.contact_info}>
                    <h3>Get in touch</h3>
                    <p className={styles.contact_desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis pariatur esse sit odio nihil aperiam asperiores aut inventore animi nulla.</p>
                    <p className={styles.contact_address}>
                        123 Main Street <br/>
                        Bangkok, Thailand
                    </p>
                    <p><FaPhone/> (+66) 98 555 1234</p>
                    <p><FaEnvelope/> support@site.com</p>
                </div>
        

                <div className={styles.contact_from}>
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="first name">First Name</label>
                            <input type="text" placeholder='eg. John'></input>
                        </div>
                        <div>
                            <label htmlFor="last name">Last Name</label>
                            <input type="text" placeholder='eg. Doe'></input>
                        </div>
                    </div>
                        <label htmlFor="email address">Email Address</label>
                        <input type="email" placeholder='eg. johndoe@gmail.com'></input>

                        <label htmlFor="message">Your message</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Type here'></textarea>

                        <button type='submit'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
