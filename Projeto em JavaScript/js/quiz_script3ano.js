let speech = new SpeechSynthesisUtterance();
speech.lang = "pt";
//speech.text = document.querySelector("textarea").value;
function functionvoz(valor){
  speech.text = "Das seguintes respostas escolhe a correta. "+valor[0]+". "+valor[1]+". "+valor[2]+". "+valor[3];
  window.speechSynthesis.speak(speech);
}
function fala(pergunta,resposta1,resposta2,resposta3,resposta4) {
  speech.text = pergunta;
  var lista = [resposta1, resposta2, resposta3, resposta4];
  window.speechSynthesis.speak(speech);
  setTimeout(functionvoz(lista), 5000);
  
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
    question_string: "Escolhe o maior número de cinco algarismos que os números: 2, 9, 8, 9 e 5 podem gerar.",
    choices: {
      correct: "99852",
      wrong: ["98925", "89925", "95928"]
    }
  }, {
    question_string: "Escolhe o menor número de quatro algarismos que os números: 7, 4, 6 e 6  podem gerar.",
    choices: {
      correct: "4667",
      wrong: ["7664", "6674", "6764"]
    }
  }, {
    question_string: "Escolhe o menor número de quatro algarismos que os números: 1,7,2 e 1  podem gerar.",
    choices: {
      correct: "1127",
      wrong: ["7211", "2117", "1217"]
    }
  }, {
    question_string: "Escolhe maior número de seis algarismos que os números: 5, 8, 2, 8, 7 e 4 podem gerar.",
    choices: {
      correct: "887542",
      wrong: ["878542", "788254", "245788"]
    }
  }, {
    question_string: "Escolhe o maior número de quatro algarismos que os números: 8,2,3 e 5 podem gerar.",
    choices: {
      correct: "8532",
      wrong: ["2358", "5328", "8235"]
    }
  },{
    question_string: "Escolhe o menor número de cinco algarismos que os números: 4,8,6,7 e 6 podem gerar.",
    choices: {
      correct: "46678",
      wrong: ["87664", "76864", "86674"]
    }
  }, {
    question_string: "Escolhe o único algarismo possível que torne condição verdadeira: 8221 > 822_",
    choices: {
      correct: "0",
      wrong: ["1", "2", "4"]
    }
  }, {
    question_string: "Escolhe o sinal que melhor se adequa: 8618 __ 5458",
    choices: {
      correct: ">",
      wrong: ["<", "="]
    }
  }, {
    question_string: "Escolhe o único algarismo possível que torne condição verdadeira: 9325 < 932_",
    choices: {
      correct: "7",
      wrong: ["4", "5", "0"]
    }
  }, {
    question_string: "Escolhe o sinal que melhor se adequa: 5778 __ 8222",
    choices: {
      correct: "<",
      wrong: [">", "="]
    }
  }, {
    question_string: "Calcula: 270 + 400 = ?",
    choices: {
      correct: "670",
      wrong: ["765", "848", "570"]
    }
  }, {
    question_string: "Calcula: ? = 604 + 50",
    choices: {
      correct: "654",
      wrong: ["289", "100", "750"]
    }
  }, {
    question_string: "Calcula: 10 + 989 = ?",
    choices: {
      correct: "999",
      wrong: ["109", "299", "789"]
    }
  }, {
    question_string: "Calcula: 100 + 702 = ?",
    choices: {
      correct: "802",
      wrong: ["602", "867", "543"]
    }
  }, {
    question_string: "Escolhe a opção que completa o espçao em branco:'29 + 24 é o mesmo que  _ + 23'",
    choices: {
      correct: "30",
      wrong: ["29", "53", "24"]
    }
  }, {
    question_string: "Estima: 398 + 251 ≈ ?",
    choices: {
      correct: "650",
      wrong: ["720", "150", "750"]
    }
  }, {
    question_string: "Estima: 406 + 89 ≈ ?",
    choices: {
      correct: "490",
      wrong: ["550", "310", "600"]
    }
  }, {
    question_string: "Escolhe a opção que completa o espçao em branco: '108 + 621 é o mesmo que  100 + _'",
    choices: {
      correct: "629",
      wrong: ["34", "229", "600"]
    }
  }, {
    question_string: "Escolhe a opção que completa o espçao em branco: '33 + 26 é o mesmo que  _ + 29'",
    choices: {
      correct: "30",
      wrong: ["33", "26", "29"]
    }
  }, {
    question_string: "Escolhe a opção que completa o espçao em branco: '118 + 560 é o mesmo que  100 + _'",
    choices: {
      correct: "578",
      wrong: ["118", "100", "560"]
    }
  }, {
    question_string: "Estima: 605 + 324 ≈ ?",
    choices: {
      correct: "920",
      wrong: ["960", "654", "499"]
    }
  }, {
    question_string: "Calcula: 822 - 300 = ?",
    choices: {
      correct: "522",
      wrong: ["289", "579", "124"]
    }
  }, {
    question_string: "Calcula: ? = 377 − 30",
    choices: {
      correct: "357",
      wrong: ["330", "342", "179"]
    }
  }, {
    question_string: "Calcula: ? = 455 - 49",
    choices: {
      correct: "456",
      wrong: ["298", "342", "334"]
    }
  }, {
    question_string: "Calcula: 287 - 198 = ? ",
    choices: {
      correct: "89",
      wrong: ["38", "76", "12"]
    }
  }, {
    question_string: "O Danilo trouxe 36 cupcakes de baunilha e 49 de chocolate para vender na escola. Depois, um amigo dele trouxe mais 55 cupcakes. No total, quantos cupcakes havia para vender?",
    choices: {
      correct: "90",
      wrong: ["45", "37", "86"]
    }
  }, {
    question_string: "A Maria tem 50 adesivos das estrelas, 33 adesivos da Lua e 11 adesivos do planeta Terra. Quantos adesivos Maria tem no total? ",
    choices: {
      correct: "94",
      wrong: ["86", "67", "23"]
    }
  }, {
    question_string: "Havia 53 carros no estacionamento do cinema. Após o primeiro filme, 29 carros saíram. 7 carros saíram após o segundo filme. Quantos carros restaram no estacionamento depois do segundo filme?",
    choices: {
      correct: "17",
      wrong: ["16", "23", "10"]
    }
  }, {
    question_string: "Uma tartaruga-marinha pôs 39 ovos na praia. 11 partiram-se na segunda-feira. 6 na terça-feira. O resto dos ovos partiram-se na quarta-feira. Quantos ovos se partiram na quarta - feira?",
    choices: {
      correct: "22",
      wrong: ["12", "32", "28"]
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
    $('#quiz-results-score').html('Tiveste <b>' + score + '/' + self.questions.length + '</b> questões corretas. <br><a href="./" > Sair </a> <br> <a href="./desafio3ano.html" > Repetir </a>');
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