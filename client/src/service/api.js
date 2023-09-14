  
import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        let response = await axios.post(`${url}/add-user`, data, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'include'
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
}

export const getUsers = async () => {
    // try {
    //     let response = await axios.get(`${url}/get-conversation?sub=${sub}`);
    //     return response.data;
    // } catch (error) {
    //     console.log('Error while calling getUsers API ', error);
    // }
    try {
        let response = await axios.get(`${url}/get-users`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getUsers API ', error);
    }
}

export const getUserSession = async () => {
    try {
        let response = await axios.get(`${url}/user/me`, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'include'
        });
        return response.data;
    } catch (error) {
        console.log('Error while calling getUserSession API ', error);
    }
}


export const getCookie = async (res) => {
    try {
        let response = await axios.get(`${url}/cookie/get`, {
            headers: {
                // 'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'include'
        });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log('Error while calling getUserSession API ', error);
    }
};

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log('Error while calling setConversation API ', error);
    }
}

export const getConversation = async (users) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, users);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error);
    }
}

export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get?conversationId=${id}`);
        return response.data
    } catch (error) {
        console.log('Error while calling getMessages API ', error);
    }
}

export const newMessages = async (data) => {
    try {
        return await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}