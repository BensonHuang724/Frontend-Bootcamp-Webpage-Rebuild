import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarCustomize from './NavbarCustomize.jsx'
import IntroSection from './Sections/IntroSection.jsx'
import SignupSection from './Sections/SignupSection.jsx'
import ClassesSection from './Sections/ClassesSection.jsx'
import LearnSection1 from './Sections/LearnSection1.jsx'
import LearnSection2 from './Sections/LearnSection2.jsx'
import QASection from "./Sections/QASection.jsx";
import InstructorsSection from "./Sections/InstructorsSection.jsx";
import ContactInfo from "./Sections/ContactInfo.jsx";
import Footer from './Footer.jsx';

function App() {
  
  return (
    <div className="App">
        <NavbarCustomize/>
        <IntroSection/>
        <SignupSection/>
        <ClassesSection/>
        <LearnSection1/>
        <LearnSection2/>
        <QASection/>
        <InstructorsSection/>
        <ContactInfo/>
        <Footer/>
    </div>
    
  );
}

export default App;
