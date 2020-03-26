class Point{
    constructor(xCoordinate, yCoordinate) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
    }
    toString(){
        return 'Координата X: ' +this.xCoordinate+ ', Координата Y: ' + this.yCoordinate;
    }
    valueOf(){
        return 'Координата X: ' +this.xCoordinate+ ', Координата Y: ' + this.yCoordinate;
    }
    toJSON(){
        return {
           'XCoordinate' : this.xCoordinate,
           'YCoordinate' : this.yCoordinate
        };
    }
}

class Vector extends Point{
    constructor(name, xCoordinate, yCoordinate, zCoordinate) {
        super(xCoordinate, yCoordinate);
        this.nameVector = name;
        this.zCoordinate = zCoordinate;
    }

    get length(){
        return Math.sqrt(Math.pow(this.xCoordinate, 2) + Math.pow(this.yCoordinate, 2) + Math.pow(this.zCoordinate, 2));
    }

    static plus(nameVectorOne, nameVectorTwo) {
        let firstVectorIndex = arrayVectors.findIndex(vector => vector.Name === nameVectorOne);
        let secondVectorIndex = arrayVectors.findIndex(vector => vector.Name === nameVectorTwo);

        let vectorOne, vectorTwo;
        if (firstVectorIndex !== -1 && secondVectorIndex !== -1){
            vectorOne = arrayVectors[firstVectorIndex];
            vectorTwo = arrayVectors[secondVectorIndex];
        }else{
            return 0;
        }

        let newXCoordinate = parseInt(vectorOne.X) + parseInt(vectorTwo.X);
        let newYCoordinate = parseInt(vectorOne.Y) + parseInt(vectorTwo.Y);
        let newZCoordinate = parseInt(vectorOne.Z) + parseInt(vectorTwo.Z);
        let newNameVector = vectorOne.Name + vectorTwo.Name;
        return (new Vector(newNameVector, newXCoordinate, newYCoordinate, newZCoordinate)).toJSON();
    }

    static scalar(nameVectorOne, nameVectorTwo){
        let firstVectorIndex = arrayVectors.findIndex(vector => vector.Name === nameVectorOne);
        let secondVectorIndex = arrayVectors.findIndex(vector => vector.Name === nameVectorTwo);

        let vectorOne, vectorTwo;
        if (firstVectorIndex !== -1 && secondVectorIndex !== -1){
            vectorOne = arrayVectors[firstVectorIndex];
            vectorTwo = arrayVectors[secondVectorIndex];
        }else{
            return 0;
        }

        let multiplicationX = parseInt(vectorOne.X) * parseInt(vectorTwo.X);
        let multiplicationY = parseInt(vectorOne.Y) * parseInt(vectorTwo.Y);
        let multiplicationZ = parseInt(vectorOne.Z) * parseInt(vectorTwo.Z);
        return multiplicationX + multiplicationY + multiplicationZ;
    }

    toString(){
        return 'Название: ' +this.nameVector;
    }

    valueOf(){
        return 'Координата X: ' +this.xCoordinate+ ', Координата Y: ' +this.yCoordinate+ ', Координата Z: ' +this.zCoordinate;
    }

    toJSON() {
        return {
           'X' : this.xCoordinate,
           'Y' : this.yCoordinate,
           'Z' : this.zCoordinate,
           'Name' : this.nameVector
        };
    }
}
let arrayVectors = [];

function createVector(xCoordinate, yCoordinate, zCoordinate, nameVector) {
    let vector = new Vector(nameVector, xCoordinate, yCoordinate, zCoordinate);
    let checkNameVector = arrayVectors.find(vector => vector.Name === nameVector);
    if (checkNameVector !== undefined){
        return arrayVectors;
    }else{
        arrayVectors.push(vector.toJSON());
        return arrayVectors;
    }
}
function getArrayVectors(){
    return arrayVectors;
}

module.exports.createVector = createVector;
module.exports.plus = Vector.plus;
module.exports.scalar = Vector.scalar;
module.exports.update = getArrayVectors;