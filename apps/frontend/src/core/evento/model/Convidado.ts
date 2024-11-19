export default interface Convidado {
  id: string;
  nome: string;
  email: string;
  confirmacao: boolean;
  possuiAcompanhante: boolean;
  qtdAcompanhantes: number;
}
