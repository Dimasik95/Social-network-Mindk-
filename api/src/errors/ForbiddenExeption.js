class ForbiddenExeption extends Error {
        constructor(message) {
                super(message);
                this.name = 'ForbiddenException';
        }
}

module.exports = ForbiddenExeption;