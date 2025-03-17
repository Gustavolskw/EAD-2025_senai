# Cadastro de Usuário

Este projeto é uma aplicação web simples para cadastro de usuários, incluindo informações pessoais, contato, credenciais de acesso, dados profissionais, preferências, pagamento e outros recursos. A interface é responsiva e inclui validações de entrada utilizando **JavaScript puro**.

## 📌 Funcionalidades

- Formulário de cadastro com diversas seções
- Validações de entrada em tempo real
- Máscaras para CPF, RG, telefone, CEP e cartão de crédito
- Upload de arquivos PDF e imagens
- Barra lateral responsiva que pode ser recolhida em telas menores

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3** (incluindo Bootstrap para responsividade)
- **JavaScript Puro** (sem frameworks externos)

## 📂 Estrutura do Projeto

```
📁 cadastro-usuario
│── index.html  # Página principal do projeto
│── styles.css  # Estilos da aplicação
│── script.js   # Validações e interações do formulário
```

## 🚀 Como Executar o Projeto

1. Clone o repositório ou baixe os arquivos.
2. Abra o projeto em seu editor de código (recomendado: **VS Code**).
3. Instale a extensão **Live Server** no VS Code.
4. Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.
5. Acesse `http://127.0.0.1:5500/` no navegador para visualizar a aplicação.

## 🎨 Estilização e Responsividade

- O layout usa **Bootstrap** para manter a responsividade.
- A barra lateral se **esconde em telas menores** e pode ser exibida com um botão de menu.
- Formulários organizados em **cards responsivos** para melhor usabilidade.

## 🔍 Validações Implementadas

✅ **CPF, RG, Telefone e CEP** possuem máscaras de formatação automática.
✅ **Senhas** precisam ser confirmadas antes do envio.
✅ **Campos obrigatórios** são destacados se não forem preenchidos.
✅ **Upload de arquivos** restrito a imagens e PDF.
✅ **Cartão de crédito** formatado automaticamente.
✅ **Aceitação dos termos** obrigatória antes do envio.

