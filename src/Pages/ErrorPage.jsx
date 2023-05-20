
import Lottie from 'lottie-react';
import animationData from '../assets/spider-error.json'
const ErrorPage = () => {
    return (
        <div className='w-full'>
            <Lottie
                animationData={animationData}
                loop
                autoplay
            />
        </div>
    );
};

export default ErrorPage;