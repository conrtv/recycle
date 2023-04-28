import "./App.css";
import Component from "./components/Components";
import gearImage from "../src/assets/gears.png";
import metalpipeImage from "../src/assets/metalpipe.png";
import fuseImage from "../src/assets/gears.png";
import emptypropanetankImage from "../src/assets/emptypropanetank.png";
import metalbladeImage from "../src/assets/metalblade.png";
import metalspringImage from "../src/assets/metalspring.png";
import riflebodyImage from "../src/assets/riflebody.png";
import roadsignsImage from "../src/assets/roadsigns.png";
import ropeImage from "../src/assets/rope.png";
import semibodyImage from "../src/assets/semibody.png";
import sewingkitImage from "../src/assets/sewingkit.png";
import sheetmetalImage from "../src/assets/sheetmetal.png";
import smgbodyImage from "../src/assets/smgbody.png";
import tarpImage from "../src/assets/tarp.png";
import techtrashImage from "../src/assets/techtrash.png";

function App() {
  const components = [
    { id: 1, imageSrc: gearImage, name: "Gear" },
    { id: 2, imageSrc: metalpipeImage, name: "Metal Pipe" },
    { id: 3, imageSrc: fuseImage, name: "Fuse" },
    { id: 4, imageSrc: emptypropanetankImage, name: "Empty Propane Tank" },
    { id: 5, imageSrc: metalbladeImage, name: "" },
    { id: 6, imageSrc: metalspringImage, name: "" },
    { id: 7, imageSrc: riflebodyImage, name: "" },
    { id: 8, imageSrc: roadsignsImage, name: "" },
    { id: 9, imageSrc: ropeImage, name: "" },
    { id: 10, imageSrc: semibodyImage, name: "" },
    { id: 11, imageSrc: sewingkitImage, name: "" },
    { id: 12, imageSrc: sheetmetalImage, name: "" },
    { id: 13, imageSrc: smgbodyImage, name: "" },
    { id: 14, imageSrc: tarpImage, name: "" },
    { id: 15, imageSrc: techtrashImage, name: "" },
    // Add more components as needed
  ];

  return (
    <div className="container">
      <div className="container components">
        {components.map((component) => (
          <Component
            key={component.id}
            imageSrc={component.imageSrc}
            name={component.name}
            id={0}
            recycleAmount={0}
            onAddToRecycle={function (id: number, amount: number): void {
              throw new Error("Function not implemented.");
            }}
            onClick={function (id: number): void {
              throw new Error("Function not implemented.");
            }}
          />
        ))}
      </div>
      <div className="results">{/* Add any result components here */}</div>
    </div>
  );
}

export default App;
