// error.ts
export class ErrorReporter {
    private errors: string[];

    constructor() {
        this.errors = [];
    }

    public report(message: string) {
        this.errors.push(message);
    }

    public getErrors(): string[] {
        return this.errors;
    }
}
