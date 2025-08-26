for (let num = 2; num <= 9; num++) {
  let linha = '';
  for (let i = 1; i <= 10; i++) {
    linha += `${num} x ${i} = ${num * i}  `;
  }
  console.log(linha);
}
