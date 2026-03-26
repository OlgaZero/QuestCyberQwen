// ============================================
// МАССИВ ВОПРОСОВ ДЛЯ КВЕСТА
// ============================================
// Структура: 5 этапов, каждый этап содержит 3 вопроса
// Каждый вопрос имеет: текст вопроса, варианты ответов, индекс правильного ответа

const questions = [
  // ============================================
  // ЭТАП 1: Парольная защита
  // ============================================
  [
    {
      // Вопрос 1 этапа 1
      question: "Какой из следующих паролей является самым надежным?",
      // Варианты ответов (индексы: 0, 1, 2)
      answers: ["123456", "password", "P@ssw0rd!2023"],
      // Индекс правильного ответа (2 = третий вариант)
      correct: 2,
    },
    {
      // Вопрос 2 этапа 1
      question: "Какой из следующих методов помогает создать надежный пароль?",
      answers: [
        "Использовать дату рождения",
        "Смешивать буквы, цифры и специальные символы",
        "Использовать одно слово из словаря",
      ],
      correct: 1, // Второй вариант правильный
    },
    {
      // Вопрос 3 этапа 1
      question: "Как часто рекомендуется менять пароли?",
      answers: [
        "Раз в 5 лет",
        "Каждые 3-6 месяцев",
        "Никогда, если он надежный",
      ],
      correct: 1, // Второй вариант правильный
    },
  ],

  // ============================================
  // ЭТАП 2: Фишинг-ловушка
  // ============================================
  [
    {
      question: "Какой из следующих признаков указывает на фишинговое сообщение?",
      answers: [
        "Сообщение содержит много грамматических ошибок",
        "Сообщение пришло от знакомого человека",
        "Сообщение предлагает выиграть приз за выполнение простого задания",
      ],
      correct: 0,
    },
    {
      question: "Какой из следующих способов поможет избежать фишинга?",
      answers: [
        "Игнорировать подозрительные сообщения",
        "Кликать на все ссылки в сообщениях",
        "Использовать один и тот же пароль для всех аккаунтов",
      ],
      correct: 0,
    },
    {
      question: "Если вы получили сообщение с просьбой подтвердить личные данные, что вы должны сделать?",
      answers: [
        "Немедленно ответить на сообщение",
        "Перейти на официальный сайт компании и проверить информацию",
        "Игнорировать сообщение, если оно пришло от незнакомца",
      ],
      correct: 1,
    },
  ],

  // ============================================
  // ЭТАП 3: Безопасный интернет
  // ============================================
  [
    {
      question: "Какое из следующих действий является безопасным при использовании общественного Wi-Fi?",
      answers: [
        "Проверка банковского счета",
        "Использование VPN",
        "Вход в личные аккаунты",
      ],
      correct: 1,
    },
    {
      question: "Какой из следующих способов поможет защитить ваши данные в общественном Wi-Fi?",
      answers: [
        "Использовать открытые сети без пароля",
        "Включить двухфакторную аутентификацию",
        "Отключить антивирус",
      ],
      correct: 1,
    },
    {
      question: "Какой из следующих браузеров считается более безопасным?",
      answers: [
        "Браузер с минимальными обновлениями",
        "Браузер с встроенной защитой от трекеров",
        "Браузер, который не поддерживает расширения",
      ],
      correct: 1,
    },
  ],

  // ============================================
  // ЭТАП 4: Киберугрозы
  // ============================================
  [
    {
      question: "Какой из следующих типов угроз является вирусом?",
      answers: ["Троянская программа", "Спам", "Фишинг"],
      correct: 0,
    },
    {
      question: "Какой из следующих типов вредоносного ПО может шифровать ваши файлы и требовать выкуп?",
      answers: ["Вирус", "Шпионское ПО", "Рансомваре"],
      correct: 2,
    },
    {
      question: "Какой из следующих способов поможет защитить ваш компьютер от вредоносных программ?",
      answers: [
        "Игнорировать обновления системы",
        "Установить антивирусное программное обеспечение",
        "Скачивать программы из непроверенных источников",
      ],
      correct: 1,
    },
  ],

  // ============================================
  // ЭТАП 5: Защита личных данных
  // ============================================
  [
    {
      question: "Какой из следующих способов является лучшим для защиты личной информации в социальных сетях?",
      answers: [
        "Открыто делиться своим местоположением",
        "Настроить параметры конфиденциальности",
        "Принимать всех в друзья",
      ],
      correct: 1,
    },
    {
      question: "Какой из следующих типов информации не следует публиковать в социальных сетях?",
      answers: ["Ваше имя и фамилия", "Адрес вашего дома", "Ваши увлечения"],
      correct: 1,
    },
    {
      question: "Какой из следующих методов поможет защитить ваши аккаунты в социальных сетях?",
      answers: [
        "Использовать один и тот же пароль для всех аккаунтов",
        "Включить двухфакторную аутентификацию",
        "Делать свои аккаунты открытыми для всех",
      ],
      correct: 1,
    },
  ],
];

// ============================================
// ПЕРЕМЕННЫЕ СОСТОЯНИЯ КВЕСТА
// ============================================

// Номер текущего этапа (начинается с 0)
let currentStage = 0;

// Номер текущего вопроса внутри этапа (начинается с 0)
let currentQuestion = 0;

// Счетчик правильных ответов
let score = 0;

// Флаг, показывающий, был ли дан ответ на текущий вопрос
let answered = false;

// ============================================
// ФУНКЦИЯ ОБНОВЛЕНИЯ ПРОГРЕСС-БАРА
// ============================================
function updateProgress() {
  // Общее количество вопросов во всех этапах
  const totalQuestions = questions.length * 3;
  
  // Номер текущего вопроса (с учетом всех этапов)
  const currentQuestionNumber = currentStage * 3 + currentQuestion + 1;
  
  // Вычисляем процент прогресса
  const progress = (currentQuestionNumber / totalQuestions) * 100;
  
  // Обновляем ширину полосы прогресса
  document.getElementById('progressBar').style.width = progress + '%';
  
  // Обновляем текст прогресса
  document.getElementById('progressText').textContent = 
    `${currentQuestionNumber} из ${totalQuestions}`;
}

// ============================================
// ФУНКЦИЯ ЗАГРУЗКИ ВОПРОСА
// ============================================
function loadQuestion() {
  // Сбрасываем флаг ответа для нового вопроса
  answered = false;
  
  // Получаем данные текущего вопроса из массива
  const questionData = questions[currentStage][currentQuestion];
  
  // Устанавливаем текст вопроса в HTML элемент
  document.getElementById("questionText").textContent = questionData.question;
  
  // Устанавливаем название этапа с помощью вспомогательной функции
  document.getElementById("stageTitle").textContent = 
    `Этап ${currentStage + 1}: ${getStageTitle(currentStage)}`;
  
  // Получаем форму с ответами
  const form = document.getElementById("questionForm");
  
  // Очищаем форму от предыдущих вариантов ответов
  form.innerHTML = "";
  
  // Создаем элементы для каждого варианта ответа
  questionData.answers.forEach((answer, index) => {
    // Создаем элемент label для радио-кнопки
    const label = document.createElement("label");
    
    // Вставляем HTML с радио-кнопкой и текстом ответа
    label.innerHTML = `
      <input type="radio" name="answer" value="${index}">
      <span>${answer}</span>
    `;
    
    // Добавляем label в форму
    form.appendChild(label);
  });
  
  // Очищаем поле результата
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "";
  resultDiv.className = "";
  
  // Скрываем кнопку "Продолжить"
  document.getElementById("continueButton").style.display = "none";
  
  // Обновляем прогресс-бар
  updateProgress();
}

// ============================================
// ФУНКЦИЯ ПОЛУЧЕНИЯ НАЗВАНИЯ ЭТАПА
// ============================================
function getStageTitle(stage) {
  // Массив названий для каждого из 5 этапов
  const titles = [
    "Парольная защита",
    "Фишинг-ловушка",
    "Безопасный интернет",
    "Киберугрозы",
    "Защита личных данных",
  ];
  
  // Возвращаем название соответствующего этапа
  return titles[stage];
}

// ============================================
// ФУНКЦИЯ ПРОВЕРКИ ОТВЕТА
// ============================================
function checkAnswer() {
  // Если ответ уже был дан, выходим из функции
  if (answered) return;
  
  // Получаем форму с ответами
  const form = document.getElementById("questionForm");
  
  // Получаем значение выбранного радио-баттона
  const selectedAnswer = form.answer ? form.answer.value : null;
  
  // Получаем элемент для отображения результата
  const resultDiv = document.getElementById("result");
  
  // Проверяем, был ли выбран ответ
  if (selectedAnswer !== null) {
    // Устанавливаем флаг, что ответ дан
    answered = true;
    
    // Сравниваем выбранный ответ с правильным
    const correct = parseInt(selectedAnswer) === 
      questions[currentStage][currentQuestion].correct;
    
    // Если ответ правильный
    if (correct) {
      resultDiv.textContent = "✓ Правильно! Отличная работа!";
      resultDiv.className = "correct";
      score++; // Увеличиваем счет
      
      // Запускаем эффект конфетти
      createConfetti();
    } else {
      // Если ответ неправильный
      const correctAnswer = questions[currentStage][currentQuestion]
        .answers[questions[currentStage][currentQuestion].correct];
      
      resultDiv.textContent = `✗ Неправильно. Правильный ответ: ${correctAnswer}`;
      resultDiv.className = "incorrect";
    }
    
    // Отключаем все радио-кнопки, чтобы нельзя было изменить ответ
    const radios = form.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.disabled = true);
    
    // Показываем кнопку "Продолжить"
    document.getElementById("continueButton").style.display = "block";
  } else {
    // Если ответ не выбран, показываем предупреждение
    resultDiv.textContent = "⚠ Пожалуйста, выберите ответ.";
    resultDiv.className = "incorrect";
  }
}

// ============================================
// ФУНКЦИЯ ПЕРЕХОДА К СЛЕДУЮЩЕМУ ВОПРОСУ
// ============================================
function nextQuestion() {
  // Увеличиваем номер текущего вопроса
  currentQuestion++;
  
  // Проверяем, есть ли еще вопросы в текущем этапе
  if (currentQuestion < questions[currentStage].length) {
    // Загружаем следующий вопрос
    loadQuestion();
  } else {
    // Вопросы этапа закончились, переходим к следующему этапу
    currentStage++;
    currentQuestion = 0; // Сбрасываем номер вопроса
    
    // Проверяем, есть ли еще этапы
    if (currentStage < questions.length) {
      // Загружаем первый вопрос следующего этапа
      loadQuestion();
    } else {
      // Все этапы пройдены, показываем финальные результаты
      showFinalResults();
    }
  }
}

// ============================================
// ФУНКЦИЯ ОТОБРАЖЕНИЯ ФИНАЛЬНЫХ РЕЗУЛЬТАТОВ
// ============================================
function showFinalResults() {
  // Общее количество вопросов
  const totalQuestions = questions.length * 3;
  
  // Вычисляем процент правильных ответов
  const percentage = Math.round((score / totalQuestions) * 100);
  
  // Переменные для сообщения и иконки в зависимости от результата
  let message = '';
  let icon = '';
  
  // Определяем сообщение в зависимости от процента правильных ответов
  if (percentage >= 90) {
    icon = '🏆';
    message = 'Великолепно! Вы эксперт по кибербезопасности!';
  } else if (percentage >= 70) {
    icon = '🥈';
    message = 'Отличный результат! Хорошие знания!';
  } else if (percentage >= 50) {
    icon = '🥉';
    message = 'Неплохо! Но есть куда расти!';
  } else {
    icon = '📚';
    message = 'Рекомендуем изучить материалы по кибербезопасности!';
  }
  
  // Заменяем содержимое контейнера вопроса на финальный экран
  document.querySelector(".question-container").innerHTML = `
    <div class="card text-center">
      <div class="cyber-icon">${icon}</div>
      <h2 class="mb-3">Поздравляем! Вы завершили квест!</h2>
      
      <div class="score-display">
        <div class="score-label">Ваш результат</div>
        <div class="score-number">${score} / ${totalQuestions}</div>
        <div class="score-label">${percentage}% правильных ответов</div>
      </div>
      
      <p class="mb-3" style="font-size: 1.2rem; color: var(--text-secondary);">
        ${message}
      </p>
      
      <div class="badges-container mb-3">
        <span class="badge">✓ Этапов пройдено: ${questions.length}</span>
        <span class="badge">✓ Точность: ${percentage}%</span>
      </div>
      
      <div class="nav-menu">
        <button onclick="restartQuest()" class="button button-primary button-lg">
          <span>🔄</span>
          Пройти заново
        </button>
        <a href="index.html" class="button button-secondary button-lg">
          <span>🏠</span>
          Вернуться в меню
        </a>
      </div>
    </div>
  `;
  
  // Если результат хороший, запускаем конфетти
  if (percentage >= 70) {
    createConfetti();
    setTimeout(createConfetti, 500);
    setTimeout(createConfetti, 1000);
  }
}

// ============================================
// ФУНКЦИЯ ПЕРЕЗАПУСКА КВЕСТА
// ============================================
function restartQuest() {
  // Сбрасываем все переменные состояния
  currentStage = 0;
  currentQuestion = 0;
  score = 0;
  
  // Загружаем первый вопрос
  loadQuestion();
}

// ============================================
// ФУНКЦИЯ СОЗДАНИЯ ЭФФЕКТА КОНФЕТТИ
// ============================================
function createConfetti() {
  // Массив цветов для конфетти
  const colors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
  
  // Создаем 50 элементов конфетти
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      // Создаем элемент div для конфетти
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      
      // Случайная позиция по горизонтали
      confetti.style.left = Math.random() * 100 + 'vw';
      
      // Случайный цвет из массива
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      // Случайная длительность анимации
      confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
      
      // Добавляем конфетти на страницу
      document.body.appendChild(confetti);
      
      // Удаляем конфетти после завершения анимации
      setTimeout(() => confetti.remove(), 4000);
    }, i * 30); // Задержка между созданием каждого элемента
  }
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  // Проверяем, существует ли элемент вопроса (значит мы на странице question.html)
  if (document.getElementById('questionText')) {
    // Загружаем первый вопрос
    loadQuestion();
  }
});