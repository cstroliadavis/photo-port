import { capitalizeFirstLetter } from "../../utils/helpers";
import PhotoList from '../PhotoList'

export default function Gallery({ currentCategory }) {
  const { name, description } = currentCategory;
  const title = capitalizeFirstLetter(name);

  return (
    <section>
      <h1 data-testid="h1tag">{ title }</h1>
      <p>{ description }</p>
      <div>
        <PhotoList category={currentCategory.name} />
      </div>
    </section>
  );
}

