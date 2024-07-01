// Função para abrir o modal de adicionar sensor
function openAddSensorModal() {
  document.querySelector("#add-sensor-modal").style.display = "block";
}

// Função para fechar o modal de adicionar sensor
function closeAddSensorModal() {
  document.querySelector("#add-sensor-modal").style.display = "none";
}

// Armazena as configurações dos sensores
const sensorConfigs = {};

function openConfigSensorModal(sensorName) {
  let cleanSensorName = sensorName;

  // Remove "Sensor" do início do nome do sensor, para não ocorrer duplicatas, pois o modal iniciará com "Sensor"
  cleanSensorName = sensorName.startsWith("Sensor") ? sensorName.replace("Sensor", "") : sensorName;

  // Encontra o item da lista de sensores que corresponde ao sensor selecionado
  const sensorItem = document.querySelector(`.sensor-list li h3[data-name="${sensorName}"]`).parentNode;

  // Lê as informações do sensor da lista
  const currentName = sensorItem.querySelector("h3").textContent;
  const currentDescription = sensorItem.querySelector("p").textContent;

  // Cria um elemento modal para configurar o sensor
  const configModal = document.createElement("div");
  configModal.classList.add("sensor-modal");
  configModal.style = `
    display: block;
  `
  configModal.innerHTML = `
    <form>
      <h3 style="color: #fff;">Configurar o Sensor ${cleanSensorName}</h3>
      <label for="sensor-name">Nome do Sensor:</label>
      <input type="text" id="sensor-name" value="${currentName}" placeholder="Recomendamos um nome auto-explicativo." required>
      <label for="sensor-description">Descrição:</label>
      <textarea id="sensor-description" value="${currentDescription}" placeholder="Explique melhor sobre o sensor."></textarea>
      <button class="btn save-btn">Salvar</button>
      <button class="btn cancel-btn">Cancelar</button>
    </form>
  `

  // Adiciona evento de clique ao botão de salvar
  configModal.querySelector(".save-btn").addEventListener("click", function() {
    const sensorNameInput = configModal.querySelector("#sensor-name");
    const sensorDescriptionInput = configModal.querySelector("#sensor-description");

    // Atualiza as configurações do sensor específico e deleta as antigas
    delete sensorConfigs[sensorName];
    sensorConfigs[sensorNameInput.value] = {
      name: sensorNameInput.value,
      description: sensorDescriptionInput.value
    }

    // Atualiza a lista de sensores com as novas informações e o atributo data-name
    sensorItem.querySelector("h3").textContent = sensorNameInput.value;
    const h3Element = document.querySelector(`h3[data-name="${sensorName}"`);
    h3Element.dataset.name = sensorNameInput.value;
    sensorItem.querySelector("p").textContent = sensorDescriptionInput.value;

    console.log(`Configurações do sensor ${sensorName} salvas!`);
    configModal.remove();
  });

  // Adiciona evento de clique ao botão de cancelar
  configModal.querySelector(".cancel-btn").addEventListener("click", function() {
    configModal.remove();
  });

  // Adiciona o modal à página
  document.body.appendChild(configModal);
}

// Função para mostrar o gráfico do sensor específico ou de todas as informações
function showGraph(graphId) {
  const baseUrl = "https://drive.google.com/drive/folders/1kbw9ijNnxiYPJEAjVs-823Yg5dQkgkRg?usp=drive_link"; // trocar a url para a que usaremos na importação do(s) gráfico(s)
  window.open(`${baseUrl}/${graphId}`, "_blank"); // "_blank" como na tag <a> para abrir em nova janela ou aba ao invés de substituir a página atual
}

// Função para adicionar um novo sensor à lista
function addSensorToList(sensorName, sensorDescription) {
  const sensorItem = document.createElement("li");
  sensorItem.classList.add("sensor-item");
  sensorItem.innerHTML = `
    <h3 data-name="${sensorName}">${sensorName}</h3>
    <p>${sensorDescription}</p>
    <button class="btn config-btn">Configurar</button>
    <button class="btn delete-btn">Excluir</button>
    <button class="btn graph-btn">Ver Gráfico</button>
    <button class="btn up-btn">&uarr;</button>
    <button class="btn down-btn">&darr;</button>
  `

  // Adiciona ouvinte ao evento do botão de configurar
  sensorItem.querySelector(".config-btn").addEventListener("click", function() {
    const sensorName = sensorItem.querySelector("h3").dataset.name;
    openConfigSensorModal(sensorName);
  });

  // Adiciona ouvinte ao evento do botão de remover
  sensorItem.querySelector(".delete-btn").addEventListener("click", function() {
    sensorItem.remove();
  });

  // Adiciona ouvinte ao evento do botão de ver gráfico do sensor
  sensorItem.querySelector(".graph-btn").addEventListener("click", function() {
    const sensorName = sensorItem.querySelector("h3").dataset.name;
    showGraph(sensorName);
  });

  // Adiciona ouvinte ao botão de subir
  sensorItem.querySelector(".up-btn").addEventListener("click", function() {
    const sensorList = document.querySelector(".sensor-list");
    const sensorItem = this.parentNode;
    const prevSibling = sensorItem.previousElementSibling;
    if (prevSibling)
      sensorList.insertBefore(sensorItem, prevSibling);
  });

  // Adiciona ouvinte ao botão de descer
  sensorItem.querySelector(".down-btn").addEventListener("click", function() {
    const sensorList = document.querySelector(".sensor-list");
    const sensorItem = this.parentNode;
    const nextSibling = sensorItem.nextElementSibling;
    if (nextSibling)
      sensorList.insertBefore(nextSibling, sensorItem);
  });
  
  document.querySelector(".sensor-list").appendChild(sensorItem);
}

// Função para lidar com o submit do formulário de adicionar sensor
function handleAddSensorFormSubmit(event) {
  event.preventDefault();
  const sensorName = document.querySelector("#sensor-name").value;
  const sensorDescription = document.querySelector("#sensor-description").value;

  // Verifica se já existe um sensor com o mesmo nome (case-sensitive)
  const existingSensor = document.querySelector(`.sensor-list li h3[data-name="${sensorName}"]`);
  if (existingSensor) {
    alert(`Já existe um sensor com o nome "${sensorName}".\nPor favor, escolha outro nome.`);
    return;
  }

  addSensorToList(sensorName, sensorDescription);
  document.querySelector("#sensor-name").value = "";
  document.querySelector("#sensor-description").value = "";
  closeAddSensorModal();
}

// Adiciona eventos de clique aos botões
document.querySelector(".add-sensor-btn").addEventListener("click", openAddSensorModal);
document.querySelector(".close").addEventListener("click", closeAddSensorModal);
document.querySelector("#add-sensor-form").addEventListener("submit", handleAddSensorFormSubmit);
document.querySelector(".total-graph-btn").addEventListener("click", () => showGraph("total-graph"));