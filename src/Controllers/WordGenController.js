import axios from "axios";

export const getWord = async (length = 6) => {
    try{
        const res = await axios.get(`https://random-word-api.vercel.app/api?words=1&length=${length}`);
        return res.data;
    } catch(err) {
        console.log(err);
    }
}