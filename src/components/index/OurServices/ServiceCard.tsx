import * as S from '@styles/index/OurServices/ServiceCard';
import Image from 'next/image';

interface ICardProps {
  imageSrc: string;
  title: string;
  description: string;
  backgroundColor: string;
}

const ServiceCard = (props: ICardProps) => {
  const { imageSrc, title, description, backgroundColor } = props;

  return (
    <S.ServiceCardDiv backgroundColor={backgroundColor}>
      <Image src={imageSrc} alt="Service Card Image" width={500} height={460} />
      <div className="card__description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </S.ServiceCardDiv>
  );
};

export default ServiceCard;
