import Link from 'next/link';
import Head from 'next/head'

import Navbar from '../components/Navbar';
import Footer from '@components/Footer'
import styles from '../styles/LandingPage.module.css';

export default function LandingPage() {
    return (
        <div>

            <Head>
                <title>Klä Mig Rätt</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet"/>
            </Head>

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
