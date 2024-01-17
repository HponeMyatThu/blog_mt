import API from 'src/api/interceptor';
import { USER_REGISTER } from 'src/constants/global';

export const user_register = async data =>
  (await API.post(`auth/register`, data)).data;

export const user_login = async data =>
  (await API.post(`auth/login`, data)).data;

export const get_all_blogs = async query => {
  try {
    const response = await API.get(`blog/get${query}`, {
      headers: {
        'Content-Type': 'application/json',
        authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWE0ZmM0MDM5MjE0NTBlNWU2M2RlMDUiLCJ1c2VyTmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcwNTM5MTYyOCwiZXhwIjoxNzA1Mzk1MjI4fQ.YPpoFSKozm2wf3yjEEckDZHMz9IQ9TylPOTiNq9Fipw'
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const get_photo = async query => {
  try{
    const response = await API.get(`/photo/${query}`);
    return response.data;
  }
  catch(error) {
    console.log(error);
  }
}
// (await API.get(`blog/all`)).data;

//   try {
//     const response = await API.post(`auth/register`, data, {
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     });
//     return response.data;
// } catch (error) {
//     // Handle errors here
//     console.error("Error during registration:", error);
//     throw error;
// }
