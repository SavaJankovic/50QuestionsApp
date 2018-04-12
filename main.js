function populate() {

  if (kviz.isEnded()) {
    showScores();
  } else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = kviz.getQuestionIndex().text;
    // show options
    var choices = kviz.getQuestionIndex().choices;
    
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    };

    showProgress();
  };
};


function start() {

  document.getElementById('grid').style.display = 'block';
  document.getElementById('start').style.display = 'none';

  document.getElementById('timer').innerHTML = 05 + ":" + 00;

  startTimer();

  function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) {
      m = m - 1
    };

    if (m < 0) {
      alert('Your time has expired, try again!')
      window.location.reload();
    };

    document.getElementById('timer').innerHTML = m + ":" + s;
    setTimeout(startTimer, 1000);
  };

  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {
      sec = "0" + sec
    }; // add zero in front of numbers < 10
    if (sec < 0) {
      sec = "59"
    };
    return sec;
  };

};



function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    kviz.guess(guess);
    populate();
  }
};


function showProgress() {
  var currentQuestionNumber = kviz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + kviz.questions.length;
};

function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + kviz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
  new Question(" Into which sea does the Nile flow?", ["Caspian", "Adriatic", "Mediterranean", "Caribbeasn"], "Mediterranean"),
  new Question("Three continents lie on the Tropic of Capricorn, South America is one, name any of the other two?", ["Europe", "Australia", "South America", "Asia"], "Australia"),
  new Question("In American currency 10 cents make a what?", ["Penny", "Nickel", "Quarter", "Dime"], "Dime"),
  new Question("Afrikaans was developed from which European language?", ["Dutch", "English", "Germanic", "Spanish"], "Dutch"),
  new Question("An Ortanique is a cross between a tangerine and what other fruit?", ["Banana", "Ananas", "Orange", "Kiwi"], "Orange"),
  new Question("What Italian word for 'Scratched Drawing' can be found on walls all over the world?", ["Drawings", "Grafit", "Graffitti", "Painting"], "Graffitti"),
  new Question("What musical features 'Some Enchanted Evening' and 'There Is Nothing Like A Dame'?", ["Casablanca", "Africa", "South Pacific", "Citizen"], "South Pacific"),
  new Question("What was the name of the first manned lunar landing mission in 1969?", ["Apollo 8", "Apollo 9", "Apollo 10", "Apollo 11"], "Apollo 11"),
  new Question("Which boxer was nicknamed 'The Dark Destroyer'?", ["Nigel Benn", "Oliver McCall", "Juan Lazcano", "Ray Mancini"], "Nigel Benn"),
  new Question("What was the name of Ritchie Valens' girlfriend?", ["Ana", "Maria", "Donna", "Anna"], "Donna"),
  new Question("What is the procedure called where an anaesthetic is injected close to the spinal cord?", ["Spinal", "Epidural", "Injection", "Extradural"], "Epidural"),
  new Question("What poisonous oily liquid occurs naturally in tobacco leaves?", ["Nicotine", "Tar", "Arsenic", "Amonnia"], "Nicotine"),
  new Question("Who had his first UK top 10 hit with 'Wichita Lineman'?", ["Glen Cambell", " Jimmy Webb", "Tom T. Hall", "Otis Blackwell"], "Glen Cambell"),
  new Question("Which sign of the Zodiac is represented by the Scales?", ["Virgo", "Scorpio", "Libra", "Taurus"], "Libra"),
  new Question("In which country was Rudyard Kipling born?", ["Pakistan", "China", "India", "Egipat"], "India"),
  new Question("What is the gemstone for September?", ["Opal", "Sapphire", "Topaz", "Spinel"], "Sapphire"),
  new Question("What instrument has been nicknamed the 'Mississippi Saxaphone'?", ["Guitar", "Harmonica", "Viola", "Violin"], "Harmonica"),
  new Question("One and a half litres of champagne is known as a what?", ["Demie", "Magnum", "Bottle", "Balthazar"], "Magnum"),
  new Question("In alphabetical order name the three particles that make up an atom?", ["Electron, Neutron, Proton", "Neutron, Proton, Electron", "Proton, Electron, Neutron", "Neutron ,Electron, Proton"], "Electron, Neutron, Proton"),
  new Question("What is the common name of the' Auora Borealis'?", ["South Light", "Northern Lights", "Southern Lights", "North Lights"], "Northern Lights"),
  new Question(" The Blue Meanies were the enemy of the Beatles in which film.", ["The Green Submarine", "The Dark Submarine", "The Yellow Submarine", "The White Submarine"], "The Yellow Submarine"),
  new Question("What song is most commonly sung to celebrate someone getting a year older?", ["Happy Birthday", "Happy", "Happy Happy", "Birthday"], "Happy Birthday"),
  new Question("Who composed the songs 'Puttin on the ritz', 'I've got my love to keep me warm' and 'White Christmas?", ["Cole Porter", "Frank loesser", "George Gershwin", "Irving Berlin"], "Irving Berlin"),
  new Question("What is the name of the Dutch footballer who transferred from Arsenal to Man Utd in Aug 2012 for £23 million?", ["Robin Van Persie", "Klaas-Jan Huntelaar", "Dennis Bergkamp", "Arjen Robben"], " Robin Van Persie"),
  new Question("How many sides does an icosagon have?", ["12", "14", "18", "20"], "20"),
  new Question("Which large animal is the only creature thought to produce its own sun tan lotion from its natural secretions?", ["Giraffe", "African Bush Elephant", "Hippopotamus", "Elephant Seal"], "Hippopotamus"),
  new Question("In a musical about gangsters, who are with the guys in the title?", ["Balls", "Doors", "Dolls", "Donna"], "Dolls"),
  new Question("Which Greek author was famous for his fables?", ["Homer", "Herodotus", "Euripides", "Aesop"], "Aesop"),
  new Question("Which 1988 western saw Emilio Estevez play 'Billy The Kid' alongside Charlie Sheen and Kiefer Sutherland?", ["Old Guns", "Young Guns", "Good Guns", "West Guns"], "Young Guns"),
  new Question("Which Russian punk band were jailed for two years in Aug 2012 for their anti-Putin protest and inciting hooliganism in an orthodox church?", ["Pussy Riot", "Barto", "DK", "Krasnaya Plesen"], "Pussy Riot"),
  new Question("Which historical region of Greece includes the capital, Athens?", ["Aperantia", "Dolopia", "Attica", "Aetolia"], "Attica"),
  new Question("Glenridding and Pooley Bridge stand at opposite ends of which lake, the 2nd largest in the Lake District?", ["Ullswater", "Urlswater", "Ucswater", "Ulswater"], "Ullswater"),
  new Question("Where in London is there a bronze statue of Charlie Chaplin?", ["Square", "Times Square", "Leicester Square", "London Square"], "Leicester Square"),
  new Question("Who is reported to have played his fiddle while Rome burned?", ["Romul", "Rem", "Nero", "Neron"], "Nero"),
  new Question("What is the name of the actress who played Hilda Ogden in Coronation Street?", ["Jeny Alexander", "Jean Alexander", "Jonny Alexander", "Jan Alexander"], "Jean Alexander"),
  new Question("What is the surname of the inventoe of the worlds first motorcycle?", ["Dimler", "Daimler", "Damer", "Daer"], "Daimler"),
  new Question("Which song from 'Joseph and his technicolour dreamcoat' gave Jason Donovan a No 1 UK hit in 1991?", ["Any dream will do", "dream will do", "Scares", "Nothing"], " Any dream will do"),
  new Question("Which TV show from the '70s and 80's featured Michael Langdon as Charles Ingalls living on a farm with his wife and 4 daughters?", ["Little house on the wather", "Little house", "Little house on the praire", "House"], "Little house on the praire"),
  new Question("In which country did Posh and Becks marry?", ["England", "Ireland", "France", "Italy"], "Ireland"),
  new Question("Which fantasy kingdom was found at the back of the wardrobe and featured Aslan and a white witch?", ["Narnia", "Arnia", "Darnia", "Naria"], "Narnia"),
  new Question("Which planet is Curiosity roving around in the name of science?", ["Mars", "Jupiter", "Pluton", "Neptun"], "Mars"),
  new Question("For which country did the Welshman, Michael Owen, play international football?", ["Ireland", "England", "France", "Germany"], "England"),
  new Question("The Spanish Civil War began in what year?", ["1936", "1935", "1937", "1934"], "1936"),
  new Question("Who was the Spanish surrealist painter best known for his work 'The Persistence of Memory'?", ["Pablo Picaso", "Salvador Dali", "Eko", "Modigiliani"], "Salvador Dali"),
  new Question("What star of the movie Basketball Diaries did not win his first Oscar until 2016??", ["Michael Madson", "Leonardo DiCaprio", "John Travolta", "Al Pacino"], "Leonardo DiCaprio"),
  new Question("Which country won the 2012 UEFA European Championship?", ["Spain", "France", "Italy", "England"], "Spain"),
  new Question("Paella, a famous rice dish, originated in what country?", ["Spain", "France", "Italy", "England"], "Spain"),
  new Question("Grand Central Terminal, Park Avenue, New York is the world's", [" 	largest railway station", "highest railway station", "longest railway station", "None of the above"], " 	largest railway station"),
  new Question("Eritrea, which became the 182nd member of the UN in 1993, is in the continent of", ["Asia", "Africa", "Europe", "Australia"], "Africa"),
  new Question("Hitler party which came into power in 1933 is known as", ["Labour Party", "Nazi Party", "Ku-Klux-Klan", "Democratic Party"], "Nazi Party")


];

// create quiz
var kviz = new Quiz(questions);

// display quiz
populate();
