export const maskDate = (value: string) => {
  let v = value.replace(/\D/g,'').slice(0, 10);
  if (v.length >= 5) {
    return `${v.slice(0,2)}/${v.slice(2,4)}/${v.slice(4)}`;
  }
  else if (v.length >= 3) {
    return `${v.slice(0,2)}/${v.slice(2)}`;
  }
  return v
}

export const maskReal = (value: number) => {
  return "R$ " + value.toFixed(2);
}

export const maskProductType = (value: number) => {
  const productType = [
    {id: 0, description: "Urna Funerária"},
    {id: 1, description: "Urna de Cremação"},
    {id: 2, description: "Coroa de Flores"},
    {id: 3, description: "Livro de Memórias"}
  ];

  return productType[value].description;
}