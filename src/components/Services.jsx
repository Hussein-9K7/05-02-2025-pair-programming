import { useState } from 'react';
import { services } from "../data";
import Title from './Title';

function Services() {
  const [servicesData, setServicesData] = useState(services);

  const handleRemoveService = (id) => {
    setServicesData(servicesData.filter(service => service.id !== id));
  };

  return (
    <div>
      <Title />
      <h2>Our Services</h2>
      <ul>
        {servicesData.map((service) => (
          <li key={service.id}>
            {service.name}
            <button onClick={() => handleRemoveService(service.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
