import { combineReducers } from 'redux'
import localWeatherReducer from './localWeather'

const rootReducer = combineReducers({
  localWeatherReducer
})

export default rootReducer;
