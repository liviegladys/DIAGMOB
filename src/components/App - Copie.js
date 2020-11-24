import React from 'react'
import { BrowserRouter , Switch, Route } from 'react-router-dom'

const  App = () => {

    return (
        <BrowserRouter> 
            <Switch>
                <Route exact path="/" render={() => <Simplon />}/>
                <Route path="/Créattivité" render={() => <Créattivité />}/>
                <Route path="/Collaboration" render={() => <Collaboration />}/>
                <Route path="/Persévérance" render={() => <Persévérance />}/>
                <Route path="/Détermination" render={() => <Détermination />}/>
                <Route path="/Curiosité" render={() => <Curiosité />}/>
                <Route path="/Forte_Motivation" render={() => <Forte_Motivation />}/>
                <Route path="/Autonomie" render={() => <Autonomie />}/>        

                <Route exact path="/"><Simplon /></Route>
                <Route path="/Créattivité"><Créattivité /></Route>
                <Route path="/Collaboration"><Collaboration /></Route>
                <Route path="/Persévérance"><Persévérance /></Route>
                <Route path="/Détermination"><Détermination /></Route>
                <Route path="/Curiosité"><Curiosité /></Route>
                <Route path="/Forte_Motivation"><Forte_Motivation /></Route>
                <Route path="/Autonomie"><Autonomie /></Route>
            </ Switch>
       </BrowserRouter>      
    );          
}

export default App;