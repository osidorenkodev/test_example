import {instance} from "./instatnce";
import {API_KEY_NEWS} from "../Constance/Keys";

export const getNewsApi = async (
    date: string,
    sortType: string | null,
    popularity: string) => {
        try {
            let UrlStr = `/v2/${popularity}?q=${sortType}&from=${date}&`
            UrlStr += `apiKey=${API_KEY_NEWS}`

            const {data} = await instance.get(UrlStr);

            return data;
        } catch (error: any) {
            const errResponse =
                (error && error.response && error.response.data) ||
                (error && error.message);
            console.log('getNewsApi error', errResponse);
            return error;
        }
}
