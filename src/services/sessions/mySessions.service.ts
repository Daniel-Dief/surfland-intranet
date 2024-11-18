// import { axiosClient } from '../../network/appClient';
// import useToken from '../../store/useToken';
// import { handleResponse } from '../utils.service';
// import { WaveDTO } from '../../DTO/waveDTO';

// interface ResponseProps {
//     waves : Array<WaveDTO>
//     error ?: string;
// }

// export default async function mySessionsRequest( page : number ) : Promise<ResponseProps>{
//     const rawResponse = await axiosClient.get(
//         `/api/Sessions/MySessions?page=${page}`, {
//         headers: {
//             Authorization: `Bearer ${useToken.getState().token}`,
//         },
//         validateStatus: () => true,
//     });

//     const [waves, error] = handleResponse<ResponseProps>(rawResponse);

//     if (error || !waves) return {
//         waves: [],
//         error: error || 'No waves found',
//     };

//     return { waves };
// };

export default function mySessionsRequest() {
    return true;
}