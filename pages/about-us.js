import Navbar from '../components/Navbar';
import Footer from '@components/Footer'

export default function WeatherFacts() {
  return (
    <div>
      <Navbar />
      <main>

        <div className='container'>
          <h1>Om oss</h1>
          <p>Här kan du lära känna oss som ligger bakom Klä Mig Rätt!</p>
        </div>

      </main>
      <Footer />
    </div>
  );
}
