let data = 42;

data = 10;

// typescript Interface
export interface ICar {
    color: string;
    model: string;
    topSpeed?: number;
}

const car1: ICar = {
    color: 'blue',
    model: 'BMW',
}

const car2: ICar = {
    color: '',
    model: 'Tesla',
    topSpeed: 100
}

const multiply = (x: number, y: number) => {
    //return (x * y).toString();  // return string
    x * y;  // retuns void becuase not returning anything
}

export const cars = [car1, car2];