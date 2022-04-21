// Gets all breed data from an api get request to https://dev.wagmo.io/api/1.0/breeds/
//then puts it in the correct array per species, returning them both as a 2d array.

export async function getBreeds() {

    const response = await fetch('/api/1.0/breeds/?q=proxy');
    const data = await response.json();

    let catBreeds = []
    let dogBreeds = []

    for (let breed of data) {

        //petType0 is dog.
        //petType1 is cat.
        if (breed["petType"] == 1) {
            catBreeds.push(breed['name'])
        }
        else {
            dogBreeds.push(breed['name'])
        }
    }

    let returnArray=[]
    returnArray.push(dogBreeds)
    returnArray.push(catBreeds)
    return returnArray
}
