
import Lottie from 'lottie-react';
import animationData from '../assets/spider-error.json'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='w-full'>
            <Lottie
                animationData={animationData}
                loop
                autoplay
            />
            <div className='text-center py-10'>
                <Link to='/'><h2 className='text-3xl font-semibold hover:text-blue-700'>Back to Home</h2></Link>
            </div>
        </div>
    );
};

export default ErrorPage;