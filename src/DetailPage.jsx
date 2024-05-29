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
        console.log(data);
       
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
      <p>{property.address}</p>
      <div>
        {property.images.map((image, index) => (
          <img key={index} src={image} alt={`${property.name} ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
