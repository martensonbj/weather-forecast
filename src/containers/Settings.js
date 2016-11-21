import { connect } from 'react-redux'
import Settings from '../components/Settings'

const mapStateToProps = (state) => {
  return { pinnedCities: state.pinnedCitiesReducer }
}

export default connect(mapStateToProps, null)(Settings)
