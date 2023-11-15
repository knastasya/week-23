import './App.scss';
import data from './data.json';
import Rate from './components/Rate';


export default function App() {

  return (
    <div className='wrapper'>
      {data.map((data, index) =>
      <Rate
      key={index}
      price={data.price}
      speed={data.speed}
      backgroundUp={data.backgroundUp}
      backgroundCenter={data.backgroundCenter}
      selected={data.selected}
      ></Rate>)
      }
      
    </div>
  )
}

