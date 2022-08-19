import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/small/commercial/0.jpg";

export default function Gallery({ currentGallery }) {
  const { name, description } = currentGallery;
  const title = capitalizeFirstLetter(name);

  return (
    <section>
      <h1>{ title }</h1>
      <p>{ description }</p>
      <div>
        <img src={photo} alt="Commercial Example" className="img-thumbnail mx-1" />
      </div>
    </section>
  );
}

