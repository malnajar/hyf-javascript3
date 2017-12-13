class Staff {

    constructor(name, role, DOB) {
        this.name = name;
        this.role = role;
        this.DOB = new Date(DOB);
        this.movies = [];

    }

    addMovie(movieInstance) {
        this.movies.push(movieInstance);
    }
    getName() {
        return this.name
    }
    getRole() {
        return this.role
    }
    getAge() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.DOB.getFullYear();
    }

}


class Movies {

    set newStar(newStar) {
        this.stars.push(newStar)
    }
    set newWriter(newWriter) {
        this.writers.push(newWriter)
    }
    set newDirector(newDirector) {
        this.director.push(newDirector)
    }
    set newRate(newRate) {
        this.rate.push(newRate)
    }
    constructor(title) {

        this.title = title;
        this.stars = [];
        this.writers = [];
        this.director = [];
        this.rate = [];
    }
    validateProperties(title) {

        if (title === null) {
            throw new Error('Add a movie title');
        }
    }

    getTitle() {
        return this.title
    }
    getStars() {
        return this.stars
    }
    getWrites() {
        return this.writers
    }
    getDirector() {
        return this.director
    }
    getRating() {
        let rateAva = 0;
        for (let i = 0; i < this.rate.length; i++){
            rateAva += this.rate[i];
        }
        return rateAva / this.rate.length;
    }

}

const smith = new Staff("Will Smith", "Actor", "1968-09-25");
smith.addMovie("I am Legend");
smith.addMovie("Man in Black");
smith.addMovie("Hancock");

const braga = new Staff("Alice Braga", "Actor", "1998-06-11");
braga.addMovie("I am Legend");

const tahan = new Staff("Charlie Tahan", "Actor", "1990-02-01");
tahan.addMovie("I am Legend");

const lawrence = new Staff("Francis Lawrence", "Director", "1971-03-26");
lawrence.addMovie("I am Legend");

const protosevich = new Staff("Mark Protosevich", "Writer", "1961-08-24");
protosevich.addMovie("I am Legend");

const goldsman = new Staff("Akiva Goldsman", "Writer", "1962-07-07");
goldsman.addMovie("I am Legend")

console.log(smith);


const legend = new Movies("I am Legend");
legend.newStar = smith;
legend.newStar = braga;
legend.newStar = tahan;
legend.newWriter = protosevich;
legend.newWriter = goldsman;
legend.newDirector = lawrence;
legend.newRate = 7.5;
legend.newRate = 8.5;
legend.newRate = 9;
legend.newRate = 8;

console.log(legend);
console.log(legend.getRating());

console.log(legend.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = legend.getDirector();
console.log(`Director: ${director.map(actor => `${actor.getName()}`)}`);
