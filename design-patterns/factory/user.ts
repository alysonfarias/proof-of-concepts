class InvalidInputError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidInputError";
    }
}

export default class User {
    firstName: string;
    lastName: string;
    email: string;

    constructor(firstName: string, lastName: string, email: string) {
        // Input Validation
        if (typeof firstName !== "string" || firstName.trim().length < 2) {
            throw new InvalidInputError("First name must be a non-empty string with at least 2 characters.");
        }

        if (typeof lastName !== "string" || lastName.trim().length < 2) {
            throw new InvalidInputError("Last name must be a non-empty string with at least 2 characters.");
        }

        if (!isValidEmail(email)) {
            throw new InvalidInputError("Invalid email address provided.");
        }

        this.firstName = firstName.trim();
        this.lastName = lastName.trim();
        this.email = email.toLowerCase().trim(); // Normalize email
    }

    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

function isValidEmail(email: string): boolean {
    // Basic email validation (improve for real-world scenarios)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
