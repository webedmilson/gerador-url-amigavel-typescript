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
