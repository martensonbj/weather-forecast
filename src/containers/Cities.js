import { connect } from 'react-redux'
import Cities from '../components/Cities'

const mapStateToProps = (state) => {
  return { pinnedCities: state.pinnedCitiesReducer }
}

export default connect(mapStateToProps, null)(Cities)
