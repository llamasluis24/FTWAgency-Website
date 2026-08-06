import { LocationSchema, type Location } from "@/lib/schemas";
import { riversideCa } from "./riverside-ca";
import { coronaCa } from "./corona-ca";
import { irvineCa } from "./irvine-ca";
import { anaheimCa } from "./anaheim-ca";
import { ontarioCa } from "./ontario-ca";
import { ranchoCucamongaCa } from "./rancho-cucamonga-ca";
import { santaAnaCa } from "./santa-ana-ca";
import { carlsbadCa } from "./carlsbad-ca";
import { sanDiegoCa } from "./san-diego-ca";
import { losAngelesCa } from "./los-angeles-ca";
import { longBeachCa } from "./long-beach-ca";
import { pasadenaCa } from "./pasadena-ca";
import { fontanaCa } from "./fontana-ca";
import { morenoValleyCa } from "./moreno-valley-ca";
import { temeculaCa } from "./temecula-ca";
import { huntingtonBeachCa } from "./huntington-beach-ca";
import { oceansideCa } from "./oceanside-ca";
import { chulaVistaCa } from "./chula-vista-ca";
import { fullertonCa } from "./fullerton-ca";
import { torranceCa } from "./torrance-ca";

export const locations: Location[] = [
  riversideCa,
  coronaCa,
  irvineCa,
  anaheimCa,
  ontarioCa,
  ranchoCucamongaCa,
  santaAnaCa,
  carlsbadCa,
  sanDiegoCa,
  losAngelesCa,
  longBeachCa,
  pasadenaCa,
  fontanaCa,
  morenoValleyCa,
  temeculaCa,
  huntingtonBeachCa,
  oceansideCa,
  chulaVistaCa,
  fullertonCa,
  torranceCa,
].map((l) => LocationSchema.parse(l));
