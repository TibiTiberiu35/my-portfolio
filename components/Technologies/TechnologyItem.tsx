import Image from "next/image";

const TechnologyItem = ({ technology }: { technology: string }) => {
  const path = `/images/technologies/${technology}.svg`;

  return <Image src={path} alt={technology} width="50" height="50" />;
};

export default TechnologyItem;
