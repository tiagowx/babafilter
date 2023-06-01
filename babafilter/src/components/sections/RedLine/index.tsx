'use client'
import TableScores from "@/components/others/table";
import { Box, Typography } from "@mui/material";
import { styles } from "./styles";
import SelectChampionShip from "@/components/others/SelectChampionship";

const RedLine = () => {
  return (
    <Box component="section" sx={styles}>
      <SelectChampionShip/>
      <Typography component="h3" variant="h6">Destaques</Typography>
      <Box className="score">
        <TableScores />
      </Box>
    </Box>
  );
}

export default RedLine;