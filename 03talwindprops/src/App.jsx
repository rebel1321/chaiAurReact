
import './App.css'
import Card from './components/Card'

function App() {

  let myObj ={
    userName:"satyam",
    age:21
  }

  return (
    <>
     <h1 className="text-3xl font-bold  bg-green-400">Talwind test</h1>
     <Card userName="satyam"/>
    </>
  )
}

export default App
