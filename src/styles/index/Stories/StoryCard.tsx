import styled from 'styled-components';
import { color } from '@styles/utils/colors';
import { device } from '../../utils/devices';

interface IPropsStoryCardDiv {
  firstRow: boolean;
}

export const StoryCardDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: ${(props: IPropsStoryCardDiv) =>
    props.firstRow ? 'row' : 'row-reverse'};

  @media ${device.tabletS} {
    width: 50%;
    flex-wrap: nowrap;
  }
`;

export const StoryCardText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 0 30px 50px 30px;

  @media ${device.tabletS} {
    width: 50%;
  }
`;

export const StoryCardTitle = styled.h2`
  font-size: 3rem;
  font-weight: 100;
  color: ${color.header};
  padding: 40px 0 0 0;
`;

export const StoryCardDescription = styled.p`
  padding: 10px 0 0 0;
  font-size: 2rem;
`;

export const StoryCardImageDiv = styled.div`
  width: 100%;

  @media ${device.tabletS} {
    width: 50%;
  }
`;
