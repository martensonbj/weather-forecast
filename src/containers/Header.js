import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = (state) => {
  return { localWeather: state.localWeatherReducer }
}

export default connect(mapStateToProps, null)(Header)
