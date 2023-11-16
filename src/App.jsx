import { useState } from "react"
import { Header } from "./components/Header"
import { UserInput } from "./components/UserInput"
import { Results } from "./components/Results"

function App() {

  const [ userInput, setUserInput ] = useState({
         
    initialInvestment: 100000,
    
    annualInvestment: 1200,
    
    expectedReturn: 1500,
    
    duration: 1,

  })


  const inputsValid  = userInput.duration >= 1

  const HandleChange = (inputIdentifier, newValue) => {
        
    setUserInput(prevUserInput => {
        
      return {
            
        ...prevUserInput,

        // el + forzara una conversion de este valor de cadena
        // a un valor numerico
        [inputIdentifier] : +newValue
    
      }
    
    })

  }

  return (

    <>

      <Header></Header> 

      <UserInput onChange={HandleChange} userInput={userInput}></UserInput>  

      {!inputsValid && <p className="center">Please put values ​​above zero</p>}


      {inputsValid && <Results input={userInput}></Results>}
    
    </>
    
  )

}

export default App
