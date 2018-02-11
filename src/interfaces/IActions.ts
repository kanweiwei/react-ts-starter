// 参考Flux标准action
export default interface IActions {
    type: string;
    payload?: any;
    error?: any;
    meta?: any;
}