import { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import './App.css';

const categoriesList = [
  ['commercial', 'Photos of grocery stores, food trucks, and other commercial projects'],
  ['portraits','Portraits of people in my life'],
  ['food','Delicious delicacies'],
  ['landscape','Fields, farmhouses, waterfalls, and the beauty of nature'],
].map(([name, description]) => ({ name, description }));

function App() {
  const [categories] = useState(categoriesList);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav { ...{
        categories,
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected,
      }}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
