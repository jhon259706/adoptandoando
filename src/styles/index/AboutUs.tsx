import styled from 'styled-components';
import { color } from '@styles/utils/colors';
import { device } from '../utils/devices';

export const AboutUsDiv = styled.div`
  flex-direction: column;
  padding-top: 40px;

  @media ${device.tabletS} {
    flex-direction: row-reverse;
    padding: 40px;
  }
`;

export const AboutUsImg = styled.div`
  align-items: center;
  position: relative;
`;

export const AboutUsTextContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0 0 10px;

  @media ${device.tabletS} {
    justify-content: center;
  }
`;

export const AboutUsTitle = styled.header`
  color: ${color.header};
  font-weight: bold;
  font-size: 4rem;
  width: 300px;

  @media ${device.tabletS} {
    display: none;
  }
`;

export const AboutUsTitleImage = styled.header`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  font-weight: bold;
  color: white;

  @media ${device.tabletS} {
    display: block;
  }
`;

export const AboutUsSubtitle = styled.p`
  font-size: 2.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const AboutUsContent = styled.p`
  font-size: 2rem;
  justify-content: left;
  line-height: 3.5rem;
`;

export const AboutUsText = styled.div`
  margin-left: 10px;
  margin-top: 15px;

  @media ${device.tabletS} {
    margin: 10px 15%;
    text-align: center;
  }
`;

export const ContactButton = styled.button`
  margin-top: 15px;
  margin-left: 20px;
  background-color: #193669;
  color: white;
  width: 100px;
  height: 40px;

  @media ${device.tabletS} {
    margin-left: 50%;
    transform: translate(-50%);
  }
`;
