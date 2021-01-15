import { Action } from "redux";
import ActionType from "./actionType";
import { DetailState } from "./reducer";

export interface AccountDispatchAction extends Action<string> {
    payload: Partial<DetailState>
}

export const actionShowDetail = (showDetail: boolean): AccountDispatchAction => ({
    type: ActionType.ShowDetail,
    payload: {showDetail}
})