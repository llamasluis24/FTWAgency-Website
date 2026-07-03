export interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  group?: string;
}

export interface NavData {
  services: NavLink[];
  industries: NavLink[];
  resources: NavLink[];
  locations: NavLink[];
}

export interface PaletteItem {
  label: string;
  href: string;
  group: string;
  keywords?: string;
}
