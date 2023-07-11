export const capitalizeFirstLetter = (name?: string) => {
  if(name) return name.charAt(0).toUpperCase() + name.slice(1);
  else return "";
};

export const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}