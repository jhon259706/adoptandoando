import * as S from '@styles/index/Banner';
import Image from 'next/image';

const Banner = () => {
  return (
    <S.BannerDiv>
      <S.BannerImg>
        <Image
          src={'/banner.jpg'}
          alt="Banner image"
          width={780}
          height={520}
        />
      </S.BannerImg>
      <S.BannerTitleContainer>
        <S.BannerTitle>
          <S.BannerHeader>ÚNETE A CHEMPOPET</S.BannerHeader>
          <S.BannerSlogan>Creemos en un mundo mejor</S.BannerSlogan>
        </S.BannerTitle>
      </S.BannerTitleContainer>
    </S.BannerDiv>
  );
};

export default Banner;
