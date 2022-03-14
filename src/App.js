import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/footer.js';

function App() {
  const [categories] = useState([
    { name: 'portfolio', description: '' },
    { name: 'resume', description: '' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  const [currentPage,setCurrentPage]=useState("about")

  return (
    <div>
      <Nav
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>

      {console.log("currentPage",currentPage)}
      <main>
        {currentPage !="contact" ? (
          <>
            {currentPage==="about"?<About></About>:<Gallery currentCategory={currentCategory}></Gallery>} 
            
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
