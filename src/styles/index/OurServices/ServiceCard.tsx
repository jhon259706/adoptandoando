import { device } from '@styles/utils/devices';
import styled from 'styled-components';

interface IServiceCard {
  backgroundColor: string;
}

export const ServiceCardDiv = styled.div<IServiceCard>`
  display: flex;
  flex-direction: column;
  .card__description {
    background-color: ${({ backgroundColor }) => backgroundColor};
    min-height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${device.tabletS} {
      background-color: white;
    }
  }
`;
