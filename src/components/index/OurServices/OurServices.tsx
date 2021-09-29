import * as S from '@styles/index/OurServices/OurServices';
import ServiceCard from './ServiceCard';

const OurServices = () => {
  return (
    <S.OurServicesSection>
      <header className="ourservices__header">NUESTROS SERVICIOS</header>
      <h3>¿Qué hacemos?</h3>
      <div className="ourservices__cards">{services}</div>
    </S.OurServicesSection>
  );
};

const ourServices = [
  {
    id: 'ourservice_1',
    imageSrc: '/assets/images/dog_1.jpg',
    title: 'ADOPCIÓN',
    description: 'Brindale un hogar a un animal',
    backgroundColor: 'black',
  },
  {
    id: 'ourservice_2',
    imageSrc: '/assets/images/cat_1.jpg',
    title: 'RESCATE Y BUSQUEDA',
    description: 'Ayuda a encontrar una mascota perdida',
    backgroundColor: '#193669',
  },
  {
    id: 'ourservice_3',
    imageSrc: '/assets/images/dog_2.jpg',
    title: 'RELACIONADOS',
    description: 'Encuentra servicios y productos utiles para tu mascota',
    backgroundColor: '#2e5eaf',
  },
];

const services = ourServices.map((service) => (
  <ServiceCard key={service.id} {...service} />
));

export default OurServices;
