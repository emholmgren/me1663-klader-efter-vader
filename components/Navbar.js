import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">🌤️Klä mig rätt!</Link>
            </div>
            <nav>
                <ul className={styles.navLinks}>
                    <li><Link href="/weather-facts">Väderfakta för barn</Link></li>
                    <li><Link href="/parent-tips">Tips för föräldrar</Link></li>
                    <li><Link href="/about-us">Om oss</Link></li>
                </ul>
            </nav>
        </header>
    );
}
