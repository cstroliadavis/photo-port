import { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav({ categories = [], currentCategory = {}, setCurrentCategory = _ => _ }) {
  const selectCategory = (category) => () => setCurrentCategory(category);
  const activeNav = ({name}) => currentCategory.name === name && 'navActive';
  const categoryVmMap = (category) => ({
    key: category.name,
    click: selectCategory(category),
    selected: activeNav(category),
    title: capitalizeFirstLetter(category.name),
  });
  const categoriesVm = categories.map(categoryVmMap);
  const updatePageTitle = () => document.title = capitalizeFirstLetter(currentCategory.name ?? '');

  useEffect(updatePageTitle, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">'
          <span role="img" aria-label="camera">{" "}📸</span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categoriesVm.map(({ key, selected, title, click }) => (
            <li className={`mx-1 ${selected}`} key={key}>
              <span onClick={click}>{title}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
