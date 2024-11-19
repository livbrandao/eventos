import Convidado from "./model/Convidado";
import Evento from "./model/Evento";
import ComplementarEvento from "./functions/complementarEvento";
import CriarConvidadoVazio from "./functions/criarConvidadoVazio";
import CriarEventoVazio from "./functions/criarEventoVazio";
import ComplementarConvidado from "./functions/complementarConvidado";

export type { Evento, Convidado };
export {
  ComplementarConvidado,
  ComplementarEvento,
  CriarConvidadoVazio,
  CriarEventoVazio,
};
