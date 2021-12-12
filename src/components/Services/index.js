import React from 'react';
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from './ServerElements';
import Icon1 from '../../images/svg3.svg';
import Icon2 from '../../images/svg4.svg';
import Icon3 from '../../images/svg2.svg';

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesP>
              We help reduce your fees and increase your overall revenue
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesP>
              We help reduce your fees and increase your overall revenue
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesP>
              We help reduce your fees and increase your overall revenue
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
