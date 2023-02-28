// Load the router module (urbanDictionary.js) in the app:
import router from './routes/urbanDictionary.js';

app.use('/api', router);
// The app'll now be able to handle requests to ./routes/urbanDictionary.js

let button = document.querySelector('#newWord');
const twitterButton = document.querySelector('#tweet');

// Fetch data from the local host 5000
fetch('http://localhost:5000/api', options)
    .then(response => response.json())
    .then(response =>
        {
            console.log(response)
            let term = response.list[0];
            wordDisplay.innerHTML = term.word;
            meaningHeader.innerHTML = "Meaning";
            meaningText.innerHTML = term.definition;
            exampleHeader.innerHTML = "Example";
            exampleText.innerHTML = term.example;
    
            setTweetButton(response.json);
        })
    .catch(err => console.error(err));

                     
// The same sequence of code (as mentioned above), but this one is emplemented only when the user clicks Get a new word! button.
button.addEventListener('click',()=>{ 
    fetch('http://localhost:5000/api', options)
        .then(response => response.json())
        .then(response =>
            {
                console.log(response)
                let term = response.list[0]
                wordDisplay.innerHTML = term.word;
                meaningHeader.innerHTML = "Meaning";
                meaningText.innerHTML = term.definition;
                exampleHeader.innerHTML = "Example";
                exampleText.innerHTML = term.example;

                setTweetButton(response.json);                        
                })
        .catch(err => console.error(err));        
})

// Twitter button
function setTweetButton(response) {
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${'Today I learnt a new word: ' + wordDisplay.innerHTML + '. ' + 'Its meaning: ' + meaningText.innerHTML} - Urban Dictionary Random Word`);
}