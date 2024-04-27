'use client'
// import DOMPurify from 'dompurify';
import DOMPurify from "isomorphic-dompurify";


export const TextoArticle = ({ texto }: { texto: string }) => {
  if (!texto) return null; // Agrega manejo de errores o validación de entrada
  return (
    <div className="article-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(texto) }} />
  );
};
