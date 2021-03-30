import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useHistory } from 'react-router-dom';


const Profile = ({ title, visible }) => {
  const [email,setEmail] = useState()
  const history = useHistory()

  useEffect(()=>{
const getEmail = ()=>{
if(localStorage.getItem('user')){
  const {email} =JSON.parse(localStorage.getItem('user'))
  setEmail(email)
}
}
getEmail()
  },[])

  const redirectTo = (local)=>{
    if(local === 'prontas'){
      history.push('/receitas-feitas')
    }else if(local === 'favorita'){
      history.push('/receitas-favoritas')
    }else{
      localStorage.removeItem('user')
      localStorage.removeItem('mealsToken')
      localStorage.removeItem('cocktailsToken')
      localStorage.removeItem('doneRecipes')
      localStorage.removeItem('favoriteRecipes')
      localStorage.removeItem('inProgressRecipes')
      history.push('/')
    }

  }
  return(

  <div>
    <Header title={ title } visible={ visible } />
    <h1 data-testid="profile-email">{email}</h1>
    <button onClick={()=>redirectTo('prontas')} data-testid="profile-done-btn" type='button'>Receitas Feitas</ button>
    <button  onClick={()=>redirectTo('favorita')} data-testid="profile-favorite-btn" type='button'>Receitas Favoritas</button>
    <button  onClick={()=>redirectTo('sair')} data-testid="profile-logout-btn" type='button'>Sair</button>
    <Footer />
  </div>
  )
};
Profile.defaultProps = {
  visible: true,
};
Profile.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
};

export default Profile;
