import styled from 'styled-components';
import { device } from '../utils/devices';

export const BannerDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tabletS} {
    flex-direction: row-reverse;
    padding: 40px;
  }
`;

export const BannerTitleContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 10px 0 0 10px;

  @media ${device.tabletS} {
    justify-content: center;
  }
`;

export const BannerTitle = styled.div`
  margin-left: 10px;
  margin-top: 15px;

  @media ${device.tabletS} {
    margin-left: 0px;
    margin-top: 0px;
  }
`;

export const BannerHeader = styled.header`
  color: #1a1a58fc;
  font-weight: bold;
  font-size: 4rem;
  width: 300px;

  @media ${device.tabletS} {
    font-size: 6rem;
  }
`;

export const BannerSlogan = styled.p`
  font-size: 2.5rem;
  color: black;
`;

export const BannerImg = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
