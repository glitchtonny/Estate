import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { type, id } = useParams();
  const [property, setProperty] = useState(null);
  const [error, setError] = useState('');
console.log(type)

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch('http://localhost:3000/properties');
        const data = await response.json();
        // console.log(data);
       
        const propertyId = parseInt(id);
        //console.log(type);
        let foundProperty;
        switch (type) {
          case 'rental':
            foundProperty = data.house_rentals.find(item => item.id === propertyId);
            console.log(propertyId, foundProperty);
            break;
          case 'apartment':
            foundProperty = data.apartments.find(item => item.id === propertyId);
            break;
          case 'sales':
            foundProperty = data.house_sales.find(item => item.id === propertyId);
            break;
          default:
            setError('Invalid property type');
            return;
        }
        //console.log(propertyId, foundProperty);
        if (foundProperty) {
          setProperty(foundProperty);}
        else {
          setError('Property not found');
          return;
        }
      } catch (err) {
        setError('Failed to fetch property');
      }
    };

    fetchProperty();
  }, [type, id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!property) {
    return <p>Loading...</p>;
  }

  return (
  <div>
        <h1>{property.name}</h1>
        {/* <div>
          {property.images.map((image1, index) => (
            <img key={index} src={image1} alt={`${property.name} ${index + 1}`} />
          ))}
        </div> */}
      <div>
        <img src="https://s42814.pcdn.co/wp-content/uploads/2012/08/img-01-kitchen-scaled.jpg.optimal.jpg" alt={property.name} width="30%" height="40%"/>
        <img src="https://aquantam.co.ke/wp-content/uploads/2023/10/DSCN8030-scaled.jpg" alt={property.name} width="40%" height="40%"/>
        <img src="https://i.pinimg.com/736x/c6/77/e3/c677e3792f5ea3cabebb865052a07a0b.jpg" alt={property.name} width="30%" height="30%"/>
        <img src="https://www.nawy.com/blog/wp-content/uploads/2022/07/interior-design-768x432.jpg" alt={property.name} width="45%" height="35%"/>
        <img src="https://coralpi.com/wp-content/uploads/2024/04/HV-11.jpg" alt={property.name} width="40%" height="40%"/>

      </div>

      <div className='details'>
          <h2>HOUSE DETAILS</h2>
            
            <p>{property.name}</p>
            <p>{property.image1}</p>
            <p>{property.price}</p>
            <p className='about'>{property.description}</p>

            <h2>Amenities</h2>
          <ol>
            <li>Master Ensuite</li>
            <li>SWimming pool</li>
            <li>Parking</li>
            <li>pets Allowed</li>

          </ol>
      </div>
         
    
    </div>
  );
};

export default DetailPage;
