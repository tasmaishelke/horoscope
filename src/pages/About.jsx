import './about.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function About()
{
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
  }, [dataOption]); // Dependency array includes dataOption to refetch when it changes

  return (
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
              <select>
                  {dropdownOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                          {option.key}: {option.value}
                      </option>
                  ))}
              </select>
          )}
      </div>
  );
}

export default About