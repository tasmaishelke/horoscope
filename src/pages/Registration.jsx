import React, { useState, useEffect } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import './registration.css'
import axios from 'axios';

function Registration()
{
    const [fullName, setFullName] = useState('')
    // const [birthPlace, setBirthPlace] = useState('')
    const [gender, setGender] = useState('')
    const [birthday, setBirthday] = useState('')
    const [location, setLocation] = useState('')    
    const details = (e) =>
    {
        e.preventDefault()
        console.log(location)
    }

    const [firstKeyValueOptions, setFirstKeyValueOptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const urlOne = 'https://horoscope-4b2b3-default-rtdb.asia-southeast1.firebasedatabase.app/IndiaLocations.json';
        const urlTwo = 'https://horoscope-4b2b3-default-rtdb.asia-southeast1.firebasedatabase.app/WorldLocations.json';
    
        Promise.all([axios.get(urlOne), axios.get(urlTwo)])
      .then(results => {
        const [dataOne, dataTwo] = results.map(response => response.data);

        // Extracting the first key-value pair from each item
        const extractFirstKeyValue = data => data.map(item => {
          const [firstKey] = Object.keys(item);
          return { key: firstKey, value: item[firstKey] };
        });

        const combinedData = [
          ...extractFirstKeyValue(dataOne),
          ...extractFirstKeyValue(dataTwo)
        ];

        const sortedOptions = combinedData.sort((a, b) => a.key.localeCompare(b.key));
        
        setFirstKeyValueOptions(sortedOptions);
        
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!firstKeyValueOptions.length) return <div>No options available</div>;


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

                    <div className="form-group">
                        <label htmlFor="gender">Gender:</label>
                        <select value={gender} onChange={(e) => setGender(e.target.value)} id="gender" name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* <div className="form-group">
                        <label htmlFor="birthplace">Birthplace:</label>
                        <input value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)} type="text" id="birthplace" name="birthplace" required placeholder="City, Country" />
                    </div> */}

                    <div className="form-group">
                        <label htmlFor="location">Location:</label>
                        <select value={location} onChange={(e) => setLocation(e.target.value)} id="location" name="location">
                            {firstKeyValueOptions.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.value}
                            </option>
                            ))}
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