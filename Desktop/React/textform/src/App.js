
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';



function App() {
  return (
   <>
<Navbar title="Textform" aboutText="About Us"/>
<div className="container my-3">
<TextForm heading="Enter your text to analyse"/>
</div>



</>
  );
}

export default App;
