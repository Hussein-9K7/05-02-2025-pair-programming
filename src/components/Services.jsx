import { useState } from 'react';
import { services } from "../data";
import Title from './Title';

function Services() {
  // eslint-disable-next-line no-unused-vars
  const [servicesData, setServicesData] = useState(services);

  return (
    <div>
      <Title />
      <h2>Our Services</h2>
      <ul>
        {servicesData.map((service, index) => ( 
          <li key={index}>
            {service.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
