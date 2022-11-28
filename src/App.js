import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import { divIcon } from 'leaflet';
import Map2 from './components/carte';
import { MyProvider } from './Provider/provider';
import Showdata from './components/showdata';
function App() {
  return (
    <MyProvider>
      <Showdata />
    {/* <div> */}
      {/* <Map2 /> */}
    {/* </div> */}
    </MyProvider>
  );
}

export default App;
