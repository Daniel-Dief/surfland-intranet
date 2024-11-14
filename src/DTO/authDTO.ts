interface StatusDTO {
    statusId : number,
    name : string
}

interface FunctionDTO {
    functionId : number,
    name : string,
    statusId : StatusDTO
}

interface RoleDTO {
    permissionId : number,
    accessProfileId : number,
    functionId : FunctionDTO
}

interface AccessProfileDTO {
    accessProfileId : number,
    name : string,
    waveLimitMonth : number,
    waveLimitWeek : number,
    waveLimitDay : number,
    statusId : StatusDTO
    roles : RoleDTO[]
}

export interface UserDTO {
    userId : number,
    personId : number,
    name : string,
    document : string,
    birthDate : string,
    email : string,
    phone : string,
    foreigner : number,
    accessProfileId : AccessProfileDTO,
    statusId : StatusDTO
}