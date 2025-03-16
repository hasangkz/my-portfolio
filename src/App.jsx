import About from './components/About';
import Contant from './components/Contant';
import Documents from './components/Documents';
import Educations from './components/Educations';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Techs from './components/Techs';

function App() {
  console.log('Hello there! Welcome my website :)');
  return (
    <div className='overflow-x-hidden text-neutral-100 antialiased '>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#0e232b_40%,#3e7283_90%,#38484f_90%)]'></div>
      </div>

      <div className='container mx-auto px-4'>
        <Navbar />
        <About />
        <Techs />
        <Experience />
        <Educations />
        <Projects />
        <Documents />
        <Contant />
        <Footer />
      </div>
    </div>
  );
}

export default App;
