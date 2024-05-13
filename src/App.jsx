import Flow from "./component/ReactFlow";
import MyForm from "./component/Form";
import { useState } from "react";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div style={{ height: "100vh", width: "100vw" }}>
        <Flow setShowForm={setShowForm} />
      </div>
      {showForm && (
        <div style={{ position: "absolute", right: 50, top: 50 }}>
          <MyForm setShowForm={setShowForm} />
        </div>
      )}
    </div>
  );
};

export default App;
