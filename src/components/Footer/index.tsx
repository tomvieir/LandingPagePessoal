
import styles from './Footer.module.scss';
import { BsLinkedin, BsGithub, BsInstagram, BsArrowUp } from 'react-icons/bs';
export default function Footer() {
    return (
        <div className={styles.footerSection}>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <div className={styles.scrollTop}>
                        <a href="">
                            <p>
                                <BsArrowUp />
                                Voltar ao topo
                            </p>
                        </a>
                    </div>
                </div>

                <div className={styles.rightContainer}>
                    <div className={styles.social}>
                        <a href="https://www.linkedin.com/in/wevertonvieira/" className={styles.linkedin}>
                            <div className={styles.icon}><BsLinkedin /></div>

                        </a>

                        <a href="https://github.com/tomvieir" className={styles.github}>
                            <div className={styles.icon}><BsGithub /></div>

                        </a>

                        <a href="https://www.instagram.com/tom.vieir/" className={styles.instagram}>
                            <div className={styles.icon}><BsInstagram /></div>

                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}