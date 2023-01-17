export interface NavJson {
  children?: {
    [key: string]: NavItem;
  };
}

export interface NavItem {
  title?: string;
  slug?: string;
  description?: string;
  color?: string;
  hideChildren?: false;
  children?: NavJson;
  order?: number;
  newSection?: boolean;
}
