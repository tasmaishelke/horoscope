import { useState } from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import './registration.css'

function Registration()
{
    const [firstName, setFirstName] = useState('')
    const [birthPlace, setBirthPlace] = useState('')
    const [gender, setGender] = useState('')
    const [birthday, setBirthday] = useState('')
    const [location, setLocation] = useState('')

    
    const details = (e) =>
    {
        e.preventDefault()
        console.log(firstName)
        console.log(birthPlace)
        console.log(gender)
        console.log(birthday)
        console.log(location)



    }


    return(
        <>
            <div className="class-registration-form">
                <form onSubmit={details}>
                    <h1>Kundli / Birth Chart</h1>
                    <h3>Enter Birth Details</h3>
                    
                   
                    
                    <div className="input">
                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="firstName" placeholder="First Name" name="firstName" />                        
                        <FaUser className="icon" />
                    </div>

                    <div className="input">                        
                        <select value={gender} onChange={(e) => setGender(e.target.value)} id='gender' name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>               
                    </div>

                    <div className='input-radio'>
                        <select value={location} onChange={(e) => setLocation(e.target.value)} id='location' name="location">
                            <option value="indian">Indian</option>
                            <option value="nonIndian">Non-Indian</option>
                        </select>
                    </div>
                 

                    <div className="input">    
                    <p>The time is in 24 HR Format</p> 
                    <input value={birthday} onChange={(e) => setBirthday(e.target.value)} type="datetime-local" id="birthdaytime" required name="birthdaytime"></input>
                    </div>

                    <div className="input">
                        <input value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)} type="search" id="birthPlace" placeholder="Birth Place" name="birthPlace" />                        
                        <FaUser className="icon" />
                    </div>

                    <button className="class-kundli-button" type="submit" > Get-Kundli </button>

                    
                </form>
            </div>                
        </>
    )
}

export default Registration