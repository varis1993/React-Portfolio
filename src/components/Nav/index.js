import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
    setCurrentPage,
    currentPage
   } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" onClick={()=>setCurrentPage("about")} href="#">
          <span role="img" aria-label="camera"></span> Tavaris Thompson
          
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-1">
            <a data-testid="about"className={currentPage==="about"?  " navActive" :"" } onClick={() => {
              setContactSelected(false)
              setCurrentPage("about")
              }}>
              About me
            </a>
          </li>
          <li className={currentPage==="contact"?  "mx-1 navActive" :"mx-1" }>
            <span onClick={() => {
              setContactSelected(true)
              setCurrentPage("contact")
              }}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
            
            >
              <span
              className={currentPage===category.name?  "mx-1 navActive" :"mx-1" }
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                  setCurrentPage(category.name)
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
