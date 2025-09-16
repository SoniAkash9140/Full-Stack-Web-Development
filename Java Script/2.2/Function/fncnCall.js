function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apple,oranges){
    const applePieces=cutFruitPieces(apple);
    const orangePieces=cutFruitPieces(oranges);
    
    const juice=`juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

 console.log(fruitProcessor(2,3));