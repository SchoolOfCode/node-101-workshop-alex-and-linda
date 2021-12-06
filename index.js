let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
];
  
// console.log(myCollection)

//2c 

function describeItem(name) {
    if (name === myCollection[0].name)
        console.log(myCollection[0].count)
}

// if the parameter is the same as a name in the object
// then console log its object count

