function slugify(title){
    const titleArr = title.split(" ");
    for(const word of titleArr){
        console.log(word);
    }
    title.toLowerCase();
    const slugify = titleArr.join("-");
}
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"