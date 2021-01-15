import { Reducer } from "redux"
import { AccountDispatchAction } from "./action"
import ActionType from "./actionType"

export interface DetailState {
    showDetail: boolean
}

const initialState: DetailState = {
    showDetail: false
}

export const detailReducer: Reducer<DetailState, AccountDispatchAction> = (state = initialState, action) => {
    switch(action.type){
        case ActionType.ShowDetail: {
            return {
                ...state,
                showDetail: Boolean(action.payload.showDetail)
            }
        }
        default: {
            return {...state}
        }
    }
}