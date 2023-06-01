import { Box, Button, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from "@mui/material"
import { styles } from "./styles"
import { FC, useEffect, useState } from "react";
//import { getCampeonatos } from "@/services/futebolService";
import { Update } from "@mui/icons-material";
import axios from "axios";
import { appConfig } from "@/configs/appConfig";
import { IScore } from "@/interfaces/IScore";

const TableScores: FC = () => {
  const [table, setTable] = useState<IScore|null>(null);
  async function refreshTable() {
    try {
      await axios.get(`https://api.api-futebol.com.br/v1/campeonatos/10/tabela`,
        {
          headers: {
            "Authorization": `Bearer ${appConfig.apiTokenLive}`
          }
        }
      ).then((res) => {
        setTable(res.data)
      });
    } catch (e) {
      throw e
    }
    console.log(table);
  }


  return (
    <Box sx={styles}>
      <Typography>
        Campeonato
        <Button onClick={refreshTable}>
          <Update />
          Atualizar
        </Button>
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>
                #
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                Time
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                PTS
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                J
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                V
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                E
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                D
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                GP
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                GC
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                SG
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                %
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                Recentes
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {table?..length > 0 && table[0]["grupo-principal"].map((score, i) => (
            <TableRow key={`${score.posicao}`}>
              <TableCell>
                <Typography>
                  {score.posicao}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {score.time.nome_popular}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {score.pontos}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {score.jogos}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {score.vitorias}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {score.empates}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {score.derrotas}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {score.gols_pro}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {score.gols_contra}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {score.saldo_gols}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {score.aproveitamento}%
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  Recentes
                </Typography>
              </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </Box>
  )
}

export default TableScores;