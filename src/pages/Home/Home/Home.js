import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../../Shared/Services/Services';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>

        </div>
    );
};

export default Home;