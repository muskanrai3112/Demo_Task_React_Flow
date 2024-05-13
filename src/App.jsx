import Flow from "./component/ReactFlow";
import MyForm from "./component/Form";
import { useState } from "react";

const App = () => {
  const showForm = useState(false);
 
  return (
    <div>
      <div style={{ height: "100vh", width: '100vw' }}>
        <Flow showForm={showForm[1]}/>
      </div>
      {showForm[0] && (
        <div style={{ position: "absolute", right: 50, top: 50 }}>
          <MyForm showForm={showForm[1]} />
        </div>
      )}
    </div>
  );
};

export default App;
