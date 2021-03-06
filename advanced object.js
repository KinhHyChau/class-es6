class World {    
    constructor (population, area, gdp){        
    console.log(this);        
    this.population = population;        
    this.area = area;        
    this.gdp = gdp;    
    }    
    geology(){        
    console.log(`The population is ${this.population} and the area is ${this.area}`);    
    }
}

class Nation extends World{    
    constructor (population, area, gdp){        
        super (population, area, gdp);    
    }    
    economy(){        
        console.log(`The gdp is ${this.gdp}`);    
    }
}

class City extends Nation{    
    constructor (population, area, gdp){        
        super (population, area, gdp);    
    }    
    economy(){        
        console.log(`The gdp is ${this.gdp}`);    
    }
}
const canada = new Nation('38 millions', '9.98 million square km', '1.8 trillion' ) 
const usa = new Nation('328 millions', '9.15 million square km', '20.8 trillion' )
const calgary = new City ('4 millions', '0.66 million square km', '105 billion' )


