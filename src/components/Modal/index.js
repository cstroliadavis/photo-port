export default function Modal({onClose, currentPhoto}) {
  const { name, category, description, index } = currentPhoto;
  const image = require(`../../assets/large/${category}/${index}.jpg`);

  // view
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{ name }</h3>
        <img alt={ category } src={ image } />
        <p>{ description }</p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
}
