import { ITeam } from "./ITeam";

export interface IScore {
  "": {
    "grupo-principal": [
      {
        posicao: number;
        pontos: number;
        time: ITeam;
        jogos: string;
        vitorias: number;
        empates: number;
        derrotas: number;
        gols_pro: number;
        gols_contra: number;
        saldo_gols: number;
        aproveitamento: number;
        variacao_posicao: number;
        ultimos_jogos: []
      }
    ],
  }
}