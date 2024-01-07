import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import StickersView from './Views/StickersView';

function App() {
  return (
    <div className="App">
      <Header />
      <StickersView />
      <Footer />
    </div>
  );
}

export default App;
