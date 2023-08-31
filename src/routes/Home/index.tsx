import CardCard from '../../components/CarCard';
import CommentCard from '../../components/CommentsCard';
import Header from '../../components/Header';
import PageFooter from '../../components/PageFooter';
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
            <section id='dstop-section-comments'>
                <h2>Oque estão dizendo</h2>
                <div className='dstop-card-container'>
                    <CommentCard></CommentCard>
                    <CommentCard></CommentCard>
                    <CommentCard></CommentCard>
                    <CommentCard></CommentCard>
                    <CommentCard></CommentCard>
                </div>
            </section>
        </main>
        <PageFooter></PageFooter>
    </>
    );
}