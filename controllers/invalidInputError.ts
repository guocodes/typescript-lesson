export default class InvalidInputError extends Error {
    constructor(msg: string) {
        super(msg);
    }
}