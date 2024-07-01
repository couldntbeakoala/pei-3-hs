/* CÓDIGO ESPECÍFICO PARA A PÁGINA (COPIA CONTEÚDO INTERNO DE TABELA) "home.html", UMA VEZ QUE ATUALMENTE TABELAS EXISTEM SOMENTE NELA */

document.addEventListener("DOMContentLoaded", function() {
  const tableRows = document.querySelectorAll(".table-row");
  tableRows.forEach(row => {
    row.addEventListener("click", () => {
      const cells = row.querySelectorAll(".col");
      let contentCopy = "";
      cells.forEach(cell => {
        contentCopy += cell.innerText + "\t";
      });

      try {
        navigator.clipboard.writeText(contentCopy);
        alert("Conteúdo copiado com sucesso!");
      } catch (error) {
        console.error("Erro ao tentar copiar o conteúdo: ", error);
        alert("Não foi possível copiar o conteúdo. Tente novamente mais tarde.");
      }
    });
  });
});