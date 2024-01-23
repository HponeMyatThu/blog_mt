import { store } from 'src/features/store';
import API from 'src/api/interceptor';
import { USER_REGISTER } from 'src/constants/global';

export const user_register = async data =>
  (await API.post(`auth/register`, data)).data;

export const user_login = async data =>
  (await API.post(`auth/login`, data)).data;

export const get_all_blogs = async query => {
  const userToken = store?.getState().user.user[0]?.Token;
  try {
    const response = await API.get(`blog/get${query}`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: userToken,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const get_all_users = async query => {
  const userToken = store?.getState().user.user[0]?.Token;
  try{
    const response = await API.get(`user/getallUsers${query}`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: userToken,
      },
    });
    return response;
  }
  catch(error){
    console.log(error);
  }
}

export const get_photo = async query => {
  try {
    const response = await API.get(`/photo/${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const get_username = async query => {
  try {
    const response = await API.get(`/profile/${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const make_reject_blog = async data => {
  try {
    const response = await API.patch(`blog/reject`, data, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `${store && store.getState().user.user[0].Token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const make_approve_blog = async data => {
  const userToken = store?.getState().user.user[0]?.Token;
  try {
    const response = await API.patch(`blog/approve`, data, {
      headers: {
        'Content-Type': 'application/json',
        authorization: userToken,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const make_active_user = async data => {
  try{
    const response = await API.patch(`user/profile/active`, data, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `${store && store.getState().user.user[0].Token}`,
      },
    });
    return response.data;
  }catch(error){
    console.log(error);
  }
}

export const make_inactive_user = async data => {
  try{
    const response = await API.patch(`user/profile/suspend`, data,{
      headers: {
        'Content-Type': 'application/json',
        authorization: `${store && store.getState().user.user[0].Token}`,
      },
    });
    return response.data;
  }catch(error){
    console.log(error);
  }
}

export const get_single_blog = async data => {
  try{
    const response = await API.get(`blog/getBlogById/${data}`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `${store && store.getState().user.user[0].Token}`,
      },
    });
    return response.data;
  }catch(error){
    console.log(error);
  }
}

export const get_category = async data => {
  try{
    const response = await API.get(`category`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `${store && store.getState().user.user[0].Token}`,
      },
    });
    return response.data;
  }catch(error){
    console.log(error);
  }
}

export const delete_blog = async data => {
  try{
    const response = await API.patch(`blog/delete`, data, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `${store && store.getState().user.user[0].Token}`,
      },
    })
    return response.data;
  }
  catch(error){
    console.log(error);
  }
}
