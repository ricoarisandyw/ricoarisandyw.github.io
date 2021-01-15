import { Action } from "redux";
import ActionType from "./actionType";
import { MenuState } from "./reducer";

export interface AccountDispatchAction extends Action<string> {
    payload: Partial<MenuState>
}

export const actionUpdateMenu = (selectedMenu: string): AccountDispatchAction => ({
    type: ActionType.UpdateSelectedMenu,
    payload: {selectedMenu}
})