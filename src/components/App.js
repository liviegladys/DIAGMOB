import React from 'react'
import Form from './Form'
import Identite from './Identite'
import Header from './Header'
import Recapitulatif from './Recapitulatif'
//import ConnectMongo from '../store/ConnectMongo'
import '../css/style.css';
import { BrowserRouter , Switch, Route } from 'react-router-dom'

const  App = () => {

    return (
        <BrowserRouter>
            <Header/>
            <section className="container">
               
                <Switch>
                    <Route exact path="/">
                        <Identite />
                    </Route>

                    <Route path="/vosExperiencesMobilites" render={(props) => <Form {...props}  LaCateg="vosExperiencesMobilites"/>} />
                    <Route path="/experiencesEnMobilites" render={(props) => <Form  {...props} LaCateg="experiencesEnMobilites"/>} />
                    <Route path="/vosCompetencesMobilites" render={(props) => <Form  {...props} LaCateg="vosCompetencesMobilites"/>} />
                    <Route path="/vosCompetencesCle" render={(props) => <Form  {...props} LaCateg="vosCompetencesCle"/>} />
                    <Route path="/monBudgetMobilite" render={(props) => <Form  {...props} LaCateg="monBudgetMobilite"/>} />
                    <Route path="/monCadreDeVie" render={(props) => <Form  {...props} LaCateg="monCadreDeVie"/>} />
                    <Route path="/maSutuationPersonnelle" render={(props) => <Form  {...props} LaCateg="maSutuationPersonnelle"/>} />
                    <Route path="/mesProjetsMobilite" render={(props) => <Form  {...props} LaCateg="mesProjetsMobilite"/>} />

                    <Route path="/recapitulatif" render={(props) => <Recapitulatif  {...props} LaCateg="recapitulatif"/>} />
                    {/* <Route path="/MongoDB" render={(props) => <ConnectMongo  {...props}/>} /> */}

                    <Route path="/:filter?" render={(props) => <Form  {...props} />} />
                </ Switch>

            </section>
       </BrowserRouter>      
    );          
}

export default App;