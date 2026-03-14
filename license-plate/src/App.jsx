import VietnamMap from "./component/VietnamMap";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <h2>Hà Giang</h2>
        <span>63 tỉnh</span>
      </div>

      <div className="mapWrapper">
        <VietnamMap />
      </div>
    </div>
  );
}