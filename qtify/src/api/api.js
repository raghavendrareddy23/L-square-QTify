import axios from "axios";

const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbum = async() =>{
    try{
        const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        return response.data;
    }catch(err){
        console.error(err);
    }
}

export const fetchNewAlbums = async () => {
    try {
      const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };