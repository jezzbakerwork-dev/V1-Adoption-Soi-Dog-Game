(function () {
  "use strict";

  const app = document.getElementById("app");

  const questions = [
    {
      id: 1,
      prompt: {
        en: "Do you like starting your day with energy and fun activities?",
        th: "คุณชอบเริ่มต้นวันด้วยพลังงานและกิจกรรมสนุก ๆ ไหม?"
      },
      helper: {
        en: "Choose true if lively mornings and movement feel natural to you.",
        th: "เลือกจริง หากเช้าที่คึกคักและการได้ขยับตัวเป็นสิ่งที่เหมาะกับคุณ"
      }
    },
    {
      id: 2,
      prompt: {
        en: "Do you prefer staying home on weekends instead of going out?",
        th: "คุณชอบอยู่บ้านในวันหยุดมากกว่าการออกไปข้างนอกไหม?"
      },
      helper: {
        en: "Choose true if home feels more restful than a busy weekend.",
        th: "เลือกจริง หากการอยู่บ้านทำให้คุณรู้สึกสบายใจกว่าการออกไปใช้เวลานอกบ้าน"
      }
    },
    {
      id: 3,
      prompt: {
        en: "Do you have enough daily time to play with and train a pet?",
        th: "คุณมีเวลาในแต่ละวันพอที่จะเล่นและฝึกสัตว์เลี้ยงไหม?"
      },
      helper: {
        en: "Choose true if regular time for interaction and guidance feels realistic.",
        th: "เลือกจริง หากคุณสามารถให้เวลาอย่างสม่ำเสมอสำหรับการเล่นและการฝึกได้"
      }
    },
    {
      id: 4,
      prompt: {
        en: "Do you enjoy challenges and unpredictability?",
        th: "คุณชอบความท้าทายและสิ่งที่คาดเดาไม่ได้ไหม?"
      },
      helper: {
        en: "Choose true if surprises and spontaneity feel fun to you.",
        th: "เลือกจริง หากคุณสนุกกับความไม่แน่นอนและความตื่นเต้นที่เกิดขึ้นระหว่างทาง"
      }
    },
    {
      id: 5,
      prompt: {
        en: "Are you someone who likes routine and organisation?",
        th: "คุณเป็นคนที่ชอบความเป็นระเบียบและการใช้ชีวิตตามแผนไหม?"
      },
      helper: {
        en: "Choose true if structure and rhythm help you feel at ease.",
        th: "เลือกจริง หากตารางชีวิตและความเป็นระบบทำให้คุณรู้สึกมั่นคง"
      }
    },
    {
      id: 6,
      prompt: {
        en: "Can you handle a young pet's energy and mischief?",
        th: "คุณรับมือกับพลังงานและความซุกซนของสัตว์อายุน้อยได้ไหม?"
      },
      helper: {
        en: "Choose true if playful chaos and learning stages feel manageable.",
        th: "เลือกจริง หากคุณมีความอดทนพอกับช่วงวัยที่ทั้งเล่นเยอะและกำลังเรียนรู้"
      }
    },
    {
      id: 7,
      prompt: {
        en: "Do you see pet care as giving love more than training?",
        th: "คุณมองว่าการดูแลสัตว์เลี้ยงคือการให้ความรักมากกว่าการฝึกฝนไหม?"
      },
      helper: {
        en: "Choose true if emotional connection matters more to you than discipline.",
        th: "เลือกจริง หากความรักและความผูกพันสำคัญกับคุณมากกว่าการฝึกให้เป็นระเบียบ"
      }
    },
    {
      id: 8,
      prompt: {
        en: "Do you find too much noise or movement tiring?",
        th: "คุณรู้สึกว่าเสียงหรือความเคลื่อนไหวเยอะ ๆ ทำให้เหนื่อยไหม?"
      },
      helper: {
        en: "Choose true if quiet spaces help you feel most comfortable.",
        th: "เลือกจริง หากบรรยากาศที่สงบและไม่วุ่นวายทำให้คุณสบายใจกว่า"
      }
    },
    {
      id: 9,
      prompt: {
        en: "Have you had pets before?",
        th: "คุณเคยมีประสบการณ์เลี้ยงสัตว์มาก่อนหรือไม่?"
      },
      helper: {
        en: "Choose true if you already have experience living with animals.",
        th: "เลือกจริง หากคุณเคยใช้ชีวิตร่วมกับสัตว์เลี้ยงมาก่อน"
      }
    },
    {
      id: 10,
      prompt: {
        en: "Are you patient and calm most of the time?",
        th: "โดยทั่วไปคุณเป็นคนใจเย็นและอดทนไหม?"
      },
      helper: {
        en: "Choose true if your energy is usually steady and reassuring.",
        th: "เลือกจริง หากคุณมักมีอารมณ์นิ่งและให้ความรู้สึกปลอดภัยกับคนรอบตัว"
      }
    },
    {
      id: 11,
      prompt: {
        en: "Do you spend more time at home than travelling overnight?",
        th: "คุณใช้เวลาอยู่บ้านมากกว่าการเดินทางค้างคืนไหม?"
      },
      helper: {
        en: "Choose true if your lifestyle is mostly home-based and consistent.",
        th: "เลือกจริง หากชีวิตประจำวันของคุณค่อนข้างอยู่กับบ้านและมีความสม่ำเสมอ"
      }
    },
    {
      id: 12,
      prompt: {
        en: "Do you prefer things calm and steady rather than fast-paced?",
        th: "คุณชอบให้สิ่งต่าง ๆ ดำเนินไปอย่างสงบและมั่นคงมากกว่ารวดเร็วไหม?"
      },
      helper: {
        en: "Choose true if gentle routines suit you better than constant momentum.",
        th: "เลือกจริง หากคุณรู้สึกดีกับจังหวะชีวิตที่ค่อยเป็นค่อยไปมากกว่าความเร่งรีบ"
      }
    },
    {
      id: 13,
      prompt: {
        en: "Do you enjoy teaching your pet new things?",
        th: "คุณสนุกกับการสอนสิ่งใหม่ ๆ ให้สัตว์เลี้ยงไหม?"
      },
      helper: {
        en: "Choose true if training and helping a pet learn sounds rewarding.",
        th: "เลือกจริง หากคุณรู้สึกว่าการฝึกและเห็นสัตว์เลี้ยงเรียนรู้เป็นเรื่องที่น่าภูมิใจ"
      }
    },
    {
      id: 14,
      prompt: {
        en: "Do you prefer calm pets over energetic ones?",
        th: "คุณชอบสัตว์เลี้ยงที่สงบมากกว่าสัตว์ที่กระตือรือร้นไหม?"
      },
      helper: {
        en: "Choose true if you imagine a quieter companion rather than a whirlwind.",
        th: "เลือกจริง หากคุณอยากได้เพื่อนที่อยู่ด้วยกันแบบนิ่ง ๆ มากกว่าคึกคักตลอดเวลา"
      }
    },
    {
      id: 15,
      prompt: {
        en: "Would you rather have a quiet companion than one that always wants to play?",
        th: "คุณอยากได้เพื่อนเงียบ ๆ มากกว่าสัตว์ที่อยากเล่นตลอดเวลาไหม?"
      },
      helper: {
        en: "Choose true if companionship and calmness matter more than constant play.",
        th: "เลือกจริง หากความอบอุ่นและความสงบสำคัญกับคุณมากกว่าการเล่นไม่หยุด"
      }
    }
  ];

  const results = [
    {
      animal: "Cat",
      min: 0,
      max: 4,
      image: "assets/Cats Studio Photo_X'Mas Theme (11).jpg",
      label: { en: "Cat", th: "แมวโต" },
      headline: { en: "Quiet comfort suits you best.", th: "ความสบายแบบสงบ ๆ เหมาะกับคุณที่สุด" },
      meaning: {
        en: "You prefer calm, simple living and do not need a lot of activity. A gentle, independent older cat may feel like the right emotional fit.",
        th: "คุณชอบชีวิตที่สงบ เรียบง่าย และไม่ต้องการกิจกรรมมาก แมวโตที่อ่อนโยนและเป็นตัวของตัวเองอาจเหมาะกับจังหวะชีวิตของคุณ"
      },
      ctaUrl: "https://www.soidog.org/th/adopt-a-cat",
      ctaLabel: { en: "Explore cats", th: "ดูแมวที่พร้อมรับเลี้ยง" }
    },
    {
      animal: "Dog",
      min: 5,
      max: 7,
      image: "assets/Dogs 05SS_Dendang (7).jpg",
      label: { en: "Dog", th: "สุนัขโต" },
      headline: { en: "Warm, steady companionship feels right.", th: "ความสัมพันธ์ที่อบอุ่นและมั่นคงเหมาะกับคุณ" },
      meaning: {
        en: "You are calm and responsible, enjoying a slower but loving lifestyle. A balanced adult dog may be a strong match for your pace.",
        th: "คุณเป็นคนใจเย็นและรับผิดชอบ ชอบชีวิตที่ไม่เร่งรีบแต่เต็มไปด้วยความอบอุ่น สุนัขโตที่สมดุลอาจเหมาะกับคุณมาก"
      },
      ctaUrl: "https://www.soidog.org/adopt-a-dog",
      ctaLabel: { en: "Explore dogs", th: "ดูสุนัขที่พร้อมรับเลี้ยง" }
    },
    {
      animal: "Kitten",
      min: 8,
      max: 11,
      image: "assets/Kittens Nunto (11).jpg",
      label: { en: "Kitten", th: "ลูกแมว" },
      headline: { en: "You have playful energy with heart.", th: "คุณมีพลังที่สดใสและอบอุ่นในเวลาเดียวกัน" },
      meaning: {
        en: "You are cheerful and energetic, but not overly chaotic. Warmth, affection, and a little spark point toward kitten energy.",
        th: "คุณเป็นคนร่าเริง มีพลัง แต่ไม่วุ่นวายเกินไป ความอบอุ่น ความรัก และความสดใสเล็ก ๆ เข้ากับพลังของลูกแมวได้ดี"
      },
      ctaUrl: "https://www.soidog.org/th/adopt-a-cat",
      ctaLabel: { en: "Explore kittens and cats", th: "ดูลูกแมวและแมว" }
    },
    {
      animal: "Puppy",
      min: 12,
      max: 15,
      image: "assets/Puppies -12SS_Peter Pan (4) (1).jpg",
      label: { en: "Puppy", th: "ลูกสุนัข" },
      headline: { en: "You are built for high-energy connection.", th: "คุณเหมาะกับความสัมพันธ์ที่มีพลังและการมีส่วนร่วมสูง" },
      meaning: {
        en: "You enjoy movement, activities, and constant interaction. Puppy energy may suit you best if you are ready for the time and commitment it needs.",
        th: "คุณชอบการเคลื่อนไหว กิจกรรม และการมีปฏิสัมพันธ์อยู่เสมอ พลังแบบลูกสุนัขอาจเหมาะกับคุณ หากคุณพร้อมสำหรับเวลาและความทุ่มเทที่ต้องใช้"
      },
      ctaUrl: "https://www.soidog.org/adopt-a-dog",
      ctaLabel: { en: "Explore puppies and dogs", th: "ดูลูกสุนัขและสุนัข" }
    }
  ];

  const copy = {
    language: {
      eyebrow: { en: "Choose language", th: "เลือกภาษา" },
      title: { en: "Which animal suits you best?", th: "สัตว์แบบไหนเหมาะกับคุณที่สุด?" },
      body: {
        en: "Start by choosing your language. Then swipe through the game to discover whether your energy feels closer to cat, dog, kitten, or puppy.",
        th: "เริ่มต้นด้วยการเลือกภาษา แล้วปัดตอบคำถามในเกมเพื่อดูว่าพลังของคุณใกล้กับแมว สุนัข ลูกแมว หรือ ลูกสุนัขมากที่สุด"
      },
      thai: { en: "ไทย", th: "ไทย" },
      english: { en: "English", th: "English" }
    },
    hero: {
      eyebrow: { en: "Soi Dog game", th: "เกม Soi Dog" },
      title: { en: "Which animal suits you best?", th: "สัตว์แบบไหนเหมาะกับคุณที่สุด?" },
      lede: {
        en: "Swipe through 15 quick questions and discover which animal energy feels most like you today.",
        th: "ปัดตอบ 15 คำถามสั้น ๆ เพื่อดูว่าพลังแบบสัตว์ชนิดไหนใกล้เคียงกับคุณที่สุดในวันนี้"
      },
      changeLanguage: { en: "Change language", th: "เปลี่ยนภาษา" }
    },
    adoption: {
      eyebrow: { en: "Why adoption matters", th: "ทำไมการรับเลี้ยงจึงสำคัญ" },
      title: { en: "A second chance changes everything", th: "โอกาสครั้งที่สองเปลี่ยนชีวิตได้" },
      body: {
        en: "Adoption gives rescued dogs safe, loving homes, frees Soi Dog's shelter space and resources for more animals in need, and helps prove that every street dog deserves a second chance.",
        th: "การรับเลี้ยงช่วยให้สุนัขที่ได้รับการช่วยเหลือมีบ้านที่ปลอดภัยและอบอุ่น เปิดพื้นที่และทรัพยากรในศูนย์พักพิงของ Soi Dog เพื่อช่วยสัตว์ตัวอื่นที่ยังต้องการความช่วยเหลือ และช่วยยืนยันว่าหมาจรทุกตัวสมควรได้รับโอกาสครั้งที่สอง"
      }
    },
    tone: {
      eyebrow: { en: "Gentle guidance", th: "คำแนะนำแบบอ่อนโยน" },
      title: { en: "This is a fun personality guide", th: "นี่คือเกมแนะแนวบุคลิกภาพ" },
      paragraphOne: {
        en: "The result is meant to feel encouraging, not absolute. It is a light way to explore what kind of animal energy you may connect with.",
        th: "ผลลัพธ์นี้ออกแบบมาเพื่อให้กำลังใจ ไม่ใช่คำตัดสินตายตัว เป็นวิธีสนุก ๆ ในการสำรวจว่าคุณอาจเชื่อมโยงกับพลังแบบสัตว์ชนิดไหน"
      },
      paragraphTwo: {
        en: "Every result links directly to Soi Dog adoption pages so you can keep exploring after the quiz.",
        th: "ทุกผลลัพธ์จะเชื่อมไปยังหน้าการรับเลี้ยงของ Soi Dog โดยตรง เพื่อให้คุณสำรวจต่อได้ทันทีหลังจบเกม"
      }
    },
    progress: {
      eyebrow: { en: "Progress", th: "ความคืบหน้า" },
      score: { en: "Score", th: "คะแนน" },
      hint: {
        en: "Use the buttons, keyboard arrows, or drag the card left and right.",
        th: "ใช้ปุ่ม ลูกศรบนคีย์บอร์ด หรือ ลากการ์ดไปทางซ้ายและขวาได้"
      },
      complete: { en: "Complete", th: "ครบแล้ว" },
      question: { en: "Question", th: "ข้อที่" },
      questionsSuffix: { en: "questions", th: "ข้อ" }
    },
    quiz: {
      trueLabel: { en: "True", th: "จริง" },
      falseLabel: { en: "False", th: "ไม่จริง" },
      undo: { en: "Undo", th: "ย้อนกลับ" },
      swipeLeft: { en: "Swipe left", th: "ปัดซ้าย" },
      swipeRight: { en: "Swipe right", th: "ปัดขวา" },
    },
    result: {
      eyebrow: { en: "Your result", th: "ผลลัพธ์ของคุณ" },
      yourScore: { en: "Your score", th: "คะแนนของคุณ" },
      playAgain: { en: "Play again", th: "เล่นอีกครั้ง" },
      footnote: {
        en: "Follow the link if you would like to explore real Soi Dog adoption pages next.",
        th: "กดลิงก์ได้ทันที หากคุณอยากสำรวจหน้ารับเลี้ยงจริงของ Soi Dog ต่อ"
      }
    }
  };

  const state = {
    language: null,
    answers: [],
    drag: { active: false, startX: 0, startY: 0, currentX: 0, currentY: 0 }
  };

  function t(text, language) {
    return text[language];
  }

  function scoreAnswers() {
    return state.answers.reduce((total, answer) => total + (answer ? 1 : 0), 0);
  }

  function getResult(score) {
    return results.find((item) => score >= item.min && score <= item.max);
  }

  function getProgressLabel(language) {
    if (state.answers.length >= questions.length) {
      return `${t(copy.progress.complete, language)} / ${questions.length} ${t(copy.progress.questionsSuffix, language)}`;
    }

    return `${t(copy.progress.question, language)} ${state.answers.length + 1} / ${questions.length}`;
  }

  function answer(value) {
    if (!state.language || state.answers.length >= questions.length) return;
    state.answers.push(Boolean(value));
    render();
  }

  function undo() {
    if (!state.answers.length) return;
    state.answers.pop();
    render();
  }

  function restart() {
    state.answers = [];
    render();
  }

  function changeLanguage() {
    state.language = null;
    state.answers = [];
    render();
  }

  function renderLanguagePicker() {
    return `
      <section class="language-screen">
        <div class="panel language-card">
          <p class="eyebrow">${t(copy.language.eyebrow, "en")}</p>
          <h1>${t(copy.language.title, "en")}</h1>
          <p class="language-copy">${t(copy.language.body, "en")}</p>
          <div class="language-grid">
            <button class="language-option" type="button" data-language="th" aria-label="Select Thai">
              <span class="language-option__label">${t(copy.language.thai, "th")}</span>
              <span class="flag flag--thai" aria-hidden="true"></span>
            </button>
            <button class="language-option" type="button" data-language="en" aria-label="Select English">
              <span class="language-option__label">${t(copy.language.english, "en")}</span>
              <span class="flag flag--uk" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </section>
    `;
  }

  function renderQuizCard(language, question) {
    const dragX = state.drag.active ? state.drag.currentX - state.drag.startX : 0;
    const dragY = state.drag.active ? state.drag.currentY - state.drag.startY : 0;
    const rotation = dragX / 24;
    const falseOpacity = Math.max(0, Math.min(1, -dragX / 100));
    const trueOpacity = Math.max(0, Math.min(1, dragX / 100));

    return `
      <section class="quiz-wrap">
        <article
          class="quiz-card"
          data-role="quiz-card"
          aria-label="${language === "th" ? `ข้อที่ ${question.id}` : `Question ${question.id}`}"
          style="transform: translate3d(${dragX}px, ${dragY}px, 0) rotate(${rotation}deg);"
        >
          <div class="quiz-header">
            <p class="eyebrow">${language === "th" ? `ข้อที่ ${question.id}` : `Question ${question.id}`}</p>
            <div class="swipe-zone" aria-hidden="true">
              <span class="swipe-stamp swipe-stamp--left" style="opacity:${falseOpacity};">${t(copy.quiz.falseLabel, language)}</span>
              <span class="swipe-stamp swipe-stamp--right" style="opacity:${trueOpacity};">${t(copy.quiz.trueLabel, language)}</span>
            </div>
          </div>
          <div class="quiz-body">
            <h2>${t(question.prompt, language)}</h2>
            <p>${t(question.helper, language)}</p>
          </div>
          <div class="quiz-legend">
            <div>
              <strong>${t(copy.quiz.swipeLeft, language)}</strong>
            </div>
            <div>
              <strong>${t(copy.quiz.swipeRight, language)}</strong>
            </div>
          </div>
        </article>
        <div class="actions-bar">
          <button class="action-button action-button--muted" type="button" data-action="undo" ${state.answers.length ? "" : "disabled"}>
            ${t(copy.quiz.undo, language)}
          </button>
          <button class="action-button action-button--ghost" type="button" data-action="false">${t(copy.quiz.falseLabel, language)}</button>
          <button class="action-button action-button--primary" type="button" data-action="true">${t(copy.quiz.trueLabel, language)}</button>
        </div>
      </section>
    `;
  }

  function renderGame(language) {
    const score = scoreAnswers();
    const complete = state.answers.length >= questions.length;
    const result = complete ? getResult(score) : null;
    const question = complete ? null : questions[state.answers.length];
    const progressPercent = Math.min(100, (state.answers.length / questions.length) * 100);

    const mainContent = complete
      ? `
        <section class="panel result-card">
          <div class="result-media">
            <img src="${result.image}" alt="${t(result.label, language)} result image" />
          </div>
          <p class="eyebrow">${t(copy.result.eyebrow, language)}</p>
          <h2>${t(result.label, language)}</h2>
          <p class="result-score">${t(copy.result.yourScore, language)}: ${score} / ${questions.length}</p>
          <p class="result-headline">${t(result.headline, language)}</p>
          <div class="result-body"><p>${t(result.meaning, language)}</p></div>
          <div class="result-actions">
            <a class="result-link" href="${result.ctaUrl}" target="_blank" rel="noreferrer">${t(result.ctaLabel, language)}</a>
            <button class="action-button action-button--ghost" type="button" data-action="restart">${t(copy.result.playAgain, language)}</button>
          </div>
          <p class="result-footnote">${t(copy.result.footnote, language)}</p>
        </section>
      `
      : renderQuizCard(language, question);

    return `
      <div class="app-shell">
        <header class="panel hero">
          <div>
            <p class="eyebrow">${t(copy.hero.eyebrow, language)}</p>
            <h1>${t(copy.hero.title, language)}</h1>
            <p class="hero__lede">${t(copy.hero.lede, language)}</p>
          </div>
          <div class="hero__meta">
            <button class="meta-button" type="button" data-action="change-language">${t(copy.hero.changeLanguage, language)}</button>
          </div>
        </header>
        <div class="game-layout">
          <aside class="panel sidebar sidebar--left">
            <div class="adoption-mark" aria-hidden="true">
              <img src="assets/favicon.svg" alt="" />
              <div class="adoption-mark__wording">Soi Dog</div>
            </div>
            <p class="eyebrow">${t(copy.adoption.eyebrow, language)}</p>
            <h2>${t(copy.adoption.title, language)}</h2>
            <p class="info-copy">${t(copy.adoption.body, language)}</p>
          </aside>
          <section class="game-main">
            <section class="panel progress-card">
              <div class="progress-top">
                <div>
                  <p class="eyebrow">${t(copy.progress.eyebrow, language)}</p>
                  <h2>${getProgressLabel(language)}</h2>
                </div>
                <div class="score-box">
                  <span>${t(copy.progress.score, language)}</span>
                  <strong>${score}</strong>
                </div>
              </div>
              <div class="progress-track" aria-hidden="true">
                <div class="progress-fill" style="width:${progressPercent}%"></div>
              </div>
              <p class="progress-hint">${t(copy.progress.hint, language)}</p>
            </section>
            ${mainContent}
          </section>
          <aside class="panel sidebar sidebar--right">
            <p class="eyebrow">${t(copy.tone.eyebrow, language)}</p>
            <h2>${t(copy.tone.title, language)}</h2>
            <p class="info-copy">${t(copy.tone.paragraphOne, language)}</p>
            <p class="info-copy">${t(copy.tone.paragraphTwo, language)}</p>
          </aside>
        </div>
      </div>
    `;
  }

  function attachListeners() {
    app.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", function () {
        state.language = this.getAttribute("data-language");
        state.answers = [];
        render();
      });
    });

    app.querySelectorAll("[data-action]").forEach((button) => {
      button.addEventListener("click", function () {
        const action = this.getAttribute("data-action");
        if (action === "true") answer(true);
        if (action === "false") answer(false);
        if (action === "undo") undo();
        if (action === "restart") restart();
        if (action === "change-language") changeLanguage();
      });
    });

    const card = app.querySelector("[data-role='quiz-card']");
    if (!card) return;

    card.addEventListener("pointerdown", onPointerDown);
    card.addEventListener("pointermove", onPointerMove);
    card.addEventListener("pointerup", onPointerUp);
    card.addEventListener("pointercancel", onPointerUp);
    card.addEventListener("pointerleave", onPointerUp);
  }

  function onPointerDown(event) {
    state.drag.active = true;
    state.drag.startX = event.clientX;
    state.drag.startY = event.clientY;
    state.drag.currentX = event.clientX;
    state.drag.currentY = event.clientY;
    event.currentTarget.setPointerCapture(event.pointerId);
    render();
  }

  function onPointerMove(event) {
    if (!state.drag.active) return;
    state.drag.currentX = event.clientX;
    state.drag.currentY = event.clientY;
    render();
  }

  function onPointerUp(event) {
    if (!state.drag.active) return;

    const deltaX = state.drag.currentX - state.drag.startX;
    state.drag.active = false;
    state.drag.startX = 0;
    state.drag.startY = 0;
    state.drag.currentX = 0;
    state.drag.currentY = 0;

    if (event.currentTarget && event.currentTarget.hasPointerCapture && event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (deltaX > 90) {
      answer(true);
      return;
    }

    if (deltaX < -90) {
      answer(false);
      return;
    }

    render();
  }

  function render() {
    app.innerHTML = state.language ? renderGame(state.language) : renderLanguagePicker();
    attachListeners();
  }

  document.addEventListener("keydown", function (event) {
    if (!state.language) return;

    if (state.answers.length >= questions.length) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        restart();
      }
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      answer(true);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      answer(false);
    } else if (event.key === "Backspace" || event.key.toLowerCase() === "z") {
      event.preventDefault();
      undo();
    }
  });

  render();
})();
