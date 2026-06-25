import styles from "./Header.module.css";
import Image from "next/image"

export default function Header() {
  return (
    <nav className={styles.header}>
        <a href="">
            <Image 
                src="/boty_no_bg.png"
                alt="Boty" 
                width={70}
                height={70}
                className={styles.logo_img} 
            />
        </a>
        <div className={styles.nav}>
            <a href="#">Home</a>
            <a href="">Features</a>
            <a href="">Pricing</a>
        </div>
        <div>
            <button className={styles.btn_primary}>START NOW</button>
        </div>
    </nav>
      
  )
}