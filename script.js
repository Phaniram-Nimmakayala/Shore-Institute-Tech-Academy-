const texts = [
    "Time is something everyone has, but not everyone uses it well. Each day gives us twenty-four hours, and how we spend those hours decides what we achieve. Many people waste time without noticing it, and later they feel stressed because their work is not finished. Learning to use time wisely can make life easier and more organized. One simple way to manage time is to make a small plan for the day. When you write down what you need to do, it becomes easier to stay focused. Completing even small tasks gives a sense of satisfaction and motivates you to continue. You do not need a long list; a few important tasks are enough. Good habits also help you save time. Reading a little every day, practicing a skill, or taking a short walk can slowly improve your life. These small habits may feel simple, but when followed regularly, they lead to big results. You do not need to be perfect; you just need to be consistent. It is also important to avoid distractions. Phones, social media, and unnecessary conversations can take away a lot of time. When you stay focused and take small breaks between tasks, your mind stays fresh and active. Using time wisely is not difficult. With small steps and good habits, anyone can live a more peaceful and productive life.",
    "The software field is one of the fastest growing areas in the world today. Every company, whether small or large, depends on software to run its daily activities. From mobile apps to online banking, software is present everywhere in our lives. This makes the field full of opportunities for students and professionals who want a stable and successful career. Learning software development requires patience and practice. People start with basic programming languages like Python, Java, or C, and slowly move toward building real applications. With continuous learning, anyone can improve their skills and grow in this field. Teamwork is also very important because most software projects are developed by groups of people working together. The best part of the software field is that it keeps changing. New tools, new technologies, and new trends appear every year, which encourages professionals to stay updated. This makes the job interesting and full of learning. Whether you want to become a developer, tester, data analyst, or cybersecurity expert, the software field offers endless possibilities. With dedication, creativity, and regular effort, anyone can build a strong future in this industry.",
    "Generative AI is a modern technology that can create new content such as text, images, music, and even videos. It works by learning patterns from large amounts of data and then producing results that look similar to human created content. Tools like ChatGPT, image generators, and voice models are examples of generative AI that many people use today. Generative AI saves time and makes many tasks easier. Students use it to understand concepts better, companies use it to improve customer support, and designers use it to create ideas quickly. It helps people work faster and be more creative. However, it must be used carefully because it can also produce incorrect information if not checked properly. This technology also creates new job opportunities. People can work as AI trainers, prompt engineers, data analysts, and researchers. Learning how generative AI works can help students stay ahead in the future. Even simple knowledge of AI tools can make everyday tasks easier. Generative AI is not here to replace people but to support them and help them work smarter.",
    "Girls education is one of the strongest ways to build a better society. When a girl receives proper education, she gains confidence, skills, and the ability to make her own decisions. Educated girls grow into women who can support themselves, take care of their families, and contribute to the development of the nation. Education helps them understand their rights and protects them from discrimination. Many families around the world now understand how important it is to educate their daughters. When girls go to school, they learn not only subjects but also values like teamwork, discipline, and leadership. These qualities help them become successful in whatever career they choose. Educated women also raise educated children, which creates a positive cycle for the future. Girls education also improves the nations economy. When more women become part of the workforce, the country grows faster. It reduces early marriages, increases health awareness, and builds safer communities. Every girl deserves the chance to study and follow her dreams. By supporting girls education, we help both individuals and society grow stronger.",
    "Women safety is an important part of a healthy and respectful society. Every woman has the right to live without fear, whether she is at home, work, or in public places. Ensuring safety gives women the confidence to study, work, travel, and follow their dreams freely. Families, communities, and governments all play a role in creating a safe environment. One of the most important steps is awareness. Women should be educated about safety measures, emergency contacts, and self protection techniques. At the same time, society must teach boys and men to respect women and treat everyone with kindness. Good behavior and proper upbringing help prevent violence before it begins. Technology also supports women safety. Mobile apps, GPS tracking, emergency helplines, and CCTV cameras help reduce risks and provide quick help. Strict laws and fast legal actions are necessary to stop crimes and create fear among offenders. Women safety is not only a womens issue. It is every persons responsibility. When society stands together to protect and respect women, the community becomes stronger, safer, and more peaceful for all.",
    "Helping others stay safe from illegal activities is an important responsibility for every citizen. Illegal activities such as theft, fraud, harassment, or violence can harm people and disturb society. The first step is awareness. When people know what is happening around them, they can take quick action to prevent danger. If someone notices suspicious behavior, it is important to report it immediately to local authorities or emergency helplines. Staying silent can put many people at risk. Even small information can help the police stop a crime before it happens. People should also guide children and students about staying safe both online and offline. Self protection skills, community watch groups, and security awareness programs can help reduce crime. Encouraging people to follow rules, respect others, and stay alert makes the environment safer. Supporting victims, giving correct information, and standing against wrongdoing also help build a peaceful society. Saving others from illegal activities is not only about being brave. It is about being responsible. With unity, awareness, and quick action, we can protect each other and create a safer community for everyone.",
    "Keeping the environment clean is essential for a healthy and happy life. A clean environment protects us from diseases, keeps the air fresh, and helps nature grow without disturbance. When we keep our surroundings tidy, we also protect animals, plants, and natural resources. Clean places make people feel calm, active, and motivated. Simple actions can make a big difference. Throwing waste in dustbins, avoiding plastic bags, saving water, and planting trees are easy steps everyone can follow. When people work together to keep streets, parks, and public areas clean, the entire community benefits. Schools and families also play an important role in teaching children about cleanliness and responsibility. A clean environment also improves the climate and reduces pollution. It helps us breathe better air and drink safe water. When we maintain a clean planet, we also protect the future for the next generation. Keeping the environment clean is not just a duty but a shared responsibility for every human being.",
    "Problem solving skills help people face challenges with confidence. These skills allow us to understand a problem clearly, think about possible solutions, and choose the best way to fix it. Everyone faces difficulties in life, whether in studies, work, or personal situations. Strong problem solving skills make it easier to deal with these situations without stress. The first step in solving any problem is to stay calm. A peaceful mind can think better. The next step is to identify the real issue and gather useful information. Once we understand the problem, we can think of different ways to solve it. Comparing each option helps us pick the most effective solution. Sometimes we may fail, but failure is also a part of learning. It teaches us what went wrong and how to improve. Problem solving also improves creativity and decision making. People with these skills can handle pressure, work better in teams, and achieve their goals faster. With practice and patience, anyone can develop strong problem solving skills and use them in everyday life.",
    "Life often brings critical situations that test our patience and strength. Overcoming problems in such moments requires courage, clear thinking, and emotional control. The first and most important step is to stay calm. Panic can make a situation worse, while a calm mind helps you think clearly. Next, understand the situation fully. Think about what caused the problem and what options you have. Breaking a big problem into smaller steps makes it easier to handle. Asking for support from friends, family, or experts can also make a huge difference. Sharing your thoughts often brings new ideas and solutions. It is important to stay positive and believe that every problem has a solution. Confidence helps you face challenges without fear. Even if things do not work at first, trying again with a new plan can lead to success. Every difficult situation teaches us something valuable and makes us stronger for the future. With patience, clear thinking, and determination, anyone can overcome tough times.",
    "The goal of an IT developer is to create software and applications that make life easier for people and businesses. Developers work to design, build, test, and improve digital systems that we use every day. These systems may include mobile apps, websites, banking platforms, or tools used in hospitals and industries. A good IT developer aims to solve real problems through technology. They focus on writing clean code, reducing errors, and improving performance. Learning new programming languages, staying updated with trends, and understanding user needs are important parts of their job. Developers also work in teams, where communication and cooperation play a big role. The final goal of an IT developer is to deliver reliable and efficient solutions that help users complete tasks quickly and safely. Their work supports businesses, connects people, and helps society move toward a more advanced and digital world. With creativity and dedication, developers can build products that make a positive impact on millions of lives.",
    "Many people worry that AI may replace developers, but the truth is different. AI can help developers work faster, but it cannot fully replace human creativity and logic. AI tools can write simple code, fix errors, or generate ideas, but they still need humans to guide them and make final decisions. Developers understand user needs, business goals, and complex systems much better than AI. They design creative solutions, plan architectures, and solve unique problems that AI cannot handle alone. Instead of replacing developers, AI is becoming a helpful support tool that reduces repetitive work. Future developers will work alongside AI, using it to improve productivity and build better applications. This means developers need to learn new skills, understand AI tools, and stay updated. AI will change the way developers work, but it will not remove their importance. The world will always need skilled developers to think, create, and innovate.",
    "Farmers are the backbone of India because they provide food for the entire nation. They work day and night in fields, facing heat, rain, and many difficulties to grow crops for us. Without farmers, no country can survive because food is the most basic and important need of every human. Indian farmers grow rice, wheat, vegetables, fruits, and many other crops that reach markets and homes every day. Their hard work supports the economy and provides jobs to many people in the agriculture sector. Even though farming is challenging, farmers continue their work with dedication and hope. It is important to respect farmers and support them with better tools, modern technology, and fair prices for their crops. When farmers are strong and happy, the entire nation becomes strong. Their contribution is priceless, and they truly deserve our appreciation and care.",
    "Villages have a natural beauty that makes them peaceful and refreshing. The fresh air, green fields, open spaces, and calm surroundings create a sense of comfort that is rarely found in busy cities. People in villages live close to nature, surrounded by trees, rivers, and clear skies. Life in villages is simple and connected to traditions. People know each other well, help each other in need, and celebrate festivals together. The slow and peaceful lifestyle makes villages a perfect place for relaxation. Many people visit villages to enjoy the beauty of nature and escape from noise and stress. The sounds of birds, the smell of soil, and the sight of sunrise over the fields create unforgettable memories. Villages remind us of our culture, roots, and values. They show us the importance of living a balanced life with nature. The beauty of our villages is truly special and deserves to be protected for future generations."
];

let currentText = "";
let timer = 300;  // Changed from 180 to 300 for 5 minutes
let timerInterval = null;
let gameStarted = false;
let correctChars = 0;
let incorrectChars = 0;
let currentIndex = 0;
let typedHistory = [];

const textDisplay = document.getElementById("textDisplay");
const inputField = document.getElementById("inputField");
const timerDisplay = document.getElementById("timerDisplay");
const wpmStat = document.getElementById("wpmStat");
const accuracyStat = document.getElementById("accuracyStat");
const charsStat = document.getElementById("charsStat");
const restartBtn = document.getElementById("restartBtn");
const newTextBtn = document.getElementById("newTextBtn");
const resultsModal = document.getElementById("resultsModal");

// -------------------- INIT ---------------------
function init() {
    setNewText();
    inputField.value = "";
    inputField.disabled = false;

    gameStarted = false;
    correctChars = 0;
    incorrectChars = 0;
    currentIndex = 0;
    typedHistory = [];

    timer = 0;  // Set timer to 0 initially
    updateStats();
    updateTimer();
    resultsModal.classList.remove("active");
}

// -------------------- TEXT SETUP ---------------------
function setNewText() {
    currentText = texts[Math.floor(Math.random() * texts.length)];
    displayText();
}

function displayText() {
    textDisplay.innerHTML = currentText
        .split("")
        .map((char, index) => {
            return `<span id="char${index}">${char}</span>`;
        })
        .join("");

    highlightCurrentChar();
}

function highlightCurrentChar() {
    const prev = document.querySelector(".current");
    if (prev) prev.classList.remove("current");

    const curr = document.getElementById(`char${currentIndex}`);
    if (curr) curr.classList.add("current");
}

// -------------------- TIMER ---------------------
function startTimer() {
    timer = 300;  // Changed from 180 to 300 for 5 minutes
    updateTimer();
    timerInterval = setInterval(() => {
        timer--;
        updateTimer();

        if (timer <= 0) endGame();
    }, 1000);
}

function updateTimer() {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

// -------------------- CALCULATIONS ---------------------
function calculateWPM() {
    const words = correctChars / 5;
    const minutesPassed = (300 - timer) / 60;  // Updated to 300
    return Math.round(words / Math.max(minutesPassed, 0.01));
}

function calculateAccuracy() {
    return Math.round((correctChars / currentText.length) * 100);
}

function updateStats() {
    wpmStat.textContent = calculateWPM();
    accuracyStat.textContent = `${calculateAccuracy()}%`;
    charsStat.textContent = correctChars;
}

// -------------------- INPUT HANDLING ---------------------
inputField.addEventListener("input", (e) => {
    if (!gameStarted && e.target.value.length > 0) {
        gameStarted = true;
        startTimer();
        textDisplay.classList.add("active");
    }

    const value = e.target.value;
    const isBackspace = typedHistory.length > value.length;

    if (isBackspace) {
        handleBackspace();
    } else {
        handleTyping(value[value.length - 1]);
    }

    highlightCurrentChar();
    updateStats();

    if (currentIndex >= currentText.length) endGame();
});

function handleTyping(typedChar) {
    if (currentIndex >= currentText.length) return;

    const expectedChar = currentText[currentIndex];
    const charElement = document.getElementById(`char${currentIndex}`);

    if (typedChar === expectedChar) {
        charElement.classList.add("correct");
        typedHistory[currentIndex] = true;
        correctChars++;
    } else {
        charElement.classList.add("incorrect");
        typedHistory[currentIndex] = false;
        incorrectChars++;
    }

    currentIndex++;
}

function handleBackspace() {
    if (currentIndex > 0) {
        currentIndex--;

        const charElement = document.getElementById(`char${currentIndex}`);
        charElement.classList.remove("correct", "incorrect");

        if (typedHistory[currentIndex]) {
            correctChars--;
        } else {
            incorrectChars--;
        }

        typedHistory.pop();
    }
}

// -------------------- END GAME ---------------------
function endGame() {
    clearInterval(timerInterval);
    inputField.disabled = true;

    textDisplay.classList.remove("active");

    document.getElementById("finalWpm").textContent = calculateWPM();
    document.getElementById("finalAccuracy").textContent = `${calculateAccuracy()}%`;
    document.getElementById("finalChars").textContent = correctChars;
    document.getElementById("finalErrors").textContent = incorrectChars;

    // ------------------ RESULT MESSAGE LOGIC ------------------
    let finalAccuracy = calculateAccuracy();  // get pure number
    finalAccuracy = parseInt(finalAccuracy); // convert to number

    if (finalAccuracy === 100) {
        output.style.color = "green";
        output.innerHTML = "Task Accomplished ✅";
    }
    else if (finalAccuracy >= 90) {
        output.style.color = "green";
        output.innerHTML = "High level accuracy achieved 😎";
    }
    else if (finalAccuracy >= 80) {
        output.style.color = "green";
        output.innerHTML = "Very close to excellence 🔥";
    }
    else if (finalAccuracy >= 70) {
        output.style.color = "green";
        output.innerHTML = "Solid attempt, keep improving 👌";
    }
    else if (finalAccuracy >= 60) {
        output.style.color = "orange";
        output.innerHTML = "More focus can boost results 😊";
    }
    else if (finalAccuracy >= 50) {
        output.style.color = "orange";
        output.innerHTML = "Not bad, but you can do better 🙌";
        common.style.color = "red";
        common.innerHTML = "Accuracy above 60% is mandatory!";
    }
    else if (finalAccuracy >= 40) {
        output.style.color = "orange";
        output.innerHTML = "Below average, keep practicing 😒";
        common.style.color = "red";
        common.innerHTML = "Accuracy above 60% is mandatory!";
    }
    else {
        output.style.color = "red";
        output.innerHTML = "Accuracy is too low, try again 🥀";
        common.style.color = "red";
        common.innerHTML = "Accuracy above 60% is mandatory!";
    }
    // ----------------------------------------------------------

    resultsModal.classList.add("active");
}

// -------------------- RESTART FUNCTIONS ---------------------
function restartTest() {
    init();
}

restartBtn.addEventListener("click", init);

newTextBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to change the text? Your current progress will be lost.")) {
        init();
    }
});

textDisplay.addEventListener("copy", (e) => e.preventDefault());
textDisplay.addEventListener("mousedown", (e) => e.preventDefault());

/* -----------------------
   MOBILE DETECTION & BLOCK
   ----------------------- */

(function() {
  // Elements
  const mobileOverlay = document.getElementById("mobileOverlay");
  const overlayHideBtn = document.getElementById("overlayHideBtn");
  const appContainer = document.querySelector(".container");
  const footer = document.querySelector("footer");
  const inputsToDisable = [
    document.getElementById("inputField"),
    document.getElementById("restartBtn"),
    document.getElementById("newTextBtn")
  ];

  // Config: threshold in px where we consider the device "mobile/tablet".
  // You can lower or raise this — 900 is a safe laptop breakpoint.
  const WIDTH_THRESHOLD = 900;

  // Heuristic mobile detection: (1) small viewport OR (2) userAgent mobile keywords
  function isMobileLike() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const mobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    const smallWidth = window.innerWidth <= WIDTH_THRESHOLD;
    return mobileUA || smallWidth;
  }

  function showOverlay() {
    if (!mobileOverlay) return;
    mobileOverlay.classList.add("active");
    mobileOverlay.setAttribute("aria-hidden", "false");

    // disable interaction: inputs and buttons
    inputsToDisable.forEach(el => {
      if (el) el.disabled = true;
    });

    // make main content inert for accessibility (hides from screen readers)
    if (appContainer) appContainer.setAttribute("aria-hidden", "true");
    if (footer) footer.setAttribute("aria-hidden", "true");

    // prevent body scrolling
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }

  function hideOverlay() {
    if (!mobileOverlay) return;
    mobileOverlay.classList.remove("active");
    mobileOverlay.setAttribute("aria-hidden", "true");

    inputsToDisable.forEach(el => {
      if (el) el.disabled = false;
    });

    if (appContainer) appContainer.setAttribute("aria-hidden", "false");
    if (footer) footer.setAttribute("aria-hidden", "false");

    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  // initial check (run after DOM is ready)
  function checkDeviceAndToggle() {
    if (isMobileLike()) {
      showOverlay();
    } else {
      hideOverlay();
    }
  }

  // Run on load, resize, orientation change
  window.addEventListener("load", checkDeviceAndToggle);
  window.addEventListener("resize", checkDeviceAndToggle);
  window.addEventListener("orientationchange", checkDeviceAndToggle);

  // Optional override: let teacher/tester continue on mobile if they click 'Open Anyway'
  if (overlayHideBtn) {
    overlayHideBtn.addEventListener("click", () => {
      // hide overlay but keep a short message in console
      hideOverlay();
      console.warn("Opened in mobile mode by user override. App is recommended for laptops only.");
    });
  }

  // Extra: prevent accidental focus to input if overlay active
  document.addEventListener("focusin", (e) => {
    if (mobileOverlay && mobileOverlay.classList.contains("active")) {
      // if focus landed inside the main app, move focus back to overlay
      if (!mobileOverlay.contains(e.target)) {
        e.stopPropagation();
        e.preventDefault();
        overlayHideBtn && overlayHideBtn.focus();
      }
    }
  }, true);

})();
