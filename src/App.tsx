import "./App.css";
import { InteractiveAreaChart } from "./components/charts/interactive-area-chart";
import { StatusCard } from "./components";

// Example usage:
const serverData = {
  dashboardElements: [
    {
      type: "status-bar",
      elements: [
        { renderElement: "StatusCard", className: "child" },
        { renderElement: "StatusCard", className: "child" },
      ],
    },
    {
      type: "charts",
      elements: [{ renderElement: "InteractiveAreaChart", className: null }],
    },
  ],
};
function App() {
  return (
    <div className="">
      <Dashboard data={serverData} />
    </div>
  );
}

export default App;

const componentMap = {
  StatusCard: StatusCard,
  InteractiveAreaChart: InteractiveAreaChart,
  // add more components as needed
};

const Dashboard = ({ data }) => {
  const renderElements = (elements) => {
    return elements.map((item, index) => {
      const Component = componentMap[item.renderElement]; // Find the corresponding component
      if (Component) {
        return <Component key={index} className={item.className} />;
      }
      return null;
    });
  };

  return (
    <div>
      {data.dashboardElements.map((section, idx) => (
        <div key={idx}>
          <h3>{section.type}</h3>
          {renderElements(section.elements)}
        </div>
      ))}
    </div>
  );
};
