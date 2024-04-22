import './about.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function About()
{
    
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
        
        setFirstKeyValueOptions(combinedData);
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
    
      return (
        <div>
      <h1>First Key-Value Pair Dropdown</h1>
      <select>
        {firstKeyValueOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.key}: {option.value}
          </option>
        ))}
      </select>
    </div>
      );
    }
export default About