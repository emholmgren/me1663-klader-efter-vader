import Navbar from '../components/Navbar';
import Footer from '@components/Footer'
import styles from '../styles/TextPages.module.css'

export default function WeatherFacts() {
  return (
    <div>
      <main>
        <Navbar />
        <div className='container'>
          <h1>Väderfakta</h1>
          <p>Här kan du lära dig om olika vädertyper och hur du bäst klär dig!</p>
        </div>
        <div className={styles.textPages}>

          <div>
            <h3>Vad är väder?</h3>
            <p>Väder är hur det känns och ser ut utomhus.<br/>
            Ibland är det soligt och varmt, ibland regnar det, och ibland kan det snöa.<br/>
            Vädret kan ändras snabbt – det är som en överraskning varje dag! 🌦️
            </p>
          </div>

          <div>
            <h3>Solen</h3>
            <p>Solen ger oss värme och ljus. ☀️<br/>
            När solen skiner, känns det varmt, och vi behöver solkräm och solhatt.<br/>
            Ibland känns solen starkast mitt på dagen, då är det bra att ta en paus i skuggan.
            </p>
          </div>

          <div>
            <h3>Regn</h3>
            <p>Regn kommer från molnen. Det är som om molnen gråter. ☔<br/>
            Regn gör att blommor och träd växer och blir glada.<br/>
            Gummistövlar och regnjacka är perfekta för att hoppa i pölar! 💦
            </p>
          </div>

          <div>
            <h3>Snö</h3>
            <p>Snö är som små iskristaller som faller från himlen. ❄️<br/>
            Det blir kallt och vitt överallt – perfekt för att bygga snögubbar.<br/>
            Man måste ha varma kläder för att inte frysa, som mössa och vantar.
            </p>
          </div>

          <div>
            <h3>Vind</h3>
            <p>Vind är luften som rör sig. Ibland blåser det lite, ibland mycket. 🌬️<br/>
            Lätta saker som löv och paraplyer kan flyga iväg i vinden.<br/>
            Man kan flyga drakar när det blåser lagom mycket.
            </p>
          </div>

          <div>
            <h3>Åska</h3>
            <p>Åska är när himlen gör höga ljud, och man kan se ljus blixta. ⚡<br/>
            Det låter kanske läskigt, men det är bara naturens sätt att prata!<br/>
            Man ska vara inomhus när det åskar, för det är säkrast.
            </p>
          </div>

          <div>
            <h3>Regnbågar</h3>
            <p>Regnbågar är färger på himlen som man kan se efter regn. 🌈<br/>
            De är som naturens magiska leksak – och visst är de vackra?<br/>
            Färgerna i regnbågen är röd, orange, gul, grön, blå, indigo och violett.
            </p>
          </div>

          <div>
            <h3>Enkla aktiviteter för barn om väder</h3>
            <p>Gör en väderkalender: Låt barnen rita solen, moln eller regn varje dag.<br/>
            Utforska regndroppar: Lägg en skål utomhus och se hur mycket vatten som samlas.<br/>
            Bygg en snögubbe eller flyg en drake när vädret passar!
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
