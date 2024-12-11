## 📝 Estrutura da Issue

### **Título da Issue**
- Use um título claro e descritivo.
- Formato sugerido:
  - `[BUG] Descrição curta do problema`
  - `[FEATURE] Nome da funcionalidade`
  - `[DOC] Atualização/Criação de documentação`

### **Descrição**
Preencha os seguintes campos para descrever a issue:

1. **Resumo**:
   - Breve descrição da issue.

2. **Contexto**:
   - Explique o problema ou a necessidade.
   - Inclua links ou referências relevantes, se houver.

3. **Critérios de Aceitação**:
   - Lista dos requisitos necessários para que a issue seja considerada resolvida.
   - Exemplo:
     - [ ] O botão X está funcionando conforme o esperado.
     - [ ] O endpoint retorna os dados corretamente.

4. **Tarefas**:
   - Liste as etapas necessárias para completar a issue:
     - [ ] Etapa 1
     - [ ] Etapa 2
     - [ ] Etapa 3

### **Prioridade**
Indique a prioridade da issue:
- `Alta`: Impacta diretamente o funcionamento principal do sistema.
- `Média`: Importante, mas não impede o progresso do projeto.
- `Baixa`: Melhorias ou ajustes estéticos.

### **Anexos**
Inclua imagens, logs ou exemplos de código, se necessário.

---

## 🚀 Boas Práticas

- Mantenha as issues objetivas e claras.
- Atualize a issue à medida que houver progresso.
- Adicione etiquetas (`bug`, `feature`, `documentation`, etc.) para facilitar a categorização.
- Associe a issue a um milestone ou projeto, se aplicável.

---

## Exemplo de Issue Preenchida

### **Título:**
`[BUG] Erro ao carregar o mapa interativo`

### **Descrição:**
1. **Resumo**:
   - O mapa interativo não está carregando ao acessar a página inicial.

2. **Contexto**:
   - O problema ocorre em todas as sessões de usuário ao usar navegadores baseados em Chromium.
   - Logs de erro no console indicam falha na comunicação com o endpoint `/api/map`.

3. **Critérios de Aceitação**:
   - [ ] O mapa carrega corretamente em navegadores compatíveis.
   - [ ] Logs de erro são tratados adequadamente.

4. **Tarefas**:
   - [ ] Investigar o erro no endpoint `/api/map`.
   - [ ] Corrigir a falha de comunicação.
   - [ ] Validar o funcionamento em diferentes navegadores.

### **Prioridade:**
Alta

### **Anexos:**
- Captura de tela do erro no console.
- Logs detalhados do servidor.

---

Seguindo este padrão, garantimos a consistência e a produtividade no gerenciamento das issues do projeto Urbanize.
