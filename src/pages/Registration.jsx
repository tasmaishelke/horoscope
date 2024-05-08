import React, { useState, useEffect } from 'react';
import './registration.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Registration()
{
  
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        birthday: '',
        location: '',
      });
   
    const onChangeHandler = (event) =>
    {
        setFormData(() =>
        ({...formData, [event.target.name] : event.target.value}))
    }
    
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/about', { state: { ...formData } });
    };


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
               <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input value={formData.name} onChange={onChangeHandler} type="text" id="name" name="name" required placeholder="Your full name" /> 
                    </div>

        
                    <div className="form-group">
                        <label htmlFor="birthday">Birthday:</label>
                        <input value={formData.birthday} onChange={onChangeHandler} type="datetime-local" id="birthday" name="birthday" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender">Gender:</label>
                        <select value={formData.gender} onChange={onChangeHandler} id="gender" name="gender">
                            <option value="other">Other</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
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
                                    India
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="data2"
                                        checked={dataOption === 'data2'}
                                        onChange={() => setDataOption('data2')}
                                    />
                                    World
                                </label>
                            </div>
                            {loading && <div>Loading...</div>}
                            {error && <div>Error: {error}</div>}
                            {!loading && !error && (
                                <select value={formData.location} onChange={onChangeHandler} id="location" name="location">

                                    {dropdownOptions.map((option, index) => (
                                        <option key={index} value={option.value}>
                                            {option.value}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>

                    <button className="button" type="submit">Get-Kundli</button>
                    
                </form>
            </div>

        </div>

                    
                        
        </>
    )
}

export default Registration