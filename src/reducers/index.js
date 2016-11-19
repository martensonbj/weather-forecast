import { combineReducers } from 'redux'
import localWeatherReducer from './localWeather'
import pinnedCitiesReducer from './pinnedCities'

const rootReducer = combineReducers({
  localWeatherReducer,
  pinnedCitiesReducer
})

export default rootReducer;
