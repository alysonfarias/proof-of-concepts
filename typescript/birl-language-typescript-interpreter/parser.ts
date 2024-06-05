// parser.ts
import { Lexer, Token, TokenType } from './lexer';

export interface ASTNode {
    type: string;
    [key: string]: any;
}

export class Parser {
    private lexer: Lexer;
    private currentToken: Token;

    constructor(lexer: Lexer) {
        this.lexer = lexer;
        this.currentToken = this.lexer.getNextToken();
    }

    private eat(type: TokenType) {
        if (this.currentToken.type === type) {
            this.currentToken = this.lexer.getNextToken();
        } else {
            throw new Error(`Unexpected token: ${this.currentToken.value}`);
        }
    }

    private parseStatement(): ASTNode {
        if (this.currentToken.type === TokenType.KEYWORD && this.currentToken.value === "OH") {
            this.eat(TokenType.KEYWORD);
            this.eat(TokenType.KEYWORD); // O
            this.eat(TokenType.KEYWORD); // HOME
            this.eat(TokenType.KEYWORD); // AI
            this.eat(TokenType.KEYWORD); // PO
            const identifier = this.currentToken.value;
            this.eat(TokenType.IDENTIFIER);
            this.eat(TokenType.SYMBOL); // (
            const arg1 = this.currentToken.value;
            this.eat(TokenType.IDENTIFIER);
            this.eat(TokenType.SYMBOL); // ,
            const arg2 = this.currentToken.value;
            this.eat(TokenType.IDENTIFIER);
            this.eat(TokenType.SYMBOL); // )
            this.eat(TokenType.KEYWORD); // BORA
            this.eat(TokenType.KEYWORD); // CUMPADE
            this.eat(TokenType.IDENTIFIER); // A
            this.eat(TokenType.SYMBOL); // +
            this.eat(TokenType.IDENTIFIER); // B
            this.eat(TokenType.SYMBOL); // ;
            this.eat(TokenType.KEYWORD); // BIRL
            return {
                type: "FunctionDeclaration",
                name: identifier,
                params: [arg1, arg2],
                body: {
                    type: "BinaryExpression",
                    operator: "+",
                    left: { type: "Identifier", name: arg1 },
                    right: { type: "Identifier", name: arg2 }
                }
            };
        }

        throw new Error(`Unexpected token: ${this.currentToken.value}`);
    }

    public parse(): ASTNode {
        return this.parseStatement();
    }
}
