let speech = new SpeechSynthesisUtterance();
speech.lang = "pt";
//speech.text = document.querySelector("textarea").value;
function fala(pergunta,resposta1,resposta2,resposta3,resposta4) {
  if ('speechSynthesis' in window) {
    speech.text = pergunta;
    window.speechSynthesis.speak(speech);
  }else{
    alert("Este browser não suporta voz para texto!");
  }  
}

// Array of all the questions and choices to populate the questions. This might be saved in some JSON file or a database and we would have to read the data in.
var all_questions = [{
  question_string: "Setenta",
  choices: {
    correct: "70",
    wrong: ["14", "6", "17"]
  }
}, {
  question_string: "70",
  choices: {
    correct: "Setenta",
    wrong: ["Seis", "Catorze", "Dezassete"]
  }
}, {
  question_string: "Catorze",
  choices: {
    correct: "14",
    wrong: ["24", "4", "40"]
  }
}, {
  question_string: "14",
  choices: {
    correct: "Catorze",
    wrong: ["Vinte e quatro", "Quatro", "Quarenta"]
  }
}, {
  question_string: "Seis",
  choices: {
    correct: "6",
    wrong: ["60", "16", "70"]
  }
}, {
  question_string: "6",
  choices: {
    correct: "Seis",
    wrong: ["Sessenta", "Dezasseis", "Setenta"]
  }
}, {
  question_string: "Dezassete",
  choices: {
    correct: "17",
    wrong: ["7", "37", "54"]
  }
}, {
  question_string: "17",
  choices: {
    correct: "Dezassete",
    wrong: ["Sete", "Trinta e sete", "Cinquenta e quatro"]
  }
}, {
  question_string: "Vinte e quatro",
  choices: {
    correct: "24",
    wrong: ["40", "66", "32"]
  }
}, {
  question_string: "24",
  choices: {
    correct: "Vinte e quatro",
    wrong: ["Quarenta", "Sessenta e seis", "Trinta e dois"]
  }
}, {
  question_string: "Quatro",
  choices: {
    correct: "4",
    wrong: ["24", "8", "44"]
  }
}, {
  question_string: "4",
  choices: {
    correct: "Quatro",
    wrong: ["Quarenta", "Catorze", "Oito"]
  }
}, {
  question_string: "Quarenta",
  choices: {
    correct: "40",
    wrong: ["4", "38", "44"]
  }
}, {
  question_string: "40",
  choices: {
    correct: "Quarenta",
    wrong: ["Quatro", "Vinte e Quatro", "Oitenta"]
  }
}, {
  question_string: "Dezasseis",
  choices: {
    correct: "16",
    wrong: ["6", "10", "66"]
  }
}, {
  question_string: "16",
  choices: {
    correct: "Dezasseis",
    wrong: ["Vinte e Seis", "Seis", "Dez"]
  }
}, {
  question_string: "Sessenta",
  choices: {
    correct: "60",
    wrong: ["70", "50", "6"]
  }
}, {
  question_string: "60",
  choices: {
    correct: "Sessenta",
    wrong: ["Setenta", "Seis", "Cinquenta"]
  }
}, {
  question_string: "Sete",
  choices: {
    correct: "7",
    wrong: ["17", "6", "70"]
  }
}, {
  question_string: "7",
  choices: {
    correct: "Sete",
    wrong: ["Setenta", "Seis", "Nove"]
  }
}, {
  question_string: "Trinta e sete",
  choices: {
    correct: "37",
    wrong: ["7", "47", "15"]
  }
}, {
  question_string: "37",
  choices: {
    correct: "Trinta e sete",
    wrong: ["Vinte e Sete", "Sete", "Sessenta"]
  }
}, {
  question_string: "Cinquenta e quatro",
  choices: {
    correct: "54",
    wrong: ["34", "15", "45"]
  }
}, {
  question_string: "54",
  choices: {
    correct: "Cinquenta e quatro",
    wrong: ["Trinta e quatro", "Quinze", "Quarenta e cinco"]
  }
}, {
  question_string: "Sessenta e seis",
  choices: {
    correct: "66",
    wrong: ["16", "73", "64"]
  }
}, {
  question_string: "66",
  choices: {
    correct: "Sessenta e seis",
    wrong: ["Dezasseis", "Setenta e três", "Sessenta e quatro"]
  }
}, {
  question_string: "Trinta e dois",
  choices: {
    correct: "32",
    wrong: ["23", "13", "52"]
  }
}, {
  question_string: "32",
  choices: {
    correct: "Trinta e dois",
    wrong: ["Vinte e três", "Treze", "Cinquenta e dois"]
  }
}, {
  question_string: "Oitenta e três",
  choices: {
    correct: "83",
    wrong: ["18", "3", "38"]
  }
}, {
  question_string: "83",
  choices: {
    correct: "Oitenta e três",
    wrong: ["Dezoito", "Três", "Trinta e oito"]
  }
},{
  question_string: "Quarenta e um",
  choices: {
    correct: "41",
    wrong: ["14", "34", "51"]
  }
}, {
  question_string: "41",
  choices: {
    correct: "Quarenta e um",
    wrong: ["Catorze", "Trinta e quatro", "Cinquenta e um"]
  }
}, {
  question_string: "Setenta e cinco",
  choices: {
    correct: "75",
    wrong: ["63", "35", "7"]
  }
}, {
  question_string: "75",
  choices: {
    correct: "Setenta e cinco",
    wrong: ["Sessenta e três", "Trinta e cinco", "Sete"]
  }
}, {
  question_string: "Noventa e oito",
  choices: {
    correct: "98",
    wrong: ["88", "19", "28"]
  }
}, {
  question_string: "98",
  choices: {
    correct: "Noventa e oito",
    wrong: ["Oitenta e oito", "Dezanove", "Vinte e oito"]
  }
}, {
  question_string: "Vinte e nove",
  choices: {
    correct: "29",
    wrong: ["92", "12", "49"]
  }
}, {
  question_string: "29",
  choices: {
    correct: "Vinte e nove",
    wrong: ["Noventa e dois", "Doze", "Quarenta e nove"]
  }
}, {
  question_string: "Quarenta e cinco",
  choices: {
    correct: "45",
    wrong: ["15", "56", "40"]
  }
}, {
  question_string: "45",
  choices: {
    correct: "Quarenta e cinco",
    wrong: ["Quinze", "Cinquenta e seis", "Quarenta"]
  }
}, {
  question_string: "Setenta e um",
  choices: {
    correct: "71",
    wrong: ["17", "67", "38"]
  }
}, {
  question_string: "71",
  choices: {
    correct: "Setenta e um",
    wrong: ["Dezassete", "Sessenta e sete", "Trinta e oito"]
  }
}, {
  question_string: "Oitenta e oito",
  choices: {
    correct: "88",
    wrong: ["18", "80", "44"]
  }
}, {
  question_string: "88",
  choices: {
    correct: "Oitenta e oito",
    wrong: ["Dezoito", "Oitenta", "Quarenta e quatro"]
  }
}, {
  question_string: "Noventa e dois",
  choices: {
    correct: "92",
    wrong: ["29", "72", "96"]
  }
}, {
  question_string: "92",
  choices: {
    correct: "Noventa e dois",
    wrong: ["Vinte e nove", "Setenta e dois", "Noventa e Seis"]
  }
}, {
  question_string: "Sessenta e três",
  choices: {
    correct: "63",
    wrong: ["13", "36", "74"]
  }
}, {
  question_string: "63",
  choices: {
    correct: "Sessenta e três",
    wrong: ["Treze", "Trinta e seis", "Setenta e quatro"]
  }
} ];

var qtd_perguntas = 10;

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
      message = 'Perfeito!'
    } else if (percentage >= .75) {
      message = 'Estiveste bem!'
    } else if (percentage >= .5) {
      message = 'Bom trabalho, tenta melhorar!'
    } else {
      message = 'Estás quase lá, tenta outra vez!'
    }
    $('#quiz-results-message').text(message);
    $('#quiz-results-score').html('Tiveste <b>' + score + '/' + self.questions.length + '</b> questões corretas.');
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

  container.html("<h3 style='color: #BABBD9; font-size: 2em;'><b>Questão " + num_questao + "/" + qtd_perguntas + "</b><p> Combina o número com o seu nome" + "</h3><p><a href='#'><img onclick='fala(\""+this.question_string+"\")' src='../../assets/images/speakerc.svg' width='5%' height='5%' alt='Ouvir pergunta e respostas possíveis'></a><br>");

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
  for (var i = 0; i < all_questions.length; i++) {
    // Create a new Question object
    var question = new Question(all_questions[i].question_string, all_questions[i].choices.correct, all_questions[i].choices.wrong);
    
    // Add the question to the instance of the Quiz object that we created previously
    quiz.add_question(question);
  }

  var newArr = quiz.questions.slice(0, qtd_perguntas);

  quiz.questions = newArr;
  
  // Render the quiz
  var quiz_container = $('#quiz');
  quiz.render(quiz_container);
});