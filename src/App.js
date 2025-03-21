import './App.css';
import Header from './Initial-Page/header/Header.js';
import Video from './Initial-Page/sec-video/Video.js';
import Section1 from './Initial-Page/section-1/Section-1.js';
import Section2 from './Initial-Page/section-2/Section-2.js';
import Footer from './Initial-Page/footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Video></Video>
      <Section1></Section1>
      <Section2></Section2>
      <Footer></Footer>
    </div>
  );
}

export default App;
