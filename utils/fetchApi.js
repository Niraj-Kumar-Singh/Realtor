import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'b9842b02d3msh70057a1ce142245p1d7c64jsn94aa21ab3bef' ,
    },
  });
    
  return data;
}