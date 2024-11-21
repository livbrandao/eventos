import { eventos } from "core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function PaginaEventos() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {eventos.map((evento) => (
        <div
          key={evento.id}
          className="bg-zinc-800 rounded-lg flex flex-col w-full overflow-hidden"
        >
          <div className="relative w-full h-52">
            <Image
              src={evento.imagem}
              fill
              alt={evento.nome}
              className="object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col items-center p-7 gap-3 text-center">
            <span className="text-lg font-black">{evento.nome}</span>
            <p className="flex-1 text-sm text-zinc-400 ">{evento.descricao}</p>

            <QRCode
              value={JSON.stringify({ id: evento.id, senha: evento.senha })}
              className="w-36 h-36"
            />

            <div className="flex gap-5">
              <Link
                href={`/evento/admin/${evento.id}/${evento.senha}`}
                className="button tertiary flex-1"
              >
                Admin
              </Link>
              <Link
                href={`/convite/${evento.alias}`}
                className="button secondary flex-1"
              >
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
