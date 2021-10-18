import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Athlete from '../Athlete/Athlete';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import Login from '../Login/Login';
import RegistrationAthlete from '../RegistrationAthlete/RegistrationAthlete';
import RegistrationTeam from '../RegistrationTeam/RegistrationTeam';
import Team from '../Team/Team';
import TeamInterestedAthletes from '../TeamInterestedAthletes/TeamInterestedAthletes';
import TeamProfile from '../TeamProfile/TeamProfile';
import TeamSearch from '../TeamSearch/TeamSearch';
import AthleteSearch from '../AthleteSearch/AthleteSearch';
import AthleteInterestedTeams from '../AthleteInterestedTeams/AthleteInterestedTeams';
import AthleteProfile from '../AthleteProfile/AthleteProfile';

const App = () => {
  // const [id, setId] = useState({})
  // i want it to read the state that i have now and supply the athlete/#id(profile) page with thier info

  // console.log(match.path, ' :match.path');
  return (
    <main>
      <Switch>
        <Route exact path='/' 
          component={Login}
        />
        <Route exact path='/registration-athlete' 
          component={RegistrationAthlete}
        />
        <Route exact path='/registration-team' 
          component={RegistrationTeam}
        />
        <Route path='/athlete/:id' render={() => <AthleteProfile /> } />
        <Route exact path='/athlete/search' render={() => <AthleteSearch /> } />
        <Route exact path='/athlete/interested-teams' render={() => <AthleteInterestedTeams /> } />
       
       
        <Route exact path='/team' render={() => <Team />} />
          <Route exact path='/team/profile' render={() => <TeamProfile /> } />
          <Route exact path='/team/search' render={() => <TeamSearch /> } />
          <Route exact path='/team/interested-athletes' render={() => <TeamInterestedAthletes /> } />
        <Route component={Error} />
      </Switch>     
    </main>
  );
}

export default App;
