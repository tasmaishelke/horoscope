import './home.css'
import Registration from './Registration';
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
            <Registration />      
        </>         
    );
}

export default Home