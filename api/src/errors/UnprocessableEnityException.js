class UnprocessableEnityException extends Error {
    constructor(errors) {
        super('Malformed input');
        this.name = 'UnprocessableEnityException';
        this.errors = errors;
    }
}

module.exports = UnprocessableEnityException;