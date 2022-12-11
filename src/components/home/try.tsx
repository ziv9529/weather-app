import React from 'react'
import { useSelector } from 'react-redux';
import { selectCurrentLocation } from '../../store';

const Tryry = () => {
    const currentLocation = useSelector(selectCurrentLocation);

  return (
    <div>Tryry
        <h5>{JSON.stringify(currentLocation)}</h5>
    </div>
  )
}

export default Tryry