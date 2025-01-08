import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">🌤️KLÄ MIG RÄTT!</Link>
            </div>
            <nav>
                <ul className={styles.navLinks}>
                    <li><Link href="/game">SPELA</Link></li>
                    <li><Link href="/weather-facts">VÄDERFAKTA</Link></li>
                    <li><Link href="/parent-tips">TIPS FÖR FÖRÄLDRAR</Link></li>
                    {/*<li><Link href="/about-us">Om oss</Link></li>*/}
                </ul>
            </nav>
        </header>
    );
}
