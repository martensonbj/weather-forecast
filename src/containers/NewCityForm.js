import { connect } from 'react-redux'
import NewCityForm from '../components/NewCityForm'
import { setNewCity } from '../actions/index'


const mapDispatchToProps = (dispatch) => {
  return {
    setNewCity: (city, index) => {
      dispatch(setNewCity(city, index))
    },
  }
}


export default connect(null, mapDispatchToProps)(NewCityForm)
