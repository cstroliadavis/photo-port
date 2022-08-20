import { useState } from "react";

const photoList = [
  ['Grocery aisle', 'commercial', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
  ['Grocery booth', 'commercial', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
  ['Building exterior', 'commercial', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
  ['Restaurant table', 'commercial', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
  ['Cafe interior', 'commercial', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
  ['Cat green eyes', 'portraits', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
  ['Green parrot', 'portraits', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
  ['Yellow macaw', 'portraits', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
  ['Pug smile', 'portraits', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
  ['Pancakes', 'food', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
  ['Burrito', 'food', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
  ['Scallop pasta', 'food', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
  ['Burger', 'food', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
  ['Fruit bowl', 'food', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
  ['Green river', 'landscape', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
  ['Docks', 'landscape', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
  ['Panoramic village by sea', 'landscape', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
  ['Domestic landscape', 'landscape', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
  ['Park bench', 'landscape', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'],
].map(([name, category, description]) => ({ name, category, description }));

export default function PhotoList({ category }) {
  const [photos] = useState(photoList);
  const photosVm = photos
    .filter((photo) => photo.category === category)
    .map(({ name }, i) => ({
      id: name,
      image: require(`../../assets/small/${category}/${i}.jpg`),
      alt: name,
    }));

  return (
    <div>
      <div className="flex-row">
        {photosVm.map(({ id, image, alt}) => (
          <img key={id} src={image} alt={alt} className="img-thumbnail mx-1" />
        ))}
      </div>
    </div>
  )
}
