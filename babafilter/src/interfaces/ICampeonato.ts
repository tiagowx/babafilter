export interface ICampeonato {
  campeonato_id: number;
  nome: string;
  slug: string;
  nome_popular: string;
  edicao_atual: {
    edicao_id: number;
    temporada: number;
    nome: string;
    nome_popular: string;
    slug: string;
  };
  fase_atual: {
    fase_id: number;
    nome: string;
    slug: string;
    tipo: string;
    _link: string
  };
  rodada_atual: number | string | null;
  status: string;
  tipo: string;
  logo: string;
  regiao: string;
  _link: string;
}