import { SxProps } from "@mui/material";

const text = "white";

export const styles: SxProps = {
  display: "flex",
  flexDirection: "column",
  color: text,
  table: {
    thead: {
      fontWeight: "bold",
      tr: {
        th: {
          "p": {
            color: text,
            fontWeight: "bold",
          }
        }
      }
    }
  },
}