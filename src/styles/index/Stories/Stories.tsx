import styled from 'styled-components';
import { color } from '@styles/utils/colors';

export const StoriesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 40px;
`;

export const StoriesTitleContainer = styled.div`
  width: 100vw;
  padding: 10px 0 50px 0;
`;

export const StoriesTitle = styled.header`
  color: ${color.header};
  font-weight: bold;
  font-size: 4rem;
`;

export const StoriesSubtitle = styled.p`
  font-size: 2.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const StoriesTitleDiv = styled.div`
  text-align: center;
`;

export const StoriesCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
`;
