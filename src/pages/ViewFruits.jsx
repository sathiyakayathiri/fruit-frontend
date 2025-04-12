import { useEffect, useState } from 'react';
import axios from 'axios';

function ViewFruits() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/fruits')
      .then(res => setFruits(res.data))
      .catch(err => console.error('Error fetching fruits:', err));
  }, []);

  return (<div className='show'>
    <div style={{ padding: '20px' }}>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit.name}</li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default ViewFruits;