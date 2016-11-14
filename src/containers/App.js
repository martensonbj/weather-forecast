import { connect } from 'react-redux';
import App from '../components/App'
import { setLocation } from '../actions/index'


const mapDispatchToProps = (dispatch) => {
  return {
    setLocation: (location) => {
      console.log('app container dispatching to props');
      dispatch(setLocation(location))
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
