# Gerador de URL Amigável em TypeScript

Este projeto contém uma função simples e eficiente em TypeScript para gerar URLs amigáveis a partir de textos. A função é útil para aplicações web que precisam de slugs legíveis e limpos, como em blogs, sistemas de e-commerce, ou qualquer aplicação que precise de URLs otimizadas.

## Funcionalidades

- Remove acentos e diacríticos.
- Mantém apenas letras, números e hifens.
- Substitui espaços por hifens.
- Remove hifens desnecessários no início ou no final do texto.

## Exemplo de Uso

```typescript
function gerarUrlAmigavel(texto: string): string {
    // Normaliza o texto para remover acentos e transforma em minúsculas
    const textoNormalizado = texto
        .normalize("NFD") // Divide caracteres compostos (ex: é vira e + `)
        .replace(/\p{Diacritic}/gu, "") // Remove os diacríticos
        .toLowerCase();

    // Remove caracteres não permitidos (manter apenas letras, números e espaços)
    const textoLimpo = textoNormalizado.replace(/[^a-z0-9\s-]/g, "");

    // Substitui espaços e hifens consecutivos por um único hifen
    const textoFormatado = textoLimpo.replace(/\s+/g, "-").replace(/-+/g, "-");

    // Remove hifens do início e do final, se existirem
    const urlAmigavel = textoFormatado.replace(/^-+|-+$/g, "");

    return urlAmigavel;
}

// Exemplo de uso
const texto = "Gerar URL Amigável para Títulos e Textos!";
const urlAmigavel = gerarUrlAmigavel(texto);
console.log(urlAmigavel); // Saída: "gerar-url-amigavel-para-titulos-e-textos"
```

## Como Usar

1. Clone este repositório:

```bash
git clone https://github.com/webedmilson/gerador-url-amigavel-typescript.git
```

2. Instale as dependências, caso necessário (para projetos TypeScript):

```bash
npm install
```

3. Use a função em seus próprios projetos ou modifique-a conforme sua necessidade.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias ou correções.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
