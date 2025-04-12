import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddFruit from './pages/AddFruit';
import ViewFruits from './pages/ViewFruits';

function App() {
  return (
    <Router>
      <div className='head'>
        <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Add Fruit</Link>
          <Link to="/view">View Fruits</Link>
        </nav>

        <Routes>
          <Route path="/" element={<AddFruit />} />
          <Route path="/view" element={<ViewFruits />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;