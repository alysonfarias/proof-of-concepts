// semantic.ts
import { ASTNode } from './parser';
import { ErrorReporter } from './error';

export class SemanticAnalyzer {
    private errors: ErrorReporter;

    constructor() {
        this.errors = new ErrorReporter();
    }

    public analyze(node: ASTNode) {
        switch (node.type) {
            case "FunctionDeclaration":
                this.checkFunctionDeclaration(node);
                break;
            default:
                this.errors.report(`Unknown node type: ${node.type}`);
        }
    }

    private checkFunctionDeclaration(node: ASTNode) {
        if (node.params.length !== 2) {
            this.errors.report(`Function ${node.name} must have exactly 2 parameters`);
        }
        if (node.body.type !== "BinaryExpression" || node.body.operator !== "+") {
            this.errors.report(`Function ${node.name} body must be a binary expression with '+' operator`);
        }
    }

    public getErrors(): string[] {
        return this.errors.getErrors();
    }
}
