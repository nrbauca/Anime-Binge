import NavBar from './Components/NavBar';
import Featured from './Components/Featured';
import Header from './Components/Header';
import Trending from './Components/Trending';
import Throwback from './Components/Throwback';

function App() {
  return (
    <div className="bg-[#1A1A1A]">
      <NavBar />
      <Featured />
      <Header />
      <Trending />
      <Throwback />
    </div>
  );
}

export default App;
