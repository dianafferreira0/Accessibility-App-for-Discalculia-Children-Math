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
    question_string: "O João precisa de devolver 175€ para a sua mãe e pagar 89€ pela internet de casa. De quanto dinheiro ele precisa ao todo?",
    choices: {
      correct: "264€",
      wrong: ["265€", "304€", "108€"]
    }
  }, {
    question_string: "A família da Maria faz doações a instituições. Este mês eles doaram 566€ a uma instituição contra a fome e 1304€ a uma instituição que ajuda crianças carentes. Quanto eles doaram este mês?",
    choices: {
      correct: "1870€",
      wrong: ["1924€", "2025€", "1802€"]
    }
  }, {
    question_string: "O Joaquim constrói uma torre com 8 blocos. Todos os blocos têm a mesma massa. A massa de 1 bloco é de 10 gramas. Qual é a massa total da torre do Joaquim?",
    choices: {
      correct: "80 gramas",
      wrong: ["60 gramas", "90 gramas", "82 gramas"]
    }
  }, {
    question_string: 'A mãe da Helena colocou 205 mililitros de café numa caneca. Depois, ela acrescentou 25 mililitros de leite no café. Quantos mililitros de líquido no total tem na caneca?',
    choices: {
      correct: "230 mililitros",
      wrong: ["250 mililitros", "180 mililitros", "242 mililitros"]
    }
  }, {
      question_string: 'Identifica a unidade mais adequada para medir a distância da China ao Japão.',
      choices: {
        correct: "Quilômetro",
        wrong: ["Metro", "Centímetro", "Milímetro"]
    }
  }, {
      question_string: 'Qual opção é a mais próxima do comprimento de um relógio de pulso?',
      choices: {
        correct: "20 centímetros",
        wrong: ["20 milímetros", "20 quilômetros", "20 metros"]
    }
  }, {
      question_string: 'Identifica a unidade mais adequada para medir o comprimento de um autocarro escolar.',
      choices: {
        correct: "10 metros",
        wrong: ["10 milímetros", "10 quilômetros", "10 centímetros"]
    }
  }, {
      question_string: 'Qual opção é a mais próxima do comprimento de uma joaninha?',
      choices: {
        correct: "8 milímetros",
        wrong: ["8 metros", "8 quilômetros", "8 centímetros"]
    }
  }, {
      question_string: 'O detergente para roupas vem numa garrafa de 21 mililitros. Cada peça de roupa lavada usa 3 mililitros desse detergente. Quantas peças de roupa podem ser lavadas com uma garrafa desse detergente?',
      choices: {
        correct: "7",
        wrong: ["8", "9", "6"]
    }
  }, {
      question_string: 'O hexágono regular tem 6 lados e um perímetro de 42 cm. Qual é o comprimento de um lado do hexágono?',
      choices: {
        correct: "7 cm",
        wrong: ["6 cm", "10 cm", "5 cm"]
    }
  }, {
    question_string: 'Quanto é o produto de um número par vezes um número par?',
    choices: {
      correct: "Sempre par",
      wrong: ["Sempre ímpar", "Pode ser par ou ímpar", "Zero"]
    }
  }, {
      question_string: 'Um pintor utiliza apenas uma cor em cada pintura. Ele usa as cores na ordem a seguir e, depois, repete começando do início: Vermelho, Azul, Rosa, Verde e Roxo. Qual será a cor da 31ª pintura?',
      choices: {
        correct: "Vermelho",
        wrong: ["Azul", "Roxo", "Verde", "Rosa"]
    }
  }, {
    question_string: 'A Alice precisou de comprar uma televisão nova para casa. Ela optou por pagar a televisão às prestações, escolhendo o valor de 75€ por mês durante 12 meses. Quanto é que ela vai pagar pela TV?',
    choices: {
      correct: "900€",
      wrong: ["800€", "950€", "802€"]
  }
}, {
  question_string: 'Qual é o número natural que se for dividido por 5 resulta em 3 e deixa resto 2?',
  choices: {
    correct: "17",
    wrong: ["15", "16", "20"]
}
}, {
  question_string: 'Completa com o valor correto: 13 x ? = 91.',
  choices: {
    correct: "7",
    wrong: ["6", "17", "8"]
}
}, {
  question_string: 'Qual é o número natural que se for dividido por 6 resulta em 4 e deixa o maior resto possível?',
  choices: {
    correct: "29",
    wrong: ["24", "11", "5"]
}
}, {
  question_string: 'Multiplica: 9 x 50 = ? | 9 x 500 = ? | 9 x 5000 = ? Escolhe a opção correta com os respetivos resultados.',
  choices: {
    correct: "450 | 4500 | 45000",
    wrong: ["250 | 2500 | 25000", "600 | 6000 | 60000", "420 | 4200 | 42000"]
}
}, {
  question_string: 'Quais das expressões a seguir podem ser usadas para encontrar o perímetro de um pentágono regular? Um lado tem 7 cm de comprimento.',
  choices: {
    correct: "7 x 5",
    wrong: ["7 + 7 + 7 + 7", "7 x 7", "7 + 5"]
}
}, {
  question_string: 'A Joana é professora particular e tem vários alunos. Neste mês ela recebeu 168€ de um aluno e 409€ de outro. Quanto é que ela recebeu no final do mês?',
  choices: {
    correct: "577€",
    wrong: ["687€", "509€", "370€"]
}
}, {
  question_string: 'Podemos calcular 15 ÷ 3 organizando 15 bolinhas em 3 linhas iguais. Quantas bolas há em cada linha?',
  choices: {
    correct: "5",
    wrong: ["3", "15", "7"]
}
}, {
  question_string: 'As amigas Bruna e Rita compraram uma caixa de bombons para dividir entre elas. A caixa continha 5 bombons de morango, 4 bombons de caramelo e 3 bombons de cereja. As amigas combinaram cada uma retirar um bombom à vez. Se na primeira retirada a Bruna tirou um bombom de morango, qual a probabilidade da Rita pegar um bombom de caramelo?',
  choices: {
    correct: "4 em 11",
    wrong: ["4 em 12", "12 em 4", "11 em 4"]
}
}, {
  question_string: 'Uma empresa de tecnologia envia 10 monitores de computador de uma vez. A massa total do envio é de 40 quilogramas. Todos os monitores na caixa têm a mesma massa. Qual é a massa de um monitor de computador?',
  choices: {
    correct: "4 quilogramas",
    wrong: ["2 quilogramas", "10 quilogramas", "20 quilogramas"]
}
}, {
  question_string: 'Completa com o valor correto: ? - 13 = 3',
  choices: {
    correct: "16",
    wrong: ["19", "21", "3"]
}
}, {
  question_string: 'O André fez 625 mL de sumo de frutos vermelhos na liquidificadora. Ele deu 320 mL desse sumo para o irmão dele. Quanto sumo sobrou para o André beber?',
  choices: {
    correct: "305 mL",
    wrong: ["300 mL", "605 mL", "25 mL"]
}
}, {
  question_string: 'Multiplica: ? = 300 x 6',
  choices: {
    correct: "1800",
    wrong: ["1900", "306", "600"]
}
}, {
  question_string: 'Um quadrado tem 48 cm de perímetro. Qual é o comprimento dos lados do quadrado?',
  choices: {
    correct: "12 cm",
    wrong: ["8 cm", "4 cm", "16 cm"]
}
}, {
  question_string: 'Multiplica: 90 x 98 = ?',
  choices: {
    correct: "8820",
    wrong: ["6080", "8640", "9008"]
}
}, {
  question_string: 'Um quadrado tem 84 cm de perímetro. Qual é o comprimento dos lados do quadrado?',
  choices: {
    correct: "21 cm",
    wrong: ["20 cm", "24 cm", "80 cm"]
}
}, {
  question_string: 'A Matilde fez 35 bolachas para dar a 7 crianças na paragem de autocarro. Ela deu o mesmo número de bolachas a cada criança. Qual é a equação que nos ajudaria a descobrir quantas bolachas a Matilde deu a cada criança?',
  choices: {
    correct: "35 ÷ 7 = ?",
    wrong: ["35 + 7 = ?", "35 x 7 = ?", "35 - 7 = ?"]
}
}, {
  question_string: 'A Matilde fez 49 bolachas para dar a 7 crianças na paragem de autocarro. Ela deu o mesmo número de bolachas a cada criança. Qual é a equação que nos ajudaria a descobrir quantas bolachas a Matilde deu a cada criança?',
  choices: {
    correct: "7 x ? = 49",
    wrong: ["49 + 7 = ?", "49 x 7 = ?", "7 - 49 = ?"]
}
}, {
  question_string: 'Escolhe a opção que completa por extenso o número: 2125 -> Dois ? cento e vinte e ?',
  choices: {
    correct: "mil | cinco",
    wrong: ["milhões | cinco", "milhões | dois", "mil | dois"]
}
}, {
  question_string: 'Escolhe a opção que completa por extenso o número: 3466 -> Três mil ? e sessenta e ?',
  choices: {
    correct: "quatrocentos | seis",
    wrong: ["quinhentos | quatro", "quarenta | seis", "quarenta | sessenta"]
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
    $('#quiz-results-score').html('Tiveste <b>' + score + '/' + self.questions.length + '</b> questões corretas. <br><a href="./" > Sair </a> <br> <a href="./desafio4ano.html" > Repetir </a>');
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