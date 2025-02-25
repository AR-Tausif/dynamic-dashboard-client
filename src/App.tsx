import "./App.css";
import { InteractiveAreaChart } from "./components/charts/interactive-area-chart";
import { StatusCard } from "./components";

function App() {
  const dashboardElements = [
    {
      type: "status-bar",
      elements: [
        {
          renderElement: <StatusCard className="child" />,
          className: "child",
        },
      ],
    },
    {
      type: "charts",
      elements: [
        {
          renderElement: <InteractiveAreaChart />,
          className: null,
        },
      ],
    },
  ];

  const renderElement = (payload: typeof dashboardElements) => {
    return payload.map((elements) => {
      if (elements.type === "status-bar") {
        return elements.elements.map((element) => {
          return element.renderElement;
        });
      }
      return;
    });
  };
  console.log(renderElement(dashboardElements));

  return (
    <div className="">
      <div className="dashboard-container">
        {renderElement(dashboardElements)}
      </div>
      <div className="my-4">
        <InteractiveAreaChart />
      </div>
    </div>
  );
}

export default App;




