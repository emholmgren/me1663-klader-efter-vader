import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '@components/Footer'
import styles from '../styles/LandingPage.module.css';

export default function LandingPage() {
    return (
        <div>
            <main className={styles.landingPage}>
                <Navbar />
                <div className={styles.heroSection}>
                    <div className={styles.heroText}>
                        <h1>Välkommen till Klä Mig Rätt!</h1>
                        <p>
                            Lär dig om vädret och hjälp din avatar att klä sig rätt för att möta dagens utmaningar!
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/game">
                            <button className={styles.ctaButton}>Börja spela</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.heroImage}>
                    <img src="/avatars/happy.png" alt="Avatar" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
      );
    }
