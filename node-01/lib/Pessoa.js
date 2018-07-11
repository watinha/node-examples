module.exports = class Pessoa {
    constructor (first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    get_full_name () {
        return this.first_name + " " + this.last_name;
    }
}
