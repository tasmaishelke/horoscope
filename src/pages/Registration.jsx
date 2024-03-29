import { useState } from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import './registration.css'

function Registration()
{
    const [fullName, setFullName] = useState('')
    const [birthPlace, setBirthPlace] = useState('')
    const [birthday, setBirthday] = useState('')
    const [location, setLocation] = useState('')

    
    const details = (e) =>
    {
        e.preventDefault()
        console.log(fullName)
        console.log(birthPlace)
        console.log(birthday)
        console.log(location)



    }


    return(
        <>
        <div className='class-parent-container'>

            <div className="form-container">
            <h1>Kundli / Birth Chart</h1>
            <h3>Enter Birth Details</h3>
                <form onSubmit={details}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" id="name" name="name" required placeholder="Your full name" /> 
                    </div>

                    <div className="form-group">
                        <label htmlFor="birthday">Birthday:</label>
                        <input value={birthday} onChange={(e) => setBirthday(e.target.value)} type="datetime-local" id="birthday" name="birthday" required />
                    </div>

                    <div className="form-group gender-container">
                        <div>
                            <input type="radio" id="male" name="gender" value="male" required/>
                                <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input type="radio" id="female" name="gender" value="female" required/>
                                <label htmlFor="female">Female</label>
                        </div>
                        <div>
                            <input type="radio" id="other" name="gender" value="other" required/>
                                <label htmlFor="other">Other</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="birthplace">Birthplace:</label>
                        <input value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)} type="text" id="birthplace" name="birthplace" required placeholder="City, Country" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="nationality">Nationality:</label>
                        <select value={location} onChange={(e) => setLocation(e.target.value)} id="nationality" name="nationality">
                            <option value="indian">Indian</option>
                            <option value="non-indian">Non-Indian</option>
                        </select>
                    </div>

                    <input type="submit" value="Get-Kundli" />
                </form>
            </div>

        </div>

                    
                        
        </>
    )
}

export default Registration