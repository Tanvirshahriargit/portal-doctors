import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51JvqVzKq8hmL0OgFca5eGQqsNpOaTcqzLwq6hyf70zYE7vTmoOmLUSooCu85ljpofdu0NwIETs4rCB6abd5nlzyZ00PgBNkcPM');

const Payment = () => {
    const { appointmentId } = useParams()
    const [appointment, setAppointment] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h2>Please Pay For: {appointment.patientName} for {appointment.serviceName}</h2>
            <p>Appointments price: ${appointment.price}</p>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckOutForm
                    appointment = {appointment}           
                ></CheckOutForm>
            </Elements>}
        </div>
    );
};

export default Payment;