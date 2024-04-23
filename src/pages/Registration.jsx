import React, { useState, useEffect } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import './registration.css'
import axios from 'axios';

function Registration()
{
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')

    // const [birthPlace, setBirthPlace] = useState('')
    const [gender, setGender] = useState('')
    const [birthday, setBirthday] = useState('')
    const [location, setLocation] = useState('')    
    const [nationality, setNationality] = useState('')    
   

    const details = (e) =>
    {
        e.preventDefault()
        console.log(fullName)
        console.log(email)
        console.log(gender)
        console.log(birthday)
        console.log(location)
        console.log(nationality)

       

       
    }

    const [dataOption, setDataOption] = useState('data1'); // State to track selected API data
    const [dropdownOptions, setDropdownOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Define the API URLs
    const apiUrls = {
        data1: 'https://horoscope-4b2b3-default-rtdb.asia-southeast1.firebasedatabase.app/IndiaLocations.json',
      data2: 'https://horoscope-4b2b3-default-rtdb.asia-southeast1.firebasedatabase.app/WorldLocations.json'
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const url = apiUrls[dataOption]; // Select URL based on dataOption
                const response = await axios.get(url);
                const firstKeyValuePairs = response.data.map(item => {
                    const [firstKey] = Object.keys(item);
                    return { key: firstKey, value: item[firstKey] };
                });
                setDropdownOptions(firstKeyValuePairs);
            } catch (error) {
                setError('Failed to fetch data');
            }
            setLoading(false);
        };

        fetchData();
    }, [dataOption]);


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
                        <label htmlFor="email">Email:</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required placeholder="name@gmail.com" /> 
                    </div>

                    <div className="form-group">
                        <label htmlFor="birthday">Birthday:</label>
                        <input value={birthday} onChange={(e) => setBirthday(e.target.value)} type="datetime-local" id="birthday" name="birthday" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender">Gender:</label>
                        <select value={gender} onChange={(e) => setGender(e.target.value)} id="gender" name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                

                    <div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        value="data1"
                                        checked={dataOption === 'data1'}
                                        onChange={() => setDataOption('data1')}
                                    />
                                    Indian
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="data2"
                                        checked={dataOption === 'data2'}
                                        onChange={() => setDataOption('data2')}
                                    />
                                    Non-Indian
                                </label>
                            </div>
                            {loading && <div>Loading...</div>}
                            {error && <div>Error: {error}</div>}
                            {!loading && !error && (
                                <select value={location} onChange={(e) => setLocation(e.target.value)} id="location" name="location">

                                    {dropdownOptions.map((option, index) => (
                                        <option key={index} value={option.value}>
                                            {option.key}: {option.value}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>

                    <input type="submit" value="Get-Kundli" />
                </form>
            </div>

        </div>

                    
                        
        </>
    )
}

export default Registration