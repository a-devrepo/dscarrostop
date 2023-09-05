import CardCard from '../../components/CarCard';
import CommentCard from '../../components/CommentCard';
import Header from '../../components/Header';
import PageFooter from '../../components/PageFooter';
import './styles.css';

export default function Home() {
    return (<>
        <Header></Header>
        <main>
            <section id='dstop-section-cars'>
                <div className='dstop-container'>
                    <h2>Venha nos visitar</h2>
                    <div className='dstop-card-container'>
                        <CardCard></CardCard>
                        <CardCard></CardCard>
                    </div>
                </div>
            </section>
            <section id='dstop-section-comments'>
                <div className='dstop-container'>
                    <h2>Oque estão dizendo</h2>
                    <div className='dstop-card-container'>
                        <CommentCard></CommentCard>
                        <CommentCard></CommentCard>
                        <CommentCard></CommentCard>
                        <CommentCard></CommentCard>
                        <CommentCard></CommentCard>
                    </div>
                </div>
            </section>
        </main>
        <PageFooter></PageFooter>
    </>
    );
}