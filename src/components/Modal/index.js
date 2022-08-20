export default function Modal({currentPhoto}) {
  const { name, category, description, index } = currentPhoto;
  const image = category && require(`../../assets/large/${category}/${index}.jpg`);

  // view
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{ name }</h3>
        <img alt={ category } src={ image } />
        <p>{ description }</p>
        <button type="button">
          Close this modal
        </button>
      </div>
    </div>
  );
}
