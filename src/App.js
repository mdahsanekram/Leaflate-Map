
import Clanders from './components/Clander/Canders';
import DraggableMarker from './components/Example/DraggableMarker';
import Event from './components/Example/Event';
import LayerGroups from './components/Example/LayerGroups';
import MyMap from './components/Example/MyMap';
import SearchMap from './components/Example/SearchMap';
import Tooltips from './components/Example/Tooltips';

const App = () => {
  


  return (
    <>
    <Event/>
     <LayerGroups/>
     <SearchMap/>
     <Tooltips/>

     {/* Not working */}
     {/* <MyMap/> */}
     {/* <DraggableMarker/> */}
     {/* <Clanders/> */}
    </>
  );
};

export default App;
