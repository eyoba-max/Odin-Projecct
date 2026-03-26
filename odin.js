const Book={
    title: "Who Stole My Cheese",
    author: "moges aklilu",
    numberOfPages:359,
    read:false,
    info: function(){
        console.log(`${title} by ${author}, ${numberOfPages} pages, not read yet`);
    }
    // console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

}