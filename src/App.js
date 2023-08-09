import './assets/style/bodytags.css';
import Header from './components/header';
import Footer from './components/footer';
import Navigation from './components/navigation'
import Project from './components/project';

function App() {
  return (
    <div className="portfolio">
      <div className="header">
        <div className="header-content">
        <Header />
        <Navigation />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
