import React from 'react';
import Icon1 from '../../images/Image4.jpg';
import Icon2 from '../../images/Image5.svg';
import Icon3 from '../../images/Image6.png';
import { ServicesContainer, 
         ServicesH1,
         ServicesCard,
         ServicesWrapper,
         ServicesH2,
         ServicesIcon,
         ServicesP } from './ServiceElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
        <ServicesH1> Our Services </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                        <ServicesH2> Standard Insurances </ServicesH2>
                        <ServicesP> We Help to reduce your life risk by ensuring you with best medical insurance for your family. We also provide all type of vehicle insurance at low cost </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                        <ServicesH2> Accounting Work </ServicesH2>
                        <ServicesP> We help to manage any accounting related work like Income Tax Return and G.S.T Registration with minimum Charges.  </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                        <ServicesH2> R.T.O. Services </ServicesH2>
                        <ServicesP> We consults any R.T.O. related work as Vehicle Registrations or providing details about Driving License. </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
