import { useState } from "react";
import Modal from '../Modal';

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

  // logic
  const [photos] = useState(photoList);
  const [currentPhoto, setCurrentPhoto] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (image, index) => {
    setCurrentPhoto({ ...image, index });
    setIsModalOpen(!isModalOpen);
  }

  const vm = {
    photos: photos
      .filter((photo) => photo.category === category)
      .map((image, i) => ({
        key: image.name,
        src: require(`../../assets/small/${category}/${i}.jpg`),
        alt: image.name,
        onClick: () => toggleModal(image, i)
      }))
  };

  // view
  return (
    <div>
      { isModalOpen && <Modal { ...{currentPhoto} } onClose={toggleModal} /> }
      <div className="flex-row">
        {vm.photos.map((photo) => (<img className="img-thumbnail mx-1" alt={photo.alt} {...photo} />))}
      </div>
    </div>
  )
}
