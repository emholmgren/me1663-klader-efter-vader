import Navbar from '../components/Navbar';
import Footer from '@components/Footer'
import styles from '../styles/TextPages.module.css'

export default function WeatherFacts() {
  return (
    <div>
      <main>
      <Navbar />

      <div className='container'>
          <h1>Tips för föräldrar</h1>
          <p>Här har vi samlat tips för dig som förälder!</p>
        </div>

      <div className={styles.textPages}>

        <div>
          <h3>Soligt väder:</h3>
          <p>
            Lätta och luftiga kläder: Tunna bomullsplagg som andas.<br></br>
            Solhatt eller keps: Skydda huvudet och ansiktet mot solen.<br></br>
            Solkräm: Särskilt viktigt för känslig barnhud.<br></br>
            Lätta skor eller sandaler: Bekväma och lämpliga för lek.
            </p>
        </div>


        <div>
          <h3>Regnigt väder:</h3>
          <p>
            Vattentäta ytterkläder: Regnjacka och byxor.<br></br>
            Gummistövlar: Så att barnen kan hoppa i pölar utan att bli blöta.<br></br>
            Extra ombyte: Det är bra att ha torra kläder redo ifall de blir genomblöta.
            </p>
        </div>

        <div>
          <h3>Kallt väder:</h3>
          <p>
            Flera lager: Underställ i ull eller syntet, tröja, och en varm jacka.<br></br>
            Mössa, vantar och halsduk: Skydda de känsliga delarna som snabbt blir kalla.<br></br>
            Varma och vattentäta skor: För att hålla fötterna torra och varma.
            </p>
        </div>

        <div>
          <h3>Snöigt väder:</h3>
          <p>
            Overall eller skalkläder: Skyddar mot både kyla och blöta.<br></br>
            Termokläder: Extra isolering under overallen.<br></br>
            Snöskor: Med bra grepp för vinterlek.<br></br>
            Reflexer: Om det blir mörkt tidigt.
            </p>
        </div>

        <div>
          <h3>Växlande väder:</h3>
          <p>
            Lager på lager: Gör det enkelt att ta av eller lägga till kläder.<br></br>
            Vindjacka: Perfekt för blåsiga dagar som inte är för kalla.<br></br>
            Extra ombyte: Förbered för alla eventualiteter.
            </p>
        </div>

        <div>
          <h3>Övergripande tips:</h3>
          <p>
            Märk barnens kläder: Förskolan älskar när inget försvinner!<br></br>
            Se till att kläderna är bekväma och lätta att röra sig i.<br></br>
            Låt barnen vara delaktiga i att välja sina kläder – det gör det roligare!
            </p>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
