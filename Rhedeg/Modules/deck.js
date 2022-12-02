const TYPES = ["speed", "tempo", "easy", "long"]
const WORKOUTS = ["400s","Ks","Miles","200s","Fartlek minutes","Short and steep","Easy 30","Easy 40","Easy hour","Long run"]


class Deck { 
    constructor(cards) { 
        this.cards = []
    }
}

class Card { 
    constructor(type, value, summary) { 
        this.type = type;
        this.value = value;
        this.summary = summary;
    }
}