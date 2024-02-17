import "./App.css";
import AlertStrp from "./Components/AlertStrp";
import Filters from "./Components/Filters";
import LeftList from "./Components/LeftList";

function App() {
  return (
    <div className="relative ">
      <LeftList />
      <div className="flex flex-col lg:flex-row ml-[10px] lg:ml-[122px] absolute gap-[32px] mt-[19px] text-white">
        <AlertStrp />
        <Filters />
      </div>
    </div>
  );
}

export default App;
