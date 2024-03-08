import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from './slices/categoriesSlice';
import { useEffect } from 'react';
import { AppDispatch, RootState } from './Store';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.categoriesSlice.items);

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch]);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Categories</h1>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
