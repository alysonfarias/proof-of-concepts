// lexer.ts
export enum TokenType {
    KEYWORD,
    IDENTIFIER,
    NUMBER,
    STRING,
    SYMBOL,
    WHITESPACE,
    EOF
}

export interface Token {
    type: TokenType;
    value: string;
}

const keywords = new Set([
    "OH", "O", "HOME", "AI", "PO",
    "MONSTRO", "SOMAR", "BORA", "CUMPADE",
    "BIRL", "HORA", "DO", "SHOW", "CE", 
    "QUER", "VER", "ESSA", "PORRA", "QUE", 
    "QUE", "CE", "QUER", "MONSTRAO", "AJUDA", 
    "O", "MALUCO", "TA", "DOENTE", "ELE", 
    "QUE", "A", "GENTE", "QUER", "NAO", 
    "VAI", "DAR", "NAO"
]);

export class Lexer {
    private input: string;
    private position: number;
    private currentChar: string | null;

    constructor(input: string) {
        this.input = input;
        this.position = 0;
        this.currentChar = input.length > 0 ? input[0] : null;
    }

    private advance() {
        this.position++;
        if (this.position < this.input.length) {
            this.currentChar = this.input[this.position];
        } else {
            this.currentChar = null;
        }
    }

    private skipWhitespace() {
        while (this.currentChar !== null && /\s/.test(this.currentChar)) {
            this.advance();
        }
    }

    private collectString(): string {
        let result = '';
        while (this.currentChar !== null && /[a-zA-Z0-9]/.test(this.currentChar)) {
            result += this.currentChar;
            this.advance();
        }
        return result;
    }

    private collectNumber(): string {
        let result = '';
        while (this.currentChar !== null && /[0-9]/.test(this.currentChar)) {
            result += this.currentChar;
            this.advance();
        }
        return result;
    }

    public getNextToken(): Token {
        while (this.currentChar !== null) {
            if (/\s/.test(this.currentChar)) {
                this.skipWhitespace();
                continue;
            }

            if (/[a-zA-Z]/.test(this.currentChar)) {
                const value = this.collectString();
                const type = keywords.has(value) ? TokenType.KEYWORD : TokenType.IDENTIFIER;
                return { type, value };
            }

            if (/[0-9]/.test(this.currentChar)) {
                const value = this.collectNumber();
                return { type: TokenType.NUMBER, value };
            }

            if (this.currentChar === '(' || this.currentChar === ')' || this.currentChar === ';' || this.currentChar === '+') {
                const value = this.currentChar;
                this.advance();
                return { type: TokenType.SYMBOL, value };
            }

            throw new Error(`Unknown character: ${this.currentChar}`);
        }

        return { type: TokenType.EOF, value: '' };
    }
}
