import React from 'react'
import { useForm } from "react-hook-form"
import * as tripService from '../../../services/trip-services';

import "./TripForm.css";

function TripForm() {
  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({ mode: 'onTouched' });

const isURL = (value) => {
  try {
    new URL(value);
    return true;
  } catch (error) {
    return false;
  }
};
  const handleCreateTripSubmit = (data) => {
    console.log(data);
    tripService.createTrip(data)
      .then(trip => console.log('todo bien', trip))
      .catch(error => {
        if (error.response?.data?.errors) {
          const { errors } = error.response.data;
          console.log(errors);
          Object.keys(error.response.data.errors)
            .forEach((error) => {
              setError(error, {  message: errors[error].message })
            })
        }
      })
  }
  // en el input de cities quiero un imput select con listado de ciudades (google?)
  return (
    
    <form onSubmit={handleSubmit(handleCreateTripSubmit)}>
      <div className="input-group mb-1">
        <span className="input-group-text"><i className='fa fa-tag fa-fw'></i></span>
        <input type="text" className={`form-control ${errors.city ? 'is-invalid' : ''}`} placeholder="Ciudad de destino" 
          {...register('city', {
            required: 'La ciudad de destino es requerida', 
            minLength: { value: 4, message: 'caracteres minimos 4' },
            maxLength: { value: 50, message: 'Has sobrepasado el maximo de caracteres = 50' }
          })} />
        {errors.city && (<div className="invalid-feedback">{errors.city.message}</div>)}
      </div>
      
      <div className="input-group mb-1">
        <span className="input-group-text"><i className='fa fa-picture-o fa-fw'></i></span>
        <input type="text" className={`form-control ${errors.coverPhoto ? 'is-invalid' : ''}`} placeholder="Añade una imagen a tu viaje "
          {...register('coverPhoto', {
            required: 'La imagen es  requerida',
            validate: (value) => isURL(value) || 'URL no valida'
          })} />
        {errors.coverPhoto && (<div className="invalid-feedback">{errors.coverPhoto.message}</div>)}
      </div>

      <div className="d-grid mb-4 ">
        <button className="btn btn-primary btn-outline-primary" type='submit' disabled={!isValid}>Crear viaje</button>
      </div>

    </form>
  )
}

export default TripForm