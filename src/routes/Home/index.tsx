import CardCard from '../../components/CarCard';
import Header from '../../components/Header';
import './styles.css';

export default function Home() {
    return (<>
        <Header></Header>
        <main>
            <section id='dstop-section-cars'>
                <h2>Venha nos visitar</h2>
                <div className='dstop-card-container'>
                    <CardCard></CardCard>
                    <CardCard></CardCard>
                </div>

            </section>
        </main>
    </>
    );
}