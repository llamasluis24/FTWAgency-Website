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
].map((l) => LocationSchema.parse(l));
