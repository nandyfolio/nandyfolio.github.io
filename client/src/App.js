import './App.css';
import { About, Header, Footer, Skills, Testimonial, Work } from './container';


function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
