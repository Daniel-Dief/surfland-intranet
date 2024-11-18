import { WaveDTO } from "../DTO/waveDTO";

interface ResponseProps {
    status : number;
    data : Array<WaveDTO>;
    totalPages : number;
}

export function useMySessions(page : number) : ResponseProps {
    const arrJson : Array<WaveDTO> = [
        {
            "id": 75,
            "waveType": "AVANÇADO (ESQUERDA)",
            "waveDate": "2024-08-13",
            "waveTime": "10:10:00",
            "createdAt": new Date("2024-07-12 14:57:07"),
            "statusId": 3
        },
        {
            "id": 76,
            "waveType": "EXPERT BARRELS (DIREITA)",
            "waveDate": "2024-08-13",
            "waveTime": "17:40:00",
            "createdAt": new Date("2024-07-12 15:00:58"),
            "statusId": 3
        },
        {
            "id": 77,
            "waveType": "FULL T4 (DIREITA)",
            "waveDate": "2024-08-22",
            "waveTime": "16:50:00",
            "createdAt": new Date("2024-07-12 15:02:38"),
            "statusId": 3
        },
        {
            "id": 78,
            "waveType": "EXPERT BARRELS (ESQUERDA)",
            "waveDate": "2024-08-21",
            "waveTime": "17:40:00",
            "createdAt": new Date("2024-07-12 15:04:18"),
            "statusId": 3
        },
        {
            "id": 126,
            "waveType": "EVOLUTION (DIREITA)",
            "waveDate": "2024-08-05",
            "waveTime": "11:00:00",
            "createdAt": new Date("2024-07-31 17:50:57"),
            "statusId": 3
        },
        {
            "id": 136,
            "waveType": "INICIANTE BAY",
            "waveDate": "2024-09-07",
            "waveTime": "15:30:00",
            "createdAt": new Date("2024-08-09 15:44:31"),
            "statusId": 3
        },
        {
            "id": 137,
            "waveType": "INICIANTE BAY",
            "waveDate": "2024-09-14",
            "waveTime": "15:30:00",
            "createdAt": new Date("2024-08-09 15:48:36"),
            "statusId": 1
        },
        {
            "id": 198,
            "waveType": "INICIANTE BAY",
            "waveDate": "2024-10-12",
            "waveTime": "15:30:00",
            "createdAt": new Date("2024-09-16 19:12:35"),
            "statusId": 1
        },
        {
            "id": 238,
            "waveType": "INICIANTE BAY",
            "waveDate": "2024-11-09",
            "waveTime": "15:30:00",
            "createdAt": new Date("2024-10-15 16:24:35"),
            "statusId": 3
        },
        {
            "id": 249,
            "waveType": "INICIANTE BAY",
            "waveDate": "2024-11-10",
            "waveTime": "15:30:00",
            "createdAt": new Date("2024-10-21 15:52:23"),
            "statusId": 1
        },
        {
            "id": 34,
            "waveType": "EVOLUTION (DIREITA)",
            "waveDate": "2024-07-15",
            "waveTime": "11:00:00",
            "createdAt": new Date("2024-06-25 17:58:08"),
            "statusId": 1
        },
        {
            "id": 135,
            "waveType": "EVOLUTION (DIREITA)",
            "waveDate": "2024-09-09",
            "waveTime": "10:10:00",
            "createdAt": new Date("2024-08-09 13:32:55"),
            "statusId": 1
        },
        {
            "id": 228,
            "waveType": "INICIANTE BAY",
            "waveDate": "2024-10-14",
            "waveTime": "15:30:00",
            "createdAt": new Date("2024-09-29 11:01:51"),
            "statusId": 1
        },
        {
            "id": 29,
            "waveType": "EVOLUTION (DIREITA)",
            "waveDate": "2024-07-16",
            "waveTime": "11:00:00",
            "createdAt": new Date("2024-06-25 11:16:51"),
            "statusId": 1
        },
        {
            "id": 225,
            "waveType": "INTERMEDIÁRIO (ESQUERDA)",
            "waveDate": "2024-10-22",
            "waveTime": "10:10:00",
            "createdAt": new Date("2024-09-28 14:12:36"),
            "statusId": 1
        },
        {
            "id": 56,
            "waveType": "THE BEAST (ESQUERDA)",
            "waveDate": "2024-07-01",
            "waveTime": "13:30:00",
            "createdAt": new Date("2024-06-28 19:55:49"),
            "statusId": 1
        },
        {
            "id": 124,
            "waveType": "AVANÇADO (ESQUERDA)",
            "waveDate": "2024-08-01",
            "waveTime": "10:10:00",
            "createdAt": new Date("2024-07-30 14:42:22"),
            "statusId": 1
        },
        {
            "id": 182,
            "waveType": "THE BEAST (ESQUERDA)",
            "waveDate": "2024-09-05",
            "waveTime": "13:30:00",
            "createdAt": new Date("2024-08-31 09:31:51"),
            "statusId": 1
        },
        {
            "id": 255,
            "waveType": "THE BEAST (ESQUERDA)",
            "waveDate": "2024-11-04",
            "waveTime": "07:40:00",
            "createdAt": new Date("2024-10-24 07:26:24"),
            "statusId": 1
        },
        {
            "id": 152,
            "waveType": "INICIANTE BAY",
            "waveDate": "2024-09-28",
            "waveTime": "15:30:00",
            "createdAt": new Date("2024-08-19 17:20:12"),
            "statusId": 1
        },
        {
            "id": 8,
            "waveType": "AVANÇADO (ESQUERDA)",
            "waveDate": "2024-07-04",
            "waveTime": "14:20:00",
            "createdAt": new Date("2024-06-24 13:53:52"),
            "statusId": 1
        },
        {
            "id": 216,
            "waveType": "INICIANTE BAY",
            "waveDate": "2024-10-21",
            "waveTime": "15:30:00",
            "createdAt": new Date("2024-09-26 16:53:56"),
            "statusId": 1
        },
        {
            "id": 264,
            "waveType": "INICIANTE BAY",
            "waveDate": "2024-11-20",
            "waveTime": "12:10:00",
            "createdAt": new Date("2024-10-26 20:00:09"),
            "statusId": 1
        },
        {
            "id": 47,
            "waveType": "AVANÇADO PLUS (ESQUERDA)",
            "waveDate": "2024-07-16",
            "waveTime": "11:50:00",
            "createdAt": new Date("2024-06-27 15:09:42"),
            "statusId": 1
        },
        {
            "id": 117,
            "waveType": "THE BEAST (ESQUERDA)",
            "waveDate": "2024-08-07",
            "waveTime": "13:30:00",
            "createdAt": new Date("2024-07-29 11:52:58"),
            "statusId": 1
        },
        {
            "id": 166,
            "waveType": "THE BEAST (ESQUERDA)",
            "waveDate": "2024-09-02",
            "waveTime": "13:30:00",
            "createdAt": new Date("2024-08-28 11:04:43"),
            "statusId": 1
        },
        {
            "id": 219,
            "waveType": "AVANÇADO PLUS (ESQUERDA)",
            "waveDate": "2024-10-02",
            "waveTime": "11:50:00",
            "createdAt": new Date("2024-09-27 12:58:18"),
            "statusId": 1
        },
        {
            "id": 63,
            "waveType": "AVANÇADO (ESQUERDA)",
            "waveDate": "2024-07-18",
            "waveTime": "14:20:00",
            "createdAt": new Date("2024-06-29 15:31:03"),
            "statusId": 1
        },
        {
            "id": 271,
            "waveType": "THE BEAST (ESQUERDA)",
            "waveDate": "2024-11-07",
            "waveTime": "19:20:00",
            "createdAt": new Date("2024-10-29 08:11:20"),
            "statusId": 1
        },
        {
            "id": 93,
            "waveType": "EVOLUTION (DIREITA)",
            "waveDate": "2024-08-06",
            "waveTime": "11:00:00",
            "createdAt": new Date("2024-07-22 17:51:51"),
            "statusId": 1
        },
        {
            "id": 156,
            "waveType": "INTERMEDIÁRIO PLUS (DIREITA)",
            "waveDate": "2024-09-23",
            "waveTime": "16:00:00",
            "createdAt": new Date("2024-08-21 10:17:05"),
            "statusId": 1
        },
        {
            "id": 230,
            "waveType": "EVOLUTION (DIREITA)",
            "waveDate": "2024-10-07",
            "waveTime": "12:40:00",
            "createdAt": new Date("2024-09-30 11:34:54"),
            "statusId": 1
        },
        {
            "id": 256,
            "waveType": "INTERMEDIÁRIO PLUS (DIREITA)",
            "waveDate": "2024-11-18",
            "waveTime": "10:10:00",
            "createdAt": new Date("2024-10-24 09:09:44"),
            "statusId": 1
        },
        {
            "id": 41,
            "waveType": "THE BEAST (ESQUERDA)",
            "waveDate": "2024-07-04",
            "waveTime": "13:30:00",
            "createdAt": new Date("2024-06-27 09:39:07"),
            "statusId": 1
        },
        {
            "id": 120,
            "waveType": "THE BEAST (ESQUERDA)",
            "waveDate": "2024-08-08",
            "waveTime": "13:30:00",
            "createdAt": new Date("2024-07-29 13:51:22"),
            "statusId": 1
        },
        {
            "id": 23,
            "waveType": "THE BEAST (ESQUERDA)",
            "waveDate": "2024-07-15",
            "waveTime": "13:30:00",
            "createdAt": new Date("2024-06-24 16:07:39"),
            "statusId": 1
        },
        {
            "id": 123,
            "waveType": "INTERMEDIÁRIO PLUS (ESQUERDA)",
            "waveDate": "2024-08-12",
            "waveTime": "15:10:00",
            "createdAt": new Date("2024-07-30 14:42:07"),
            "statusId": 1
        }
    ];

    const iniIndex = page * 10 - 10;
    const endIndex = page * 10;

    const resturnJson : ResponseProps = {
        "status": 200,
        "data": arrJson.slice(iniIndex, endIndex),
        "totalPages": Math.ceil(arrJson.length / 10)
    }


    return resturnJson;
};
