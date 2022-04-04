import CustomLink from '../CustomLink/CustomLink';
import useReviews from '../../hooks/useReviews';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <section className='grid grid-cols-1 md:grid-cols-2 mx-10 my-24'>
                <div className='md:mx-8 md:px-8 md:py-8'>
                    <h1 className='text-5xl font-bold '>Targeted to your <span className='text-orange-400'>Wrist !!! Favulous</span> Smart Watches</h1>
                    <p className='my-5'>Tch for real life.Your time is now make a statement with every second.Stay connected all day with smart notification.</p>
                    <button className='rounded-xl px-8 py-3 my-6 shadow bg-orange-100 hover:bg-orange-400 font-bold text-lg'>Live Demo</button>
                </div>
                <div className='md:mx-8 md:px-8'>
                    <img className='object-cover' src="https://miro.medium.com/max/1400/1*WsUcQH6juDue0Wdx81l27w.jpeg" alt="" />
                </div>
            </section>
            <section>
                <h2 className='text-3xl font-bold text-center my-12 md:pt-20'>Customer <span className='text-orange-400'>Reviews....</span></h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-10 mx-4 md:mx-16 px-5 py-5'>
                    {
                        reviews.slice(0, 3).map(review => <Reviews key={review.id}
                            review={review}>
                        </Reviews>)
                    }
                </div>
                <div className='flex justify-center'>
                    <CustomLink to="/review"><button className="rounded-xl px-8 py-3 mb-6 shadow-lg bg-orange-400 font-bold  text-lg ">See All Reviews</button></CustomLink>
                </div>
            </section>
        </div>
    );
};

export default Home;