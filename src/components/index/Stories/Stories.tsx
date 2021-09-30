import * as S from '@styles/index/Stories/Stories';
import StoryCard from '@components/index/Stories/StoryCard';

const Stories = () => {
  return (
    <S.StoriesDiv>
      <S.StoriesTitleContainer>
        <S.StoriesTitleDiv>
          <S.StoriesTitle>HISTORIAS</S.StoriesTitle>
          <S.StoriesSubtitle>
            Contagiate de la magia de adoptar
          </S.StoriesSubtitle>
        </S.StoriesTitleDiv>
      </S.StoriesTitleContainer>
      <S.StoriesCardsContainer>{storyCards()}</S.StoriesCardsContainer>
    </S.StoriesDiv>
  );
};

const storyCardsInfo = [
  {
    id: 'storyCard_1',
    imageSrc: '/story_cards/story1.webp',
    title: 'CUMBRE SOBRE EL FUTURO DE NUESTRO PLANETA',
    description: '06 de octubre de 2025',
  },
  {
    id: 'storyCard_2',
    imageSrc: '/story_cards/story2.webp',
    title: 'PATROCINANDO LA VIDA SILVESTRE EN EL SIGLO XXI',
    description: '06 de octubre de 2025',
  },
  {
    id: 'storyCard_3',
    imageSrc: '/story_cards/story3.webp',
    title: 'ANUNCIO: NUEVO JEFE DE OPERACIONES',
    description: '06 de octubre de 2025',
  },
  {
    id: 'storyCard_4',
    imageSrc: '/story_cards/story4.webp',
    title: 'CUMBRE SOBRE EL FUTURO DE NUESTRO PLANETA',
    description: '06 de octubre de 2025',
  },
];

const storyCards = () => {
  let count = 0;

  return storyCardsInfo.map((storyCard) => {
    count++;
    const firstRow = count < 3;
    return (
      <StoryCard
        key={storyCard.id}
        imageSrc={storyCard.imageSrc}
        title={storyCard.title}
        description={storyCard.description}
        firstRow={firstRow}
      />
    );
  });
};

export default Stories;
