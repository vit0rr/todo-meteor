export const formatName = (name) => {
  const formattedName = name.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());

  return formattedName;
};
