import { Reducer } from "redux"
import { AccountDispatchAction } from "./action"
import ActionType from "./actionType"

export interface MenuState {
    selectedMenu: string
}

const initialState: MenuState = {
    selectedMenu: ''
}

export const menuReducer: Reducer<MenuState, AccountDispatchAction> = (state = initialState, action) => {
    switch(action.type){
        case ActionType.UpdateSelectedMenu: {
            return {
                ...state,
                selectedMenu: action.payload.selectedMenu || state.selectedMenu
            }
        }
        default: {
            return {...state}
        }
    }
}