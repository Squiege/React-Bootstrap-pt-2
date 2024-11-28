import './App.css';
import ErrorHandler from './components/ErrorHandler';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar'

function App() {
  

  return (
    <div>
      <NavigationBar />
      <ErrorHandler />
    </div>
  )
}

export default App
