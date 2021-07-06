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
    question_string: "Escolhe a leitura correta do número 403",
    choices: {
      correct: "Quatrocentas e três unidades",
      wrong: ["Quatro centenas e três dezenas", "Quatrocentas e trinta unidades", "Quarenta e três dezenas"]
    }
  }, {
    question_string: "Escolhe o conjunto que contém dois números ímpares",
    choices: {
      correct: "5 e 13",
      wrong: ["4 e 8", "22 e 23", "12 e 9"]
    }
  }, {
    question_string: "A Ana tem 30 livros e a Joana tem menos 13 livros do que a Ana. Quantos livros tem a Joana? ",
    choices: {
      correct: "17",
      wrong: ["18", "16", "15"]
    }
  }, {
    question_string: 'O Rui tem 59 euros. Comprou uma prenda para o pai que custou 10 euros e uma para a mãe que custou 7 euros. Com quanto dinheiro ficou o Rui?',
    choices: {
      correct: "42 euros",
      wrong: ["41 euros", "43 euros", "50 euros"]
    }
  }, {
    question_string: 'O André tem 20 carrinhos. O André tem o quádruplo dos carrinhos da Ana. Quantos carrinhos tem a Ana?',
    choices: {
      correct: "5 carrinhos",
      wrong: ["4 carrinhos", "10 carrinhos", "20 carrinhos"]
    }
  }, {
    question_string: 'Escolhe a igualdade verdadeira',
    choices: {
      correct: "7 + 9 = 15 + 1",
      wrong: ["50 + 3 = 53 + 3", "20 + 1 = 21 + 2", "24 = 10 + 24"]
    }
  }, {
    question_string: 'Se a Maria tem 12 maçãs e o João tem 1/4 das maçãs da Maria, quantas maçãs tem o João?',
    choices: {
      correct: "3 maçãs",
      wrong: ["5 maçãs", "6 maçãs", "4 maçãs"]
    }
  }, {
    question_string: 'O Francisco tem uma horta com 10 metros de comprimento e 6 metros de largura. Qual é a área da horta do Francisco?',
    choices: {
      correct: "60 metros quadrados",
      wrong: ["40 metros quadrados", "4 metros quadrados", "16 metros quadrados"]
    }
  }, {
    question_string: 'Escolhe a opção que tem os números em ordem crescente',
    choices: {
      correct: "2 < 7 < 20",
      wrong: ["2 > 7 > 20", "7 < 2 < 20", "20 < 2 < 7"]
    }
  }, {
    question_string: 'Escolhe a opção que tem os números em ordem decrescente',
    choices: {
      correct: "86 > 79 > 67",
      wrong: ["79 > 67 > 86", "86 > 67 > 79", "67 > 79 > 86"]
    }
  }, {
    question_string: 'A Andreia e 4 amigos partiram uma tarte em cinco fatias iguais e cada um comeu uma. Quanto da tarte comeu cada um?',
    choices: {
      correct: "1/5",
      wrong: ["1/4", "1/2", "1/6"]
    }
  }, {
    question_string: 'A Marta tem uma caderneta de cromos que precisa de 400 cromos para estar completa. Faltam 45 cromos para completar. Quantos cromos tem a Marta agora?',
    choices: {
      correct: "355 cromos",
      wrong: ["365 cromos", "345 cromos", "400 cromos"]
    }
  }, {
    question_string: 'Em X-6 = 13 que valor é X para a afirmação ser verdadeira?',
    choices: {
      correct: "19",
      wrong: ["16", "7", "6"]
    }
  }, {
    question_string: 'Se 40 é o 1ºtermo de uma sequência, 45 é o 2ºtermo e 50 é o 3ºtermo, qual é o 4ºtermo da sequência?',
    choices: {
      correct: "55",
      wrong: ["60", "45", "65"]
    }
  }, {
    question_string: 'A Joana tem 24 euros. O João tem o dobro do dinheiro da Joana. Quanto dinheiro têm o João e a Joana, no total?',
    choices: {
      correct: "72 euros",
      wrong: ["48 euros", "96 euros", "24 euros"]
    }
  }, {
    question_string: 'A Inês construiu a sequência A, B, C, A, B, C. Escolhe a sequência que representa o padrão da sequência da Inês:',
    choices: {
      correct: "1, 2, 3, 1, 2, 3",
      wrong: ["1, 2, 3, 3, 2, 1", "1, 3, 2, 2, 3, 1", "1, 2, 3, 2, 3, 1"]
    }
  }, {
    question_string: 'O Rodrigo recebeu 50 euros no seu aniversário. Qual opção apresenta a quantia recebida pelo Rodrigo?',
    choices: {
      correct: " 20 € + 10 € + 20 €",
      wrong: ["5 € + 5 € + 5 €", "20 € + 20 €", "20 € + 2 € + 1 €"]
    }
  }, {
    question_string: 'A professora da Diana distribuiu 18 lápis por 3 alunos dando o mesmo número a cada aluno. Com quantos lápis ficou cada aluno?',
    choices: {
      correct: "6 lápis",
      wrong: ["8 lápis", "4 lápis", "7 lápis"]
    }
  }, {
    question_string: 'Na turma da Lara há 4 alunos com olhos azuis, 6 com olhos castanhos e 2 com olhos verdes. Quantos alunos há na turma da Lara, no total?',
    choices: {
      correct: "12 alunos",
      wrong: ["13 alunos", "11 alunos", "10 alunos"]
    }
  }, {
    question_string: 'Na sequência  3, 6, 9, 12 cada termo é maior que o anterior. Que regra é usada para calcular o termo seguinte a partir do termo anterior?',
    choices: {
      correct: "n + 3",
      wrong: ["n", "n - 3", "n + 2"]
    }
  }, {
    question_string: 'Num retângulo com 6 centímetros de comprimento e 3 centímetros de largura qual é o perímetro?',
    choices: {
      correct: "18 centímetros",
      wrong: ["12 centímetros", "9 centímetros", "8 centímetros"]
    }
  }, {
    question_string: 'Quantos vértices tem um paralelepípedo retângulo?',
    choices: {
      correct: "8 vértices",
      wrong: ["6 vértices ", "12 vértices", "4 vértices"]
    }
  }, {
    question_string: 'Numa corrida, a Lara chegou à meta antes da Beatriz e depois da Carolina. Qual das três amigas foi a última a chegar à meta?',
    choices: {
      correct: "A Beatriz",
      wrong: ["A Lara", "A Carolina", "Nenhuma"]
    }
  }, {
    question_string: 'O Manuel tem 21 canecas. Deu 5 canecas ao João e 7 canecas à Ana. Com quantas canecas ficou o Manuel?',
    choices: {
      correct: "9 canecas",
      wrong: ["8 canecas", "7 canecas", "10 canecas"]
    }
  }, {
    question_string: 'Quantas arestas tem um paralelepípedo retângulo?',
    choices: {
      correct: "12 arestas",
      wrong: ["6 arestas ", "8 arestas", "4 arestas"]
    }
  }, {
    question_string: 'A Mariana desenhou um quadrado com 8 centímetros de perímetro. Se todos os lados têm o mesmo comprimento, quanto mede cada lado do quadrado?',
    choices: {
      correct: "2 centímetros",
      wrong: ["4 centímetros ", "8 centímetros", "6 centímetros"]
    }
  }, {
    question_string: 'A Carolina desenhou um quadrado com 16cm quadrados de área. Se todos os lados têm o mesmo comprimento, quanto mede cada lado do quadrado?',
    choices: {
      correct: "4cm quadrados",
      wrong: ["8cm quadrados ", "2cm quadrados", "6cm quadrados"]
    }
  }, {
    question_string: 'Quantas faces tem uma pirâmede pentagonal?',
    choices: {
      correct: "6 faces",
      wrong: ["5 faces", "4 faces", "7 faces"]
    }
  }, {
    question_string: 'Quantos vértices tem uma pirâmede triangular?',
    choices: {
      correct: "4 vértices",
      wrong: ["5 vértices", "3 vértices", "2 vértices"]
    }
  }, {
        question_string: 'Escolhe o valor de posição do algarismo 7 no número 572',
        choices: {
          correct: "70 unidades",
          wrong: ["7 centenas", "7 unidades", "70 dezenas"]
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
    $('#quiz-results-score').html('Tiveste <b>' + score + '/' + self.questions.length + '</b> questões corretas. <br><a href="./" > Sair </a> <br> <a href="./desafio2ano.html" > Repetir </a>');
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