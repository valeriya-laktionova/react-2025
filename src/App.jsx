import { ItemList } from './components/ItemList';

const items = ["1", "2", "3", "4"];

function App() {

  return (
    <>
      <ItemList items={items} />
    </>
  )
}

export default App