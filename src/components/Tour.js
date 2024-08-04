import React, { useState } from 'react';

const Tour = ({ tour, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div className="tour" style={{ margin: '20px 0' }}>
      <h3>{tour.name}</h3>
      <img src={tour.image} alt={tour.name} style={{ width: '200px', height: 'auto' }} />
      <p>
        {isExpanded ? tour.info : `${tour.info.substring(0, 200)}...`}
      </p>
      <button onClick={toggleDescription}>
        {isExpanded ? "See less" : "See more"}
      </button>
      <button onClick={() => onDelete(tour.id)} style={{ marginLeft:
        '20px', color: 'white', backgroundColor: 'red' }}>
        Delete
      </button>
      <p>Price: ${tour.price}</p>
    </div>
  );
}

export default Tour;
