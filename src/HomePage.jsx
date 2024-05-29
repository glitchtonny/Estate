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
      <div className='main-banner'>
          <p>GET A COMFY AND SUITABLE<br/> PLACE WITH US</p>
      </div>
      
      <h1>Properties</h1>

      <div >
        <h2>Rentals</h2>
          <div className='rents' >
           {properties.house_rentals.map(rental => (
                <div key={rental.id}>
                  <Link to={`/rental/${rental.id}`}>
                    <h3>{rental.name}</h3>
                  </Link>

                  <img src={rental.image} alt='rents' width="100%" height="60%"/>
                </div>
              ))
            
            }
           </div>
        
      </div>

      <div>
        <h2>House sales</h2>
        <div className='rents'>
        {properties.house_sales.map(sale => (
            <div key={sale.id}>
              <Link to={`/sale/${sale.id}`}>
                <h3>{sale.name}</h3>
              </Link>

              <img src={sale.image} alt='sales'   width="100%" height="60%" />
            </div>
          ))
        
      }
        </div>
          
          
      </div>


      <div>
        <h2>Apartments</h2>
        <div className='rents' >
        {properties.apartments.map(apartment => (
            <div key={apartment.id}>
              <Link to={`/apartment/${apartment.id}`}>
                <h3>{apartment.name}</h3>
                <img src={apartment.image} alt='apartments'  width="100%" height="60%"/>

              </Link>

            </div>
          ))
        
      }
        </div>
      
          
      </div>
     
    </div>
  );
};

export default HomePage;
