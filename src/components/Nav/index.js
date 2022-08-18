const categories = [
  ['commercial', 'Photos of grocery stores, food trucks, and other commercial projects'],
  ['portraits','Portraits of people in my life'],
  ['food','Delicious delicacies'],
  ['landscape','Fields, farmhouses, waterfalls, and the beauty of nature'],
].map(([name, description]) => ({ name, description }));

function categorySelected(name) {
  return () => console.log(`${name} clicked`);
}

function Nav() {
  return (
    <header>
      <h2>
        <a href="/">'
          <span role="img" aria-label="camera">📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About Me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map(({ name }) => (
            <li className="mx-1" key={name}>
              <span onClick={categorySelected(name)}>{name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
