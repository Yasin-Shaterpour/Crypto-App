import styles from './Header.module.css';
import Whatsapp from '../services/logos/Whastapp.jsx';
import Telegram from '../services/logos/Telegram.jsx';
import Linkedin from '../services/logos/Linkedin.jsx';
import Github from '../services/logos/Github.jsx';
function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.Header}>
            <h3><span>Crypto</span> App</h3>
            <div className={styles.navbar}>
                <a href="#">

                </a>
                <a className={styles.iconWrapper} href="#">
                     <Github/> 
                     <span className={styles.tooltip}>Github</span>
                </a>
                <a className={styles.iconWrapper}  href="#">
                     <Linkedin/> 
                     <span className={styles.tooltip}>Linkedin</span>
                     </a>
                <a className={styles.iconWrapper}  href="#">
                     <Telegram/> 
                     <span className={styles.tooltip}>Telegram</span>
                </a>
                <a className={styles.iconWrapper}  href="#"> 
                    <Whatsapp/>
                    <span className={styles.tooltip}>WhatsApp</span>
                 </a>
            </div>
        </div>
    </div>
  )
}

export default Header