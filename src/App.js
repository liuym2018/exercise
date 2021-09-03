import { useEffect, useState, useRef } from 'react';
import './App.css';
import Eidt from './edit/edit';
import List from './list/list';

function App() {
  const [data, setData] = useState([]);
  const submitStatus = useRef(false);

  useEffect(() => {
    if (!submitStatus.current) {
      return
    }
  }, [data])


  return (
    <div className="App">
      <Eidt add={setData} submitStatus={submitStatus} />
      <List listData={data} submitStatus={submitStatus} />
    </div>
  );
}


export default App;
