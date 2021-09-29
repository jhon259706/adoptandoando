import { device } from '@styles/utils/devices';
import styled from 'styled-components';

interface IServiceCard {
  backgroundColor: string;
}

export const ServiceCardDiv = styled.div<IServiceCard>`
  display: flex;
  flex-direction: column;

  .card__description {
    background-color: white;
    min-height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 15px;
    height: 100px;

    @media ${device.tabletS} {
      background-color: ${({ backgroundColor }) => backgroundColor};
      color: white;
    }
  }
`;
