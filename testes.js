async function processData() {
  try {
      let result = await fetchData();
      console.log(result);
  } catch (error) {
      console.error('Erro ao processar dados:', error);
  }
}

processData();
