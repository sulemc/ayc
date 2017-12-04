import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.email}</strong>
      <p>{props.zip} </p>
    </div>
  );
}

export default Smurf;