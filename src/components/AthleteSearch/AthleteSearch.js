import React from 'react';
import './AthleteSearch.css';
import Header from '../Header/Header';
import { useParams } from 'react-router';


const AthleteSearch = () => {
  const {id} = useParams()
  // console.log('match in search: ', match);
  return (
    <section class='AthleteSearch'>
      <form class='AthleteForm'>
        <input
          type='text'
          placeholder='Sport Club Name'
          name='sportClub'
          value={sportClubName}
        />
      </form>
    </section>
  );
}

export default AthleteSearch;