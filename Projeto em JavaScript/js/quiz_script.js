let speech = new SpeechSynthesisUtterance();
speech.lang = "pt";
//speech.text = document.querySelector("textarea").value;
function falarespostas(valor){
  speech.text = "Das seguintes respostas escolhe a correta. "+valor[0]+". "+valor[1]+". "+valor[2]+". "+valor[3];
  window.speechSynthesis.speak(speech);
}
function fala(pergunta,resposta1,resposta2,resposta3,resposta4) {
  if ('speechSynthesis' in window) {
    speech.text = pergunta;
    var lista = [resposta1, resposta2, resposta3, resposta4];
    window.speechSynthesis.speak(speech);
    setTimeout(falarespostas(lista), 5000);
  }else{
    alert("Este browser não suporta voz para texto!");
  }  
}

function shuffle(arra1) {
  var ctr = arra1.length, temp, index;

// While there are elements in the array
  while (ctr > 0) {
// Pick a random index
      index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
      ctr--;
// And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
  }
  return arra1;
}

// Array of all the questions and choices to populate the questions. This might be saved in some JSON file or a database and we would have to read the data in.
var all_questions = [{
  question_string: "Quanto é 2+1?",
  choices: {
    correct: "3",
    wrong: ["1", "2", "4"]
  }
},
{
  question_string: 'Compara a expressão usando >, < ou = 45 ? 30',
  choices: {
    correct: ">",
    wrong: ["<", "="]
  }
}, 
{
  question_string: "Quantas unidades, para além da dezena, tem o número quinze?",
  choices: {
    correct: "Cinco",
    wrong: ["Uma", "Quatro", "Três"]
  }
}, {
  question_string: "O João trouxe 13 berlindes e o Bernardo 18. Quantos berlindes trouxeram ao todo os dois amigos?",
  choices: {
    correct: "31",
    wrong: ["30", "33", "32"]
  }
}, {
  question_string: 'Qual é a diferença entre 14 e 9?',
  choices: {
    correct: "5",
    wrong: ["7", "4", "6"]
  }
},
  {
    question_string: 'Qual é a diferença entre 77 e 24?',
    choices: {
      correct: "53",
      wrong: ["54", "52", "50"]
    }
  },
  {
    question_string: 'Um autocarro transportava 39 pessoas. Na primeira paragem saíram 3 e na segunda 9. Após estas duas paragens quantas pessoas estavam dentro do autocarro?',
    choices: {
      correct: "27",
      wrong: ["30", "28", "26"]
    }
  },
  {
    question_string: 'A Márcia quer comprar um casaco de 57 euros, mas só tem 23. Quanto dinheiro é que precisa de pedir aos pais para conseguir comprar o casaco?',
    choices: {
      correct: "34",
      wrong: ["36", "33", "31"]
    }
  },
  {
    question_string: 'O João vai comprar fruta e leva com ele 3€. O total foi 2€. Quanto de troco vai receber o joão?',
    choices: {
      correct: "1€",
      wrong: ["1,20€", "0.50€", "Não recebe troco"]
    }
},
{
  question_string: 'Na sequência : 10 - x - 30 - 40 - 50. Qual é o valor do x?',
  choices: {
    correct: "20",
    wrong: ["25", "15", "5"]
  }
},
{
  question_string: 'A Maria tem 5 caixas, cada uma com 5 bolas. Quantas bolas tem a Maria?',
  choices: {
    correct: "25",
    wrong: ["20", "30", "15"]
  }
},
{
  question_string: 'A Ana tem um total de 15 bolas. Ela quer dividir estas bolas em caixas de 3 bolas. Quantas caixas precisa a Ana?',
  choices: {
    correct: "5",
    wrong: ["4", "6", "3"]
  }
},
{
  question_string: 'Na sequência : 10 - x - 20 - 25 - 30. Qual é o valor do x?',
  choices: {
    correct: "15",
    wrong: ["12", "13", "17"]
  }
},
{
  question_string: 'Compara usando >, < ou =. 38 ? 40',
  choices: {
    correct: "<",
    wrong: [">", "="]
  }
},
{
  question_string: 'Compara usando >, < ou =. 67 ? 67',
  choices: {
    correct: "=",
    wrong: ["<", ">"]
  }
},
{
  question_string: 'Qual é o número inteiro que vem antes do 99?',
  choices: {
    correct: "98",
    wrong: ["100", "97","101"]
  }
},
{
  question_string: 'A Emília e a Mariana foram ao Zoo. Lá a Mariana viu 5 pinguins e a Emilia viu 7. Quantos pinguins viram no total?',
  choices: {
    correct: "12",
    wrong: ["13", "14", "11"]
  }
},
{
  question_string: 'Compara usando >, < ou =. 38 ? 40',
  choices: {
    correct: "<",
    wrong: [">", "="]
  }
},
{
  question_string: 'Quantos dias existe num fim-de-semana?',
  choices: {
    correct: "2",
    wrong: ["3", "4","5"]
  }
},
{
  question_string: 'O André vai fazer uma viagem de 1 hora. Se ele sair de casa as 15h a que horas chega ao destino?',
  choices: {
    correct: "16h",
    wrong: ["16h30min", "15h30min","17h"]
  }
},
{
  question_string: 'Qual é o número que falta nesta sequência? 0-3-?-9-12',
  choices: {
    correct: "6",
    wrong: ["7", "4","5"]
  }
},
{
  question_string: '10 animais fugiram de um zoo. 3 destes animais eram zebras e o resto eram crocodilos. Quantos crocodilos fugiram do zoo?',
  choices: {
    correct: "7",
    wrong: ["3", "5","6"]
  }
},
{
  question_string: 'Em Marte viviam 15 extraterrestres. Um dia 7 deles decidiram fugir. Quantos extraterrestres ficaram em Marte?',
  choices: {
    correct: "8",
    wrong: ["5", "7","9"]
  }
},
{
  question_string: 'Numa visita de estudo, o José viu 6 cobras venenosas e 8 inofensivas. Quantas cobras viu o José no total?',
  choices: {
    correct: "14",
    wrong: ["13", "6","12"]
  }
},
{
  question_string: 'Qual destas alternativas é igual a 42?',
  choices: {
    correct: "40+1+1",
    wrong: ["43-2", "41+1-1","41+2"]
  }
},
{
  question_string: 'Qual destas alternativas é igual a 33?',
  choices: {
    correct: "35-2",
    wrong: ["35-1+1", "33+1","30+4"]
  }
},
{
  question_string: 'Qual é o número igual a 1 dezena e 14 unidades?',
  choices: {
    correct: "24",
    wrong: ["14", "114","4"]
  }
},
{
  question_string: 'Qual destas alternativas é igual a 39?',
  choices: {
    correct: "10 + 10 + 10 + 9",
    wrong: ["40-2", "38+2","35+3"]
  }
},
{
  question_string: 'Qual destas alternativas é igual a 33?',
  choices: {
    correct: "35-2",
    wrong: ["35-1+1", "33+1","30+4"]
  }
},
{
  question_string: 'Qual é o número igual a 3 dezenas e 24 unidades?',
  choices: {
    correct: "54",
    wrong: ["34", "44","27"]
  }
}];

shuffle(all_questions);

var qtd_perguntas = 5;

var num_questao = 1;

// An object for a Quiz, which will contain Question objects.
var Quiz = function(quiz_name) {
  // Private fields for an instance of a Quiz object.
  this.quiz_name = quiz_name;
  
  // This one will contain an array of Question objects in the order that the questions will be presented.
  this.questions = [];
}

// A function that you can enact on an instance of a quiz object. This function is called add_question() and takes in a Question object which it will add to the questions field.
Quiz.prototype.add_question = function(question) {
  // Randomly choose where to add question
  var index_to_add_question = Math.floor(Math.random() * this.questions.length);
  this.questions.splice(index_to_add_question, 0, question);
}

// A function that you can enact on an instance of a quiz object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the quiz in.
Quiz.prototype.render = function(container) {
  // For when we're out of scope
  var self = this;
  
  // Hide the quiz results modal
  $('#quiz-results').hide();
  
  // Write the name of the quiz
  $('#quiz-name').text(this.quiz_name).hide();

  $('#pontuacao').text('Pontuacao : X').hide();
  
  // Create a container for questions
  var question_container = $('<div>').attr('id', 'question').insertAfter('#quiz-name');
  
  // Helper function for changing the question and updating the buttons
  function change_question() {
    self.questions[current_question_index].render(question_container);
    $('#prev-question-button').prop('disabled', current_question_index === 0);
    $('#next-question-button').prop('disabled', current_question_index === self.questions.length - 1);
    
    // Determine if all questions have been answered
    var all_questions_answered = true;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === null) {
        all_questions_answered = false;
        break;
      }
    }
    $('#submit-button').prop('disabled', !all_questions_answered);
  }
  
  // Render the first question
  var current_question_index = 0;
  change_question();
  
  // Add listener for the previous question button
  $('#prev-question-button').click(function() {
    if (current_question_index > 0) {
      current_question_index--;
      num_questao--;
      change_question();
    }
  });
  
  // Add listener for the next question button
  $('#next-question-button').click(function() {
    if (current_question_index < self.questions.length - 1) {
      current_question_index++;
      num_questao++;
      change_question();
    }
  });
  
  // Add listener for the submit answers button
  $('#submit-button').click(function() {
    // Determine how many questions the user got right
    var score = 0;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === self.questions[i].correct_choice_index) {
        score++;
      }
    }
    
    // Display the score with the appropriate message
    var percentage = score / self.questions.length;
    console.log(percentage);
    var message;
    if (percentage === 1) {
      message = 'Parabéns! Acertaste tudo.'
    } else if (percentage >= .75) {
      message = 'Parabéns!'
    } else if (percentage >= .5) {
      message = 'Parabéns!'
    } else if (percentage >= .25) {
      message = 'Parabéns!'
    } else {
      message = 'Upss. Não desanimes. Continua a tentar.'
    }
    $('#quiz-results-message').text(message);
    $('#quiz-results-score').html('Tiveste <b>' + score + '/' + self.questions.length + '</b> questões corretas. <br><a href="./" > Sair </a> <br> <a href="./desafio.html" > Repetir </a>');
    $('#quiz-results').slideDown();
    $('#quiz button').slideUp();
  });
  
  // Add a listener on the questions container to listen for user select changes. This is for determining whether we can submit answers or not.
  question_container.bind('user-select-change', function() {
    var all_questions_answered = true;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === null) {
        all_questions_answered = false;
        break;
      }
    }
    $('#submit-button').prop('disabled', !all_questions_answered);
  });
}

// An object for a Question, which contains the question, the correct choice, and wrong choices. This block is the constructor.
var Question = function(question_string, correct_choice, wrong_choices) {
  // Private fields for an instance of a Question object.
  this.question_string = question_string;
  this.choices = [];
  this.user_choice_index = null; // Index of the user's choice selection
  
  // Random assign the correct choice an index
  this.correct_choice_index = Math.floor(Math.random() * wrong_choices.length + 1);
  
  // Fill in this.choices with the choices
  var number_of_choices = wrong_choices.length + 1;
  for (var i = 0; i < number_of_choices; i++) {
    if (i === this.correct_choice_index) {
      this.choices[i] = correct_choice;
    } else {
      // Randomly pick a wrong choice to put in this index
      var wrong_choice_index = Math.floor(Math.random(0, wrong_choices.length));
      this.choices[i] = wrong_choices[wrong_choice_index];
      
      // Remove the wrong choice from the wrong choice array so that we don't pick it again
      wrong_choices.splice(wrong_choice_index, 1);
    }
  }
}

// A function that you can enact on an instance of a question object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the question in. This question will "return" with the score when the question has been answered.
Question.prototype.render = function(container) {
  // For when we're out of scope
  var self = this;

  container.html("<h3 style='color: #BABBD9; font-size: 3em;'><b>Questão " + num_questao + "</b></h3><p><a href='#'><img onclick='fala(\""+this.question_string+"\",\""+this.choices[0]+"\",\""+this.choices[1]+"\",\""+this.choices[2]+"\",\""+this.choices[3]+"\")' src='../assets/images/speakerc.svg' width='5%' height='5%' alt='Ouvir pergunta e respostas possíveis'></a><br>");
  
  // Fill out the question label
  var question_string_h2;
  if (container.children('h2').length === 0) {
    question_string_h2 = $('<h2>').appendTo(container);
  } else {
    question_string_h2 = container.children('h2').first();
  }
  question_string_h2.text(this.question_string);
  

  // Clear any radio buttons and create new ones
  if (container.children('input[type=radio]').length > 0) {
    container.children('input[type=radio]').each(function() {
      var radio_button_id = $(this).attr('id');
      $(this).remove();
      container.children('label[for=' + radio_button_id + ']').remove();
    });
  }
  for (var i = 0; i < this.choices.length; i++) {
    // Create the radio button
    var choice_radio_button = $('<input>')
      .attr('id', 'choices-' + i)
      .attr('type', 'radio')
      .attr('name', 'choices')
      .attr('value', 'choices-' + i)
      .attr('checked', i === this.user_choice_index)
      .appendTo(container);
    
    // Create the label
    var choice_label = $('<label>')
      .text(this.choices[i])
      .attr('for', 'choices-' + i)
      .appendTo(container);
  }
  
  // Add a listener for the radio button to change which one the user has clicked on
  $('input[name=choices]').change(function(index) {
    var selected_radio_button_value = $('input[name=choices]:checked').val();
    
    // Change the user choice index
    self.user_choice_index = parseInt(selected_radio_button_value.substr(selected_radio_button_value.length - 1, 1));
    
    // Trigger a user-select-change
    container.trigger('user-select-change');
  });

}

// "Main method" which will create all the objects and render the Quiz.
$(document).ready(function() {
  // Create an instance of the Quiz object 
  var quiz = new Quiz('My Quiz');
  
  // Create Question objects from all_questions and add them to the Quiz object
  for (var i = 0; i < qtd_perguntas; i++) {
    // Create a new Question object
    var question = new Question(all_questions[i].question_string, all_questions[i].choices.correct, all_questions[i].choices.wrong);
    
    // Add the question to the instance of the Quiz object that we created previously
    quiz.add_question(question);
  }
  
  // Render the quiz
  var quiz_container = $('#quiz');
  quiz.render(quiz_container);
});