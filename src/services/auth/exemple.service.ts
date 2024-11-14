import { axiosClient } from "../../network/appClient";

export default async function exempleRequest() {
    const rawResponse = await axiosClient.get(
        "/word",
    );

    alert(rawResponse.data[0]);
}