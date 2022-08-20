import { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

export default function Nav(props) {
  const {
    categories = [],
    currentCategory = {},
    setCurrentCategory = _ => _,
    contactSelected,
    setContactSelected,
  } = props;

  // logic
  const updatePageTitle = () => document.title = capitalizeFirstLetter(currentCategory.name ?? '');

  const vm = {
    about: {
      activate: () => setContactSelected(false),
    },
    contact: {
      activate: () => setContactSelected(true),
      selected: contactSelected && 'navActive',
    },
    categories: categories.map((category) => ({
      key: category.name,
      activate: () => {
        setCurrentCategory(category);
        setContactSelected(false);
      },
      selected: currentCategory.name === category.name && !contactSelected && 'navActive',
      title: capitalizeFirstLetter(category.name),
    }))
  };

  useEffect(updatePageTitle, [currentCategory]);

  // view
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">{" "}📸</span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={vm.about.activate}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${vm.contact.selected}`}>
            <span onClick={vm.contact.activate}>Contact</span>
          </li>
          {vm.categories.map(({ key, selected, title, activate }) => (
            <li className={`mx-1 ${selected}`} key={key}>
              <span onClick={activate}>{title}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
