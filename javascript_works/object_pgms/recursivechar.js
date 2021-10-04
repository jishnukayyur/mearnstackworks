var pattern="ABCABB"
var word_count={}
for(let word of pattern)
{
    if(word in word_count)
    {
        console.log(word," is the first recursive character");
        break;
    }
    else
    {
        word_count[word]=1
    }
}





