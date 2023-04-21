import { Pricing2 } from 'my-lib'
import 'primeflex/primeflex.css'
import 'primeflex/themes/saga-blue.css'
import { useState } from 'react'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{width: '100vw', height: '100vh', backgroundColor: 'peachpuff'}}>
    <Pricing2/> 
    </div>
  )
}

export default App
