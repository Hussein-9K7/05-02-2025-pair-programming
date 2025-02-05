import { useState } from 'react';
import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  const [toursData, setToursData] = useState(tours);

  const handleRemoveTour = (id) => {
    setToursData(toursData.filter(tour => tour.id !== id));
  };

  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      
      <div className="section-center featured-center">
        {toursData.map((tour) => (
          <div key={tour.id}>
            <Tour {...tour} />
            <button onClick={() => handleRemoveTour(tour.id)}>Remove</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tours;
