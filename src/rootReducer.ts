import {combineReducers} from 'redux'
import { accountReducer } from './components'
import { detailReducer } from './components/detail/reducer'
import { menuReducer } from './components/menu/reducer'

export const rootReducer = combineReducers({
    account: accountReducer,
    detail: detailReducer,
    menu: menuReducer,
})

export type RootState = ReturnType<typeof rootReducer>
