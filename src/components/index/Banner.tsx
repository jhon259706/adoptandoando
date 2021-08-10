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
      <S.BannerTitle>
        <p>ÚNETE A CHEMPOPET Creemos en un mundo mejor</p>
      </S.BannerTitle>
    </S.BannerDiv>
  );
};

export default Banner;
