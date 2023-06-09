import Head from 'next/head';
import { appConfig } from "@/configs/appConfig";
import { AppBar, Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { styles } from "./styles";

type IProps = {
  children: ReactElement;
}

const Layout: FC<IProps> = (props: IProps) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar sx={styles}>
        <Typography component="h1" variant="h3">{appConfig.appName}</Typography>
      </AppBar>
      <Box component="main">
        {props.children}
      </Box>
      <Box component="footer">
        <Typography component="span">
          &copy; {appConfig.appName} - {new Date().getUTCFullYear()} | Todos os direitos reservados.
        </Typography>
      </Box>
    </>
  );
}

export default Layout;