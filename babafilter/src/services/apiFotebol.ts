import { appConfig } from "@/configs/appConfig";
import axios from "axios";

export const apiFutebol = axios.create({
  baseURL: appConfig.urlApiFutebol,
  headers: {
    Authorization: `Bearer ${appConfig.apiTokenTest}`}
})