import './styles.css';
import carImg from '../../assets/car-img.png';

export default function CardCard() {
    return (<>
        <main>
            <section className='dstop-car-card'>
                <img src={carImg} alt="Car" />
                <h3>Lorem ipsum dolor</h3>
            </section>
        </main>
    </>
    );
}