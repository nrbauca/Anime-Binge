import NavBar from './NavBar';
import Featured from './Featured';
import Header from './Header';
import Trending from './Trending';
import Throwback from './Throwback';

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
