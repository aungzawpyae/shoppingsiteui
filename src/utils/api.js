import * as axios from "axios";
import defaultSetting from "./config";
const config = { withCredentials: true };
const api = axios.create();

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            store.dispatch("authentication/logout");
        }
        return Promise.reject(error);
    }
);

export const getRequestHeader = () =>
    Object.assign(defaultSetting.consumerRequestHeader, {
        Authorization: `Bearer ${store.state.authentication.token}`
    });

export const getFileRequestHeader = () =>
    Object.assign(defaultSetting.fileRequestHeader, {
        Authorization: `Bearer ${store.state.authentication.token}`,
    });

export const puller = async (url, params = "") =>
    await axios({
        method: "GET",
        url: `${defaultSetting.customerHostUrl}${url}`,
        headers: getRequestHeader(),
        params: params
    });

export const poster = async (url, payload) =>
    axios({
        method: "POST",
        url: `${defaultSetting.customerHostUrl}${url}`,
        headers: getRequestHeader(),
        data: payload
    });

export const filePoster = async (url, payload) =>
    axios({
        method: "POST",
        url: `${defaultSetting.customerHostUrl}${url}`,
        headers: getFileRequestHeader(),
        data: payload
    });

export const updater = async (url, payload = {}, params = "") =>
    axios({
        method: "POST",
        url: `${defaultSetting.customerHostUrl}${url}`,
        headers: getRequestHeader(),
        params: params,
        data: Object.assign(payload, { _method: "PUT" })
    });

export const destroyer = async (url, params = "") =>
    axios({
        method: "DELETE",
        url: `${defaultSetting.customerHostUrl}${url}`,
        headers: getRequestHeader(),
        params: params
    });

    export default {
        puller,
        poster,
        filePoster,
        updater,
        destroyer
    };
