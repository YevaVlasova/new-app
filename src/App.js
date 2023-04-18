import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import mainLogo from './assets/bg.png';
import Login from './components/Login/Login';

function App() {
  return (
    <div className='wrapper'>
      <div className="container">
        <Header />
        <Login />
        <Footer />
      </div>
      <div className="image">
        <img src={mainLogo} alt="Background" />
      </div>
    </div>
  );
}

export default App;
