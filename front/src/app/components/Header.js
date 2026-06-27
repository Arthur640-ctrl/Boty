import styles from "./Header.module.css";
import Image from "next/image"
import Link from "next/link";

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
            <a href="#paths">Features</a>
            <a href="">Pricing</a>
        </div>
        <div className={styles.cta_container}>
            <Link className={styles.btn_primary} href="/auth">START NOW</Link>
        </div>
    </nav>
      
  )
}