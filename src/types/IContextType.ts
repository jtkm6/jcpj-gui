import IActionType from "./IActionType";

export default interface IContextType<T> {
    state: T;
    dispatch: (action: IActionType<T, string>) => void;
}
