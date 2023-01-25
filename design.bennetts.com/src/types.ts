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

export interface SiteJSON {
  [key: string]: {
    frontMatter: FrontMatter;
  };
}

export interface Example extends FrontMatter {
  fileName: string;
}

export interface FrontMatter {
  title: string;
  category?: string;
  description?: string;
  examples?: Example[];
  icon?: string;
  keywords?: (string | number)[];
  status?: {
    value: string;
    message: string;
  };
}

export type AllTypes = {
  [typeName: string]: {
    [filePath: string]: Type;
  };
};

export type FilteredTypes = {
  [typeName: string]: Type;
};

export type Type = {
  filePath: string;
  name: string;
  value: string | number | object;
  syntaxKind?: string;
  description?: string;
  isOptional?: true;
  defaultVaue?: string;
  members?: Type[];
};
