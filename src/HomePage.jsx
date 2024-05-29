import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [properties, setProperties] = useState(null);

  console.log(properties);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:3000/properties');
        setProperties(response.data);
        console.log(response.data)
      } catch (err) {
        setError('Error fetching properties');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Properties</h1>
      <div>
        <h2>Rentals</h2>
      
          {properties.house_rentals.map(rental => (
            <div key={rental.id}>
              <Link to={`/rental/${rental.id}`}>
                <h3>{rental.name}</h3>
              </Link>

              <img src={rental.image}/>
            </div>
          ))
        
      }
      </div>

      {/* <div>
        <h2>sales</h2>
      
          {properties?.map(sales => (
            <div key={sales.id}>
              <Link to={`/sales/${sales.id}`}>
                <h3>{sales.name}</h3>
              </Link>
              <p>{sales.image}</p>
            </div>
          ))
        
      }
      </div>


      <div>
        <h2>Apartments</h2>
       
          {properties?.map(apartment => (
            <div key={apartment.id}>
              <Link to={`/apartment/${apartment.id}`}>
                <h3>{apartment.name}</h3>
              </Link>
              <p>{apartment.image}</p>
            </div>
          ))
        }
      </div> */}
     
    </div>
  );
};

export default HomePage;
