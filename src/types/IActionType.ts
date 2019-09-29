export default interface IActionType<T, E> {
    payload: T;
    type: string | E;
}
