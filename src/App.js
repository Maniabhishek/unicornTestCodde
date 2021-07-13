import { useState } from "react";


function App() {

  const [ideationApp,setIdeationApp] = useState([{name: "ModernOffice",votes: 0 },{ name: "Offsite", votes: 0 }])

  const voteHandler = (name,incOrDec) =>{
    if(name==="ModernOffice"){
      if(incOrDec==='inc'){

        const updatedIdeationApp = ideationApp.map(ideation=>ideation.name==="ModernOffice"?{name:ideation.name,votes:ideation.votes+1}:ideation)

        setIdeationApp(updatedIdeationApp);
      }else{
        const updatedIdeationApp = ideationApp.map(ideation=>ideation.name==="ModernOffice"?{name:ideation.name,votes:ideation.votes-1}:ideation)

        setIdeationApp(updatedIdeationApp);
      }
  }else{
    if(incOrDec==='inc'){

      const updatedIdeationApp = ideationApp.map(ideation=>ideation.name==="Offsite"?{name:ideation.name,votes:ideation.votes+1}:ideation)

      setIdeationApp(updatedIdeationApp);
    }else{
      const updatedIdeationApp = ideationApp.map(ideation=>ideation.name==="Offsite"?{name:ideation.name,votes:ideation.votes-1}:ideation)

        setIdeationApp(updatedIdeationApp);
    }
  }
  }

  return (
    <div className="App">
      <ul>
        {
          ideationApp.map(ideation=>
          <li key={ideation.name}>
              <span>{ideation.name}</span> - <span>votes: {ideation.votes}</span><button onClick={()=>voteHandler(ideation.name,'inc')}>+</button> <button onClick={()=>voteHandler(ideation.name,'dec')}>-</button>
          </li>
            )
        }
        
        
    </ul>
    </div>
  );
}

export default App;
