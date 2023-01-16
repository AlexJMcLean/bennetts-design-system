export interface NavJson {
  children?: {
    [key: string]: NavItem;
  };
}

export interface NavItem {
  title?: string;
  slug?: string;
  color?: string;
  hideChildren?: false;
  children?: NavJson;
}
