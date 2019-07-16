import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reviewJWT from './middlewares/reviewJWT'
import {signUser} from './signUser/sessionReducer'
import {
  tickerReducer,
  dashboardReducer,
  coinDetailsReducer,
  loaderReducer
} from './dashboard/reducer'
import {portfolioBox} from './portfolio/reducer'
import {dataColumnsSettings} from './columnSettings/reducer'
import {presets} from './presets/reducer'
import {searchReducer} from './search/reducer'
import {profileReducer} from './profile/reducer'
import {newsReducer} from './news/reducer'
import {projectProfileReducer} from './projectProfile/reducer'
import {selectedButtonsReducer} from './selectedButtons/reducer'
import {chartReducer} from './charts/reducer'

const rootReducer = combineReducers({
  session: signUser,
  ticker: tickerReducer,
  columnSettings: dataColumnsSettings,
  dashboard: dashboardReducer,
  portfolio: portfolioBox,
  coinDetails: coinDetailsReducer,
  presets: presets,
  search: searchReducer,
  profile: profileReducer,
  projectProfile: projectProfileReducer,
  news: newsReducer,
  selects: selectedButtonsReducer,
  charts: chartReducer,
  loader: loaderReducer
})

const loggerMiddleware = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1c5faf',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005'
  }
})

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = devtools ? devtools : compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, reviewJWT, loggerMiddleware))
)

export default store
