import * as S from '@styles/index/AboutUs';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <S.AboutUsDiv>
      <S.AboutUsImg>
        <Image
          src={'/assets/images/banner.jpg'}
          alt="About Us image"
          width={780}
          height={520}
          layout={'responsive'}
        />
        <S.AboutUsTitleImage>SOBRE CHEMPOPET</S.AboutUsTitleImage>
      </S.AboutUsImg>
      <S.AboutUsTextContainer>
        <S.AboutUsText>
          <S.AboutUsTitle>SOBRE CHEMPOPET</S.AboutUsTitle>
          <S.AboutUsSubtitle>Establecido(a) en el año 2000</S.AboutUsSubtitle>
          <S.AboutUsContent>
            Como un(a) Organización de rescate de mascotas líder, nuestros
            proyectos y campañas son reconocidos en todo el mundo. Trabajamos
            para unir a personas de todas las edades y orígenes que comparten la
            creencia de un mundo en el que los animales están libres de tratos
            crueles e inhumanos. ChempoPet está dirigido por miembros para sus
            miembros, ofreciendo una voz unida para todos aquellos que quieran
            formar parte.
          </S.AboutUsContent>
        </S.AboutUsText>
      </S.AboutUsTextContainer>
      <Link href="/" passHref>
        <S.ContactButton>Contacto</S.ContactButton>
      </Link>
    </S.AboutUsDiv>
  );
};

export default AboutUs;
