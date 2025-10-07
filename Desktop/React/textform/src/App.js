
import About from './About';
import './App.css';
import Navbar from './Navbar';
// import TextForm from './TextForm';



function App() {
  return (
   <>
<Navbar title="Textform" aboutText="About Us"/>
{/* <TextForm heading="Enter your text to analyse"/> */}
 <div className="container my-3">
 <About/> 
</div> 

</>
  );
}

export default App;
