import React, { useReducer } from "react";
import Header from "./components/Header";
import TextComponent from "./components/main/TextComponent";
import reducer from "./components/context/reducer";
import contextToDo from "./components/context/context";

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <contextToDo.Provider value={[todos, dispatch]}>
      <div className="flex flex-col h-screen">
        {/* Header should take its natural height */}
        {/* <Header /> */}

        {/* TextComponent should take the remaining space */}
        <div className="flex-grow">
          <TextComponent />
        </div>
      </div>
    </contextToDo.Provider>
  );
}

export default App;
