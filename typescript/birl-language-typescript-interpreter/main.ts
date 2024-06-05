// main.ts
import { Lexer } from './lexer';
import { Parser } from './parser';
import { SemanticAnalyzer } from './semantic';

const input = `
OH O HOME AI PO (MONSTRO SOMAR(MONSTRO A, MONSTRO B))
      BORA CUMPADE A + B;
BIRL
`;

const lexer = new Lexer(input);
const parser = new Parser(lexer);
const ast = parser.parse();

const semanticAnalyzer = new SemanticAnalyzer();
semanticAnalyzer.analyze(ast);

const errors = semanticAnalyzer.getErrors();
if (errors.length > 0) {
    console.error("Errors found:");
    errors.forEach(error => console.error(error));
} else {
    console.log("No errors found.");
}
