# My Personal Portfolio

This is my personal portfolio, a project developed to present my work and experiences in an interactive and visually appealing way. The website includes a project section where you can view detailed case studies, a section about me, and contact information.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: CSS framework for fast and responsive styling.
- **Lucide Icons**: Icon library for React.
- **Node.js**: JavaScript runtime environment on the server-side.
- **Webpack**: Module bundler for the application.

## Project Structure

```
portfolio/
├── public/
│   ├── cases/              # JSON files of the case studies
│   └── assets/             # Images and icons used in the portfolio
├── src/
│   ├── app/                # Application components
│   │   ├── _components/    # Reusable components (Navbar, Footer)
│   │   ├── projects/       # Individual project pages
│   │   └── [slug]/         # Dynamic pages based on slug
│   ├── components/         # UI components (Breadcrumb, etc.)
│   ├── styles/             # Global styles
│   └── utils/              # Utility functions
├── package.json            # Dependencies and scripts for the project
└── next.config.js          # Next.js configurations
```

## How to Install

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install the dependencies:**

   You need Node.js installed. If you don’t have it, you can download and install it here. (https://nodejs.org/).

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:

   Copie o arquivo `.env.example` para `.env`:

   ```bash
   cp .env.example .env
   ```

   Edite o arquivo `.env` e adicione a senha para acessar os casos privados:

   ```env
   NEXT_PUBLIC_VALID_KEYS=sua_senha_aqui
   ```

   > **Nota**: Você pode adicionar múltiplas senhas separadas por vírgula, por exemplo: `senha1,senha2,senha3`

4. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

   The website will be available at [http://localhost:3000](http://localhost:3000).

## Funcionalidades

### 🌐 Internacionalização (i18n)

O portfólio suporta dois idiomas: **Português (PT-BR)** e **Inglês (EN)**.

- **Idioma padrão**: Português (PT-BR)
- **Troca de idioma**: Use o switch no header (bandeiras 🇧🇷/🇺🇸)
- **Persistência**: A escolha do idioma é salva no `localStorage`
- **Conteúdo traduzido**:
  - Navegação e interface
  - Títulos e descrições dos projetos
  - Seção de experiência profissional
  - Modais e mensagens do sistema

### 🎨 Temas

- **Tema escuro** (padrão)
- **Tema claro**
- Troca de tema via ícone no header (☀️/🌙)
- Persistência da preferência

### 🔒 Casos Privados

Alguns projetos são protegidos por senha. Para acessá-los:

1. Clique no card do projeto com o ícone de cadeado 🔒
2. Digite a senha configurada no arquivo `.env`
3. Acesse o conteúdo completo do caso de estudo
