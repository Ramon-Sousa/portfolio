# Meu Portfólio Pessoal

Este é o meu portfólio pessoal, um projeto desenvolvido para apresentar meus trabalhos e experiências de forma interativa e visualmente atraente. O site inclui uma seção de projetos, onde você pode ver casos de estudos detalhados, uma área sobre mim e informações de contato.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **Lucide Icons**: Biblioteca de ícones para React.
- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Webpack**: Empacotador de módulos para a aplicação.

## Estrutura do Projeto

```
portfolio/
├── public/
│   ├── cases/              # Arquivos JSON dos casos de estudo
│   └── assets/             # Imagens e ícones utilizados no portfólio
├── src/
│   ├── app/                # Componentes da aplicação
│   │   ├── _components/    # Componentes reutilizáveis (Navbar, Footer)
│   │   ├── projects/       # Páginas de projetos individuais
│   │   └── [slug]/         # Páginas dinâmicas baseadas em slug
│   ├── components/         # Componentes UI (Breadcrumb, etc.)
│   ├── styles/             # Estilos globais
│   └── utils/              # Funções utilitárias
├── package.json             # Dependências e scripts do projeto
└── next.config.js          # Configurações do Next.js
```

## Como Instalar

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/portfolio.git
   cd portfolio
   ```

2. **Instale as dependências**:

   Você precisa do Node.js instalado. Se não tiver, você pode [baixar e instalar aqui](https://nodejs.org/).

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

   O site estará disponível em [http://localhost:3000](http://localhost:3000).

## Contribuições

Se você quiser contribuir com o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
