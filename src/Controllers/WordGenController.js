import axios from "axios";

export const getWord = async (length = 6, signal) => {
    try{
        const res = await axios.get(`https://random-word-api.vercel.app/api?words=1&length=${length}`, {signal});
        if(res?.status === 200)
            return res.data;
        else
            throw new Error(`Error occured with Status code ${res?.status}!`)
    } catch(err) {
        console.log(err);
    }
}