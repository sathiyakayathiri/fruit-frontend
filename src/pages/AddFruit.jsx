import { useState } from 'react';
import axios from 'axios';

function AddFruit() {
  const [fruit, setFruit] = useState('');

  const handleAdd = async () => {
    if (fruit.trim() === '') return;
    try {
      await axios.post('https://fruit-backend-2-d82p.onrender.com', { name: fruit });
      setFruit('');
    } catch (error) {
      console.error('Error adding fruit:', error);
    }
  };

  return (<div className='input'>
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        placeholder="Enter fruit name"
        value={fruit}
        onChange={(e) => setFruit(e.target.value)}
      />
      <button onClick={handleAdd} style={{ marginLeft: '10px' }}>Add</button>
    </div></div>
  );
}

export default AddFruit;
