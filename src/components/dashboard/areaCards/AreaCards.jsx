import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#ffc034"]}
        percentFillValue={80}
        cardInfo={{
          title: "Cursos aprobados",
          value: "80%",
          text: "Solo queda 20% más",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#ffc034"]}
        percentFillValue={50}
        cardInfo={{
          title: "Avance total de la carrera",
          value: "50%",
          text: "Aun queda mucho por dar!!",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#ffc034"]}
        percentFillValue={40}
        cardInfo={{
          title: "Reseñas brindadas",
          value: "40%",
          text: "Ayque ponerse las pilas :b",
        }}
      />
    </section>
  );
};

export default AreaCards;
