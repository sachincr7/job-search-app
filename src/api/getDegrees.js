import axios from "axios";

const getDegrees = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get(`${baseUrl}/degrees`);
  return response.data;
};

export default getDegrees;
