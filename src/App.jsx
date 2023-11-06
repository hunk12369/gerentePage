import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
	  <div>
	  	<h2>GERENTE PAGE</h2>
	  	<p>Bienvenido a mi pagina</p>
	  	<p>SOY HAN gerente de la empresea</p>
	  	
	  </div>
	  	
	  <img src={'/src/assets/img/model-2911332_1280.jpg'} alt="Mi imagen" />
	  	  
      </div>
    </>
  )
}

export default App
