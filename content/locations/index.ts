import { LocationSchema, type Location } from "@/lib/schemas";
import { riverside } from "./riverside";
import { corona } from "./corona";
import { irvine } from "./irvine";

export const locations: Location[] = [riverside, corona, irvine].map((l) =>
  LocationSchema.parse(l),
);
