# YATAGARASU — Código do site

Site estático em HTML, CSS e JavaScript, sem dependências de instalação ou etapa de build.

## Estrutura
- index.html: conteúdo e estrutura.
- style.css: identidade visual, componentes e responsividade.
- app.js: menu, abas, carrossel e preparação do briefing.
- assets/: imagens usadas no site.

## Executar
Extraia o ZIP. Na pasta yatagarasu, execute:

    python -m http.server 8080

Abra http://localhost:8080 no navegador. Também é possível abrir index.html diretamente; a cópia para a área de transferência funciona melhor em localhost ou HTTPS.

## Publicar
Envie index.html, style.css, app.js e a pasta assets para uma hospedagem de arquivos estáticos, mantendo a estrutura de pastas.

## Observações
- O briefing é gerado de forma interativa, podendo ser enviado diretamente para o WhatsApp, copiado para a área de transferência ou baixado como arquivo `.txt`.
- As fontes Michroma e Space Grotesk são carregadas pelo Google Fonts com fontes de sistema como fallback.
- Os exemplos de interfaces na seção showcase são estudos visuais proprietários do estúdio.
- O logotipo oficial com degradê em alta definição (`assets/logo.png`) e o favicon foram devidamente integrados.
- Testado e aprovado em múltiplos viewports (Desktop 1440px e Mobile 390px).
