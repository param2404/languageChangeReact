import React, { useState } from 'react';
import { render } from 'react-dom';
import Home from './components/Home';
import en from './languages/en';
import hi from './languages/hi';

const translations={en,hi}

function App () {
  const [language, setLanguage] = useState("en")
  
  const getTranslation = (key) => {
    console.log(translations,language,key)
    return translations[language][key] || key
  }
    return (
      <div className="App">
        <h3>Select Language</h3>
        <select className="form-select" onChange={(e)=>setLanguage(e.target.value)}>
          {['en','hi'].map(lang => (
            <option key={lang} value={lang}>
              {lang.toUpperCase()}
            </option>
          ))}
        </select>
        <Home getTranslation={getTranslation}/>
      </div>
    );

}

render(<App />, document.getElementById('root'));