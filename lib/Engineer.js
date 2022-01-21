class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.name = name, 
        this.id = id, 
        this.email = email,
        this.github = github
    };

    gitGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
};