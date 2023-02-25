import './App.css';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import Download from './components/Resume/Download';
import Education from './components/Resume/Education';
import Skills from './components/Resume/Skills';
import Language from './components/Resume/Language';
import BottomNav from './components/BottomNavigation/BottomNav';
import HeadName from './components/Resume/HeadingName'
import ProjectCards from './components/Resume/muiTailwindCard'
import ContactMe from './components/ContactMe/ContactMe';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route exact path='/'
          element={
            <HeroSection />
          }
        />

        <Route path='/Resume'
          element={
            <div>
              <Download />
              <Education />
              <Skills small="hidden" large="block" direction="right" />
              <Skills large="hidden" direction="right" />
              <Language smalll="hidden" big="block" />
              <Language big="hidden" direction="top" />
              <div className='hidden lg:block lg:fixed lg:bottom-[43%] lg:right-[-13%] lg:rotate-90'>
                <BottomNav />
              </div>
            </div>
          }
        />


        <Route path='/Cards'
          element={
            <div className='lg:p-5' style={{ backgroundImage: 'linear-gradient(to right, white 67% , rgb(0, 200, 255) 33%)' }}>
              <HeadName />
              <div className='p-[10px] flex flex-wrap justify-around'>
                {
                  [['Question Papers Website',
                    'This is a Question Papers website which contains all the previous year question papers till 2023 of Electrical and Electronics branch of Ramaiah Institute of Technology',
                    'https://prajayvernekar.github.io/Previous-Question-Papers/',
                    'images/QPimg.gif'],
                  ['Swiggy Front-end Clone',
                    'Frontend SWIGGY clone that has the similar user interface like official SWIGGY web application',
                    'https://prajayvernekar.github.io/Swiggy-Clone/',
                    'images/swiggyimg.jpg'],
                  ['Oneplus Oxygen OS Clone',
                    'This is the Oneplus User Interface clone which will give you the virtual expirience of Oxygen OS 11. do checkout and feel the real Oxygen',
                    'https://prajayvernekar.github.io/Swiggy-Clone/',
                    'images/oxygenos11.PNG']]
                    .map((item, i) => (
                      <ProjectCards key={i} TITLE={item[0]} PARA={item[1]} LINK={item[2]} IMG={item[3]} />
                    ))
                }
              </div>
            </div>
          }
        />


        <Route path='/ContactMe'
          element={
            <ContactMe />
          }
        />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
