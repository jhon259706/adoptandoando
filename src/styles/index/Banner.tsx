import styled from 'styled-components';
import { device } from '../utils/devices';

export const BannerDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.mobileL} {
    flex-direction: row-reverse;
  }
`;

export const BannerTitle = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const BannerImg = styled.div`
  flex: 1;
`;
