import './assets/style/template.css';
import './assets/style/body.css'

import HeadTag from './components/navigation';
import Footer from './components/footer';

function App() {
  return (
    <div className="portfolio">
      <HeadTag />
      <Footer />
    </div>
  );
}

export default App;
