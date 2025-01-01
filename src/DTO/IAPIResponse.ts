export default interface IAPIResponse<T> {
    status : boolean,
    message : string,
    data : T
}