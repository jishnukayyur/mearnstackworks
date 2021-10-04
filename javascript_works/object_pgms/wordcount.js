var text="hai hello hai hello"
var word_count={}
// var words=text.split(" ")
// for(let word of words)
// {
//     if(word in word_count)
//     {
//         word_count[word]+=1
//     }
//     else
//     {
//         word_count[word]=1
//     }
// }
// console.log(word_count);


text.split(" ").map(word=>word in word_count?word_count[word]+=1:word_count[word]=1)
console.log(word_count);