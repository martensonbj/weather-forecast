import { connect } from 'react-redux'
import Cities from '../components/Cities'

const mapStateToProps = (state) => {
  debugger;
  return { pinnedCities: state.pinnedCitiesReducer }
}

export default connect(mapStateToProps)(Cities)
