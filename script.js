

    const TAROT_DECK = [
        { name: "The Fool", meaning: "Beginnings, innocence, spontaneity, a free spirit." }, { name: "The Magician", meaning: "Manifestation, resourcefulness, power, inspired action." }, { name: "The High Priestess", meaning: "Intuition, sacred knowledge, divine feminine, the subconscious mind." }, { name: "The Empress", meaning: "Femininity, beauty, nature, nurturing, abundance." }, { name: "The Emperor", meaning: "Authority, establishment, structure, a father figure." }, { name: "The Hierophant", meaning: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions." }, { name: "The Lovers", meaning: "Love, harmony, relationships, values alignment, choices." }, { name: "The Chariot", meaning: "Control, willpower, success, action, determination." }, { name: "Strength", meaning: "Strength, courage, patience, control, compassion." }, { name: "The Hermit", meaning: "Soul-searching, introspection, being alone, inner guidance." }, { name: "Wheel of Fortune", meaning: "Good luck, karma, life cycles, destiny, a turning point." }, { name: "Justice", meaning: "Justice, fairness, truth, cause and effect, law." }, { name: "The Hanged Man", meaning: "Pause, surrender, letting go, new perspectives." }, { name: "Death", meaning: "Endings, change, transformation, transition." }, { name: "Temperance", meaning: "Balance, moderation, patience, finding meaning." }, { name: "The Devil", meaning: "Bondage, addiction, sexuality, materialism." }, { name: "The Tower", meaning: "Sudden change, upheaval, chaos, revelation, awakening." }, { name: "The Star", meaning: "Hope, faith, purpose, renewal, spirituality." }, { name: "The Moon", meaning: "Illusion, fear, anxiety, subconscious, intuition." }, { name: "The Sun", meaning: "Positivity, fun, warmth, success, vitality." }, { name: "Judgement", meaning: "Judgement, rebirth, inner calling, absolution." }, { name: "The World", meaning: "Completion, integration, accomplishment, travel." },
        { name: "Ace of Wands", meaning: "Inspiration, new opportunities, growth, potential." }, { name: "Two of Wands", meaning: "Future planning, progress, decisions, discovery." }, { name: "Three of Wands", meaning: "Preparation, foresight, enterprise, expansion." }, { name: "Four of Wands", meaning: "Celebration, harmony, marriage, home, community." }, { name: "Five of Wands", meaning: "Conflict, disagreements, competition, tension, diversity." }, { name: "Six of Wands", meaning: "Success, public recognition, progress, self-confidence." }, { name: "Seven of Wands", meaning: "Challenge, competition, perseverance, protective." }, { name: "Eight of Wands", meaning: "Speed, action, air travel, movement, quick decisions." }, { name: "Nine of Wands", meaning: "Resilience, courage, persistence, test of faith, boundaries." }, { name: "Ten of Wands", meaning: "Burden, extra responsibility, hard work, completion." }, { name: "Page of Wands", meaning: "Enthusiasm, exploration, discovery, free spirit." }, { name: "Knight of Wands", meaning: "Energy, passion, inspired action, adventure, impulsiveness." }, { name: "Queen of Wands", meaning: "Courage, confidence, independence, social butterfly, determination." }, { name: "King of Wands", meaning: "Natural-born leader, vision, entrepreneur, honour." },
        { name: "Ace of Cups", meaning: "Love, new relationships, compassion, creativity." }, { name: "Two of Cups", meaning: "Unified love, partnership, mutual attraction." }, { name: "Three of Cups", meaning: "Celebration, friendship, creativity, collaborations." }, { name: "Four of Cups", meaning: "Meditation, contemplation, apathy, re-evaluation." }, { name: "Five of Cups", meaning: "Regret, failure, disappointment, pessimism." }, { name: "Six of Cups", meaning: "Revisiting the past, childhood memories, innocence, joy." }, { name: "Seven of Cups", meaning: "Opportunities, choices, wishful thinking, illusion." }, { name: "Eight of Cups", meaning: "Disappointment, abandonment, withdrawal, escapism." }, { name: "Nine of Cups", meaning: "Contentment, satisfaction, gratitude, wish come true." }, { name: "Ten of Cups", meaning: "Divine love, blissful relationships, harmony, alignment." }, { name: "Page of Cups", meaning: "Creative opportunities, intuitive messages, curiosity, possibility." }, { name: "Knight of Cups", meaning: "Creativity, romance, charm, imagination, beauty." }, { name: "Queen of Cups", meaning: "Compassionate, caring, emotionally stable, intuitive, in flow." }, { name: "King of Cups", meaning: "Emotionally balanced, compassionate, diplomatic." },
        { name: "Ace of Swords", meaning: "Breakthroughs, new ideas, mental clarity, success." }, { name: "Two of Swords", meaning: "Difficult decisions, weighing up options, an impasse, avoidance." }, { name: "Three of Swords", meaning: "Heartbreak, emotional pain, sorrow, grief, hurt." }, { name: "Four of Swords", meaning: "Rest, relaxation, meditation, contemplation, recuperation." }, { name: "Five of Swords", meaning: "Conflict, tension, loss, defeat, win at all costs." }, { name: "Six of Swords", meaning: "Transition, change, rite of passage, releasing baggage." }, { name: "Seven of Swords", meaning: "Betrayal, deception, getting away with something, acting strategically." }, { name: "Eight of Swords", meaning: "Negative thoughts, self-imposed restriction, imprisonment, victim mentality." }, { name: "Nine of Swords", meaning: "Anxiety, worry, fear, depression, nightmares." }, { name: "Ten of Swords", meaning: "Painful endings, deep wounds, betrayal, loss, crisis." }, { name: "Page of Swords", meaning: "New ideas, curiosity, thirst for knowledge, new ways of communicating." }, { name: "Knight of Swords", meaning: "Ambitious, action-oriented, driven to succeed, fast-thinking." }, { name: "Queen of Swords", meaning: "Independent, unbiased judgement, clear boundaries, direct communication." }, { name: "King of Swords", meaning: "Mental clarity, intellectual power, authority, truth." },
        { name: "Ace of Pentacles", meaning: "Manifestation, new financial or career opportunity, prosperity." }, { name: "Two of Pentacles", meaning: "Multiple priorities, time management, prioritisation, adaptability." }, { name: "Three of Pentacles", meaning: "Teamwork, collaboration, learning, implementation." }, { name: "Four of Pentacles", meaning: "Saving money, security, conservatism, scarcity, control." }, { name: "Five of Pentacles", meaning: "Financial loss, poverty, isolation, worry, insecurity." }, { name: "Six of Pentacles", meaning: "Giving, receiving, sharing wealth, generosity, charity." }, { name: "Seven of Pentacles", meaning: "Long-term view, sustainable results, perseverance, investment." }, { name: "Eight of Pentacles", meaning: "Apprenticeship, repetitive tasks, mastery, skill development." }, { name: "Nine of Pentacles", meaning: "Abundance, luxury, self-sufficiency, financial independence." }, { name: "Ten of Pentacles", meaning: "Wealth, financial security, family, long-term success, contribution." }, { name: "Page of Pentacles", meaning: "Manifestation, financial opportunity, skill development." }, { name: "Knight of Pentacles", meaning: "Hard work, productivity, routine, conservatism." }, { name: "Queen of Pentacles", meaning: "Nurturing, practical, providing financially, a working parent." }, { name: "King of Pentacles", meaning: "Wealth, business, leadership, security, discipline, abundance." }
    ];

    // --- Element Selection ---
    const screens = document.querySelectorAll('.screen');
    const startBtn = document.getElementById('start-btn');
    const askQuestionBtn = document.getElementById('ask-quest');
    const drawCardsBtn = document.getElementById('draw-cards');
    const restartBtn = document.getElementById('restart-btn');

    // Input screen elements
    const inputScreen = document.getElementById('input-screen');
    const formSteps = inputScreen.querySelectorAll('[data-step]');
    const nextButtons = inputScreen.querySelectorAll('[data-next-btn]');
    const prevButtons = inputScreen.querySelectorAll('[data-prev-btn]');
    const progressBar = document.getElementById('progress');
    const summaryDiv = document.getElementById('summary');

    // Question screen elements
    const questionInput = document.getElementById('question');

    // Result screen elements
    const cardsContainer = document.getElementById('cards-container');
    const readingDiv = document.getElementById('reading');

    // --- State Management ---
    let currentStep = 0;
    const userData = {};

    // --- Core Functions ---
    function showScreen(screenId) {
        screens.forEach(screen => {
            screen.classList.toggle('active', screen.id === screenId);
        });
    }

    function showStep(stepIndex) {
        formSteps.forEach((step, index) => {
            step.style.display = (index === stepIndex) ? 'block' : 'none';
        });
        updateProgressBar();
    }

    function updateProgressBar() {
        if (!progressBar) return;
        const totalInputSteps = formSteps.length - 1;
        const progressPercentage = totalInputSteps > 1 ? (currentStep / (totalInputSteps - 1)) * 100 : (currentStep > 0 ? 100 : 0);
        progressBar.style.width = `${progressPercentage}%`;
    }

    function shuffleAndDraw(deck, count) {
        const shuffled = [...deck].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function displayCards(cards) {
        cardsContainer.innerHTML = ''; // Clear previous cards
        const positions = ['Past', 'Present', 'Future'];
        cards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card'); // Add a class for styling
            cardElement.innerHTML = `
                <h3>${positions[index]}</h3>
                <h4>${card.name}</h4>
                <p>${card.meaning}</p>
            `;
            cardsContainer.appendChild(cardElement);
        });
    }

    function drawCardsAndGeneratePrompt() {
        const userQuestion = questionInput.value.trim();
        if (!userQuestion) {
            alert("Please enter a question.");
            return;
        }

        // 1. Shuffle and draw cards
        const drawnCards = shuffleAndDraw(TAROT_DECK, 3);

        // 2. Display the cards on the screen
        displayCards(drawnCards);

        // 3. Construct the prompt string with card details
        const finalPrompt = `
            A tarot reading has been requested for a user with the following details:
            - Name: ${userData.name || 'Not provided'}
            - BirthDate: ${userData.birthdate || 'Not provided'}
            - BirthPlace: ${userData.birthplace || 'Not provided'}
            - BirthTime: ${userData.birthtime || 'Not provided'}

            The user's question is: "${userQuestion}"

            The cards drawn for the reading are:
            - Past: ${drawnCards[0].name} (Meaning: ${drawnCards[0].meaning})
            - Present: ${drawnCards[1].name} (Meaning: ${drawnCards[1].meaning})
            - Future: ${drawnCards[2].name} (Meaning: ${drawnCards[2].meaning})

            Please provide an insightful and empathetic tarot reading. Weave the meanings of the three cards together to tell a story that addresses the user's question, covering their past influences, current situation, and potential future path.Answer in a simple language and 60% chance give a negative answer something a tarot reader would say.keep it under 30 words.
        `;




async function askGemini(prompt, apiKey) {
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

  // This is the data structure the API expects
  const payload = {
    contents: [{
      parts: [{
        text: finalPrompt
      }]
    }],

  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error: ${errorData.error.message}`);
    }

    const result = await response.json();

    // Extract the text from the response
    const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
        throw new Error("No text response received from the API.");
    }

    return text;

  } catch (error) {
    console.error("Failed to call Gemini API:", error);
    // Re-throw the error to be handled by the caller
    throw error;
  }
}




const MY_API_KEY = "AIzaSyCjz-2YY8LKjcPdj2daPNf6eIPKN06rrCM";


console.log("Asking Gemini...");

askGemini(finalPrompt, MY_API_KEY)
  .then(response => {
    console.log("--- Gemini's Response ---");
    console.log(response);
     showScreen('result-screen');
    readingDiv.textContent = response;
  })
  .catch(error => {
    console.error("--- An error occurred ---");
    console.error(error.message);
  });



        console.log("--- LLM Prompt Generated ---");
        console.log(finalPrompt);


    }

    // --- Event Listeners ---
    startBtn.addEventListener('click', () => {
        showScreen('input-screen');
        showStep(0);
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentStepDiv = formSteps[currentStep];
            const input = currentStepDiv.querySelector('input');

            if (input && input.value.trim() === '') {
                alert('Please fill in the field before proceeding.');
                return;
            }
            if (input) {
                userData[input.id] = input.value;
            }
            if (currentStep < formSteps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
            if (currentStep === formSteps.length - 1) {
                 summaryDiv.innerHTML = `
                    <p><strong>Name:</strong> ${userData.name || 'N/A'}</p>
                    <p><strong>Birthdate:</strong> ${userData.birthdate || 'N/A'}</p>
                    <p><strong>Birthplace:</strong> ${userData.birthplace || 'N/A'}</p>
                    <p><strong>Birthtime:</strong> ${userData.birthtime || 'N/A'}</p>
                `;
                askQuestionBtn.style.display = 'block';
            }
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    askQuestionBtn.addEventListener('click', () => {
        showScreen('question-screen');
    });

    // Main action button on the question screen
    drawCardsBtn.addEventListener('click', drawCardsAndGeneratePrompt);

    restartBtn.addEventListener('click', () => {
        currentStep = 0;
        for (const key in userData) {
            delete userData[key];
        }
        questionInput.value = '';
        inputScreen.querySelectorAll('input').forEach(input => input.value = '');
        cardsContainer.innerHTML = ''; // Clear cards on restart
        readingDiv.textContent = '';   // Clear reading on restart

        showScreen('start-screen');
    });


