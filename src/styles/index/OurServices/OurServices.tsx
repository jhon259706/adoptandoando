import { device } from '@styles/utils/devices';
import styled from 'styled-components';

export const OurServicesSection = styled.section`
  text-align: center;

  @media ${device.tabletS} {
    justify-content: center;
    padding: 40px;
  }

  .ourservices {
    &__header {
      color: ${(props) => props.theme.colors.blue};
      font-weight: bold;
      font-size: 3rem;

      @media ${device.tabletS} {
        font-size: 4rem;
      }
    }

    &__cards {
      display: flex;
      margin-top: 20px;
      flex-direction: column;

      @media ${device.tabletS} {
        flex-direction: row;
        gap: 10px;
        align-items: stretch;
        font-size: 4rem;
      }
    }
  }
`;
