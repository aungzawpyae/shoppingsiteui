import store from "../store";
var token = '';

const defaultSetting = {};
defaultSetting.customerHostUrl = "http://localhost:8000/api/";

defaultSetting.consumerRequestHeader = {
  'Access-Control-Allow-Origin': '*',
  "Content-Type": "application/json",
  "X-API-TOKEN": "8a9c4f23-a511-4c94-89b1-70d860f5f51b",
  Authorization: `Bearer ${token}`,
};

defaultSetting.fileRequestHeader = {
    'Access-Control-Allow-Origin': '*',
    "Content-Type": "multipart/form-data",
    "X-API-TOKEN": "8a9c4f23-a511-4c94-89b1-70d860f5f51b",
    Authorization: `Bearer ${token}`
};

export default defaultSetting;
