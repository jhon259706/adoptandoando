import * as S from '@styles/index/Stories/StoryCard';
import Image from 'next/image';

interface ICardStories {
  key: string;
  imageSrc: string;
  title: string;
  description: string;
  firstRow: boolean;
}

function StoriesCard(props: ICardStories) {
  const { imageSrc, title, description, firstRow } = props;
  return (
    <S.StoryCardDiv firstRow={firstRow}>
      <S.StoryCardImageDiv>
        <Image
          src={imageSrc}
          alt="Story card image"
          width={320}
          height={240}
          layout={'responsive'}
        />
      </S.StoryCardImageDiv>
      <S.StoryCardText>
        <div>
          <S.StoryCardTitle>{title}</S.StoryCardTitle>
          <S.StoryCardDescription>{description}</S.StoryCardDescription>
        </div>
      </S.StoryCardText>
    </S.StoryCardDiv>
  );
}

export default StoriesCard;
