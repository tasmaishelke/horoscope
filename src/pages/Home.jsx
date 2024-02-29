import './home.css'
import Login from '../pages/Login'

function Home()
{
    return(
        <>
            <div className="class-title-container">
                <div className='class-title'>
                    <h1>
                        Welcome to Horoscope
                    </h1>
                    <p>
                        Where Universe decides your fate
                    </p>
                </div>
            </div> 
            <Login />      
        </>         
    );
}

export default Home