import './App.css';
import Header from './Components/Header'
import Travels from './Components/Travels';
import data from './data';

export default function App() {

  const travels = data.map(item => {
    return(
      <Travels
      key={item.id}
      item={item}
      />
    )
  })
 
  return (
    <div className="App">
      <Header />

    <section>
    {travels}
    

    </section>
    
    </div>
  );
}


