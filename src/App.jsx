import "./App.css";
import Top from "./components/top.jsx";
import Introduce from "./components/introduce.jsx";
// import Experience from "./components/experience.jsx";
import Header from "./components/header.jsx";
import Stack from "./components/stack.jsx";

function App() {
  return (
    <>
      <Header />
      <Top />
      <Introduce />
      <Stack />
      {/* <Experience /> */}
    </>
  );
}

export default App;
