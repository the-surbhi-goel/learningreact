import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
    {/* Passing props */}
     <Navbar title="Learning React" aboutText="About Us" />
     <div className="container">
     <TextForm heading="Enter your text"/>

     </div>
    </>
  );
}

export default App;
