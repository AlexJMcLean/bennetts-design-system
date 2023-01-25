export const slugify = (string: string): string => {
  return (
    string
      // camel to hypen case
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      // replace spaces with hypens
      .replace(/[^a-z0-9]/gi, "-")
      .toLowerCase()
  );
};
