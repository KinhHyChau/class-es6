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
    constructor (population, area, gdp, unemployment){        
        super (population, area, gdp);  
        this.unemployment = unemployment;
    }    
    unemRate(){        
        console.log(`The unemployment rate is ${this.unemployment}`);    
    }
}

class Neighborhood extends City{    
    constructor (population, area, gdp, unemployment, income){        
        super (population, area, gdp, unemployment);    
        this.income = income;
    }    
    getincome(){        
        console.log(`The household income is ${this.income}`);    
    }
}
const canada = new Nation('38 millions', '9.98 million square km', '1.8 trillion' ); 
const usa = new Nation('328 millions', '9.15 million square km', '20.8 trillion' );
const calgary = new City ('4 millions', '0.66 million square km', '105 billion', '11 percent' );
const highwood = new Neighborhood ('50,000', '0.02 million square km', '1 billion', '9 percent', '150,000 per year');
console.log(canada);
console.log(usa);
console.log(calgary);
console.log(highwood);
console.log(canada.geology());
console.log(canada.economy());
console.log(calgary.economy(), calgary.unemRate());
console.log(highwood.getincome());


