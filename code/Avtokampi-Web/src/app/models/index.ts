import { Avtokamp } from "./avtokampi.model";
import { Cenik } from "./ceniki.model";
import { Drzava } from "./drzave.model";
import { KampirnoMesto } from "./kampirna_mesta.model";
import { Kategorija } from "./kategorije.model";
import { Mnenje } from "./mnenja.model";
import { Regija } from "./regije.model";
import { Rezervacija } from "./rezervacije.model";
import { Slika } from "./slike.model";
import { StatusRezervacije } from "./status_rezervacije.model";
import { Uporabnik } from "./uporabniki.model";
import { VrstaKampiranja } from "./vrsta_kampiranja.model";

export const models: any[] = [
  Avtokamp,
  Cenik,
  Drzava,
  KampirnoMesto,
  Kategorija,
  Mnenje,
  Regija,
  Rezervacija,
  Slika,
  StatusRezervacije,
  Uporabnik,
  VrstaKampiranja
];

export * from "./avtokampi.model";
export * from "./ceniki.model";
export * from "./drzave.model";
export * from "./kampirna_mesta.model";
export * from "./kategorije.model";
export * from "./mnenja.model";
export * from "./regije.model";
export * from "./rezervacije.model";
export * from "./slike.model";
export * from "./status_rezervacije.model";
export * from "./uporabniki.model";
export * from "./vrsta_kampiranja.model";
