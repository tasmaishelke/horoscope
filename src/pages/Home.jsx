import './home.css'
import Login from '../pages/Login'

function Home()
{
    return(
        <>
            <div className="class-home-container">
                <div className='class-home-title'>
                    <h1>
                        Welcome to Horoscope
                    </h1>
                    <p>
                        Where universe decides your fate
                    </p>                                    

                </div>
                
            </div> 
            <Login />      
        </>         
    );
}

export default Home