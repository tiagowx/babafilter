'use client';
import { appConfig } from "@/configs/appConfig";
import { ICampeonato } from "@/interfaces/ICampeonato";
import { apiFutebol } from "@/services/apiFotebol";
import { getCampeonatos } from "@/services/futebolService";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { FC, useEffect, useState } from "react"


const SelectChampionShip: FC = () => {
  const [campeonatos, setCampeonatos] = useState<ICampeonato[]>([]);
  const [campeonatoSelected, setCampeonatoSelected] = useState<string | undefined>(campeonatos[0]?.nome || undefined);

  async function atualizarCampeonato() {
    await apiFutebol.get(`${appConfig.urlApiFutebol}campeonatos`)
      .then(res => {
        try {
          const { data } = res;
          setCampeonatos(data)
          console.log(data);

        } catch (e) {
          throw e
        }
      });
  }

  useEffect(() => {
    setTimeout(() => {
      if (campeonatos.length === 0) {
        atualizarCampeonato();
      }
    }, 5000)

  }, [campeonatos])

  return (
    <Box component="form">
      <FormControl fullWidth>
        <InputLabel id="label-select-campeonato">Campeonato</InputLabel>
        <Select
          labelId="label-select-campeonato"
          id="select-campeonato"
          value={campeonatoSelected}
          label="Campeonato"
          onChange={(e) => { setCampeonatoSelected(e.target.value) }}
        >
          {campeonatos.length > 0 && campeonatos.map(camp => (
            <MenuItem key={camp.slug} value={camp.slug}>{camp.nome}</MenuItem>
          ))}

        </Select>
      </FormControl>

    </Box>
  )
}

export default SelectChampionShip;