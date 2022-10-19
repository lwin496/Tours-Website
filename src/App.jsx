
import Card from './Components/Card'

function App() {
  return (
    <div className="App">
      <div className='container m-auto font-poppins w-3/4 md:w-1/2 '>
        <h1 className='flex justify-center text-teal-700 text-3xl pt-10'>THE TOURS WEBSITE</h1>
        <Card />
        <button className='text-2xl text-green-500 text-center'>RESET</button>
      </div>
    </div>
  );
}

export default App;
