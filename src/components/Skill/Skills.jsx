import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaSass, FaHtml5, FaCss3Alt, FaPython, FaGolang} from 'react-icons/fa6'
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";

function Skills() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.skills_title}>My Skill Set</div>
                <ul className={styles.skills_list}>
                    <li>
                        <FaSquareJs/>
                    </li>
                    <li>
                        <FaReact/>
                    </li>
                    <li>
                        <FaSass/>
                    </li>
                    <li>
                        <FaHtml5/>  
                    </li>
                    <li>
                        <FaCss3Alt/>  
                    </li>
                    <li>
                        <RiTailwindCssFill/>  
                    </li>
                    <li>
                        <FaPython/>  
                    </li>
                    <li>
                        <FaGolang/>  
                    </li>
                    <li>
                        <SiMysql />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Skills
