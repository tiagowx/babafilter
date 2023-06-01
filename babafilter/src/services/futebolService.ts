import { appConfig } from "@/configs/appConfig";
import { apiFutebol } from "./apiFotebol";


export const getCampeonatos = await apiFutebol.get(`${appConfig.urlApiFutebol}/campeonatos`)
  .then(res => {
    const { data } = res;
    console.log(data);
    return data;
  });

export const getTable = async (campeonato_id: number) => {
  const data = await apiFutebol.get(`campeonatos/${campeonato_id}/tabela`).then(res => {
    if (res.status === 200) return res.data;
    else res.status;
  });

  console.log(data);
  return data;
}