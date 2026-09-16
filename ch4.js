/* ============ 第 24 章　圓 ============ */
window.DECK = window.DECK || [];
(function () {
  const C = '#d97706';
  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  window.DECK.push({
    ch: 24,
    title: '圓',
    color: C,
    sections: [
      '24.1 垂徑定理與弧、弦、圓心角關係',
      '24.2 圓周角定理與切線判定及性質',
      '24.3 弧長、扇形面積與圓錐計算'
    ],
    slides: [
      {
        sec: '24.1', secName: '垂徑定理與弧、弦、圓心角關係',
        title: '垂直於弦的直徑平分弦及兩弧；勾股定理建構垂徑直角三角形',
        points: [
          '<b>垂徑定理</b>：垂直於弦的直徑平分這條弦，並且平分弦所對的兩條弧。',
          '<b>垂徑直角三角形（核心模型）</b>：連接半徑 $r$、半弦長 $\\frac{a}{2}$、弦心距 $d$，構成直角三角形：$r^2 = d^2 + \\left( \\frac{a}{2} \\right)^2$（知二求一）。',
          '<b>弧、弦、圓心角關係</b>：在同圓或等圓中，如果圓心角、弧、弦中有一組量相等，那麼它們所對應的其餘各組量也分別相等。'
        ],
        formula: { label: '垂徑直角三角形核心方程', tex: 'r^2 = d^2 + \\left( \\frac{AB}{2} \\right)^2 \\;;\\; CD \\perp AB \\implies AM = MB \\;,\\; \\widehat{AC} = \\widehat{BC}' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <circle cx="160" cy="125" r="80" fill="none" stroke="#d97706" stroke-width="2.5"/>
            <circle cx="160" cy="125" r="4" fill="#d97706"/><text x="145" y="125" font-size="13" font-weight="bold" fill="#d97706">O</text>

            <line x1="160" y1="45" x2="160" y2="205" stroke="#0284c7" stroke-width="2"/>
            <text x="165" y="40" font-size="12" font-weight="bold" fill="#0284c7">C</text>
            <text x="165" y="218" font-size="12" font-weight="bold" fill="#0284c7">D (直徑)</text>

            <line x1="90" y1="165" x2="230" y2="165" stroke="#e11d48" stroke-width="2.5"/>
            <text x="75" y="170" font-size="13" font-weight="bold" fill="#e11d48">A</text>
            <text x="235" y="170" font-size="13" font-weight="bold" fill="#e11d48">B</text>

            <line x1="160" y1="125" x2="90" y2="165" stroke="#64748b" stroke-width="2" stroke-dasharray="4 3"/>
            <text x="115" y="140" font-size="12" font-weight="bold" fill="#64748b">r</text>
            <text x="165" y="150" font-size="12" font-weight="bold" fill="#0284c7">d</text>

            <rect x="260" y="55" width="160" height="130" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
            <text x="340" y="85" font-size="14" font-weight="bold" fill="#b45309" text-anchor="middle">垂徑直角三角形</text>
            <text x="340" y="120" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">r² = d² + (AB/2)²</text>
            <text x="340" y="150" font-size="12" fill="#475569" text-anchor="middle">半徑 r</text>
            <text x="340" y="170" font-size="12" fill="#475569" text-anchor="middle">弦心距 d，半弦長</text>
          `);
        },
        caption: '圓中求線段長首選輔助線：過圓心向弦作垂線，連接圓心與弦端點構造直角三角形。',
        example: {
          q: '某座趙州橋形狀的圓弧石拱橋跨度 $AB = 16\\text{ m}$，拱高 $CD = 4\\text{ m}$，求石拱橋主橋拱所在圓的半徑。',
          steps: [
            '設拱橋所在圓的圓心為 $O$，半徑為 $r$。',
            '由垂徑定理：$OD \\perp AB$，所以 $AD = \\frac{1}{2}AB = \\frac{1}{2} \\times 16 = 8\\text{ m}$。',
            '弦心距 $OD = OC - CD = r - 4$。',
            '在 $\\text{Rt}\\triangle OAD$ 中由勾股定理：$AD^2 + OD^2 = OA^2$。',
            '$8^2 + (r - 4)^2 = r^2 \\implies 64 + r^2 - 8r + 16 = r^2 \\implies 8r = 80 \\implies r = 10$。'
          ],
          ans: '主橋拱所在圓的半徑為 $10\\text{ m}$。'
        }
      },
      {
        sec: '24.2', secName: '圓周角定理與切線判定及性質',
        title: '同弧所對圓周角等於圓心角一半；直徑所對圓周角是直角',
        points: [
          '<b>圓周角定理</b>：一條弧所對的圓周角等於它所對的<b>圓心角的一半</b>。同弧或等弧所對的圓周角相等。',
          '<b>推論（直徑定理）</b>：半圓（或直徑）所對的圓周角是<b>直角</b>（$90^\\circ$）；$90^\\circ$ 的圓周角所對的弦是直徑。',
          '<b>切線的判定與性質</b>：過半徑外端且垂直於這條半徑的直線是切線；圓的切線垂直於過切點的半徑。',
          '<b>切線長定理</b>：從圓外一點引圓的兩條切線，它們的<b>切線長相等</b>，圓心和這一點的連線平分兩條切線的夾角。'
        ],
        formula: { label: '圓周角與切線定理', tex: '\\angle ACB = \\frac{1}{2}\\angle AOB \\;;\\; AB \\text{ 為直徑} \\implies \\angle ACB = 90^\\circ \\;;\\; PA = PB \\; (\\text{切線長})' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <circle cx="150" cy="125" r="75" fill="none" stroke="#d97706" stroke-width="2"/>
            <line x1="75" y1="125" x2="225" y2="125" stroke="#0284c7" stroke-width="2.5"/>
            <text x="60" y="130" font-size="13" font-weight="bold" fill="#0284c7">A</text>
            <text x="235" y="130" font-size="13" font-weight="bold" fill="#0284c7">B (直徑)</text>

            <polygon points="75,125 225,125 150,50" fill="none" stroke="#e11d48" stroke-width="2"/>
            <text x="150" y="40" font-size="13" font-weight="bold" fill="#e11d48" text-anchor="middle">C (90°)</text>

            <rect x="260" y="45" width="160" height="150" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="340" y="75" font-size="14" font-weight="bold" fill="#0284c7" text-anchor="middle">切線三大口訣</text>
            <text x="275" y="110" font-size="12" fill="#334155">① 有交點 ⟹ 連半徑，證垂直</text>
            <text x="275" y="140" font-size="12" fill="#334155">② 無交點 ⟹ 作垂直，證半徑</text>
            <text x="275" y="170" font-size="12" font-weight="bold" fill="#e11d48">③ 直徑對直角 90°</text>
          `);
        },
        caption: '證明切線的兩種口訣：有切點「連半徑，證垂直」；無切點「作垂直，證半徑等於 r」。',
        example: {
          q: '如圖，$AB$ 是 $\\odot O$ 的直徑，點 $C, D$ 在圓上，$\\angle CAB = 25^\\circ$。求 $\\angle ADC$ 的度數。',
          steps: [
            '因為 $AB$ 是 $\\odot O$ 的直徑，所以由直徑所對的圓周角是直角：$\\angle ACB = 90^\\circ$。',
            '在 $\\text{Rt}\\triangle ABC$ 中：$\\angle B = 90^\\circ - \\angle CAB = 90^\\circ - 25^\\circ = 65^\\circ$。',
            '因為圓周角 $\\angle ADC$ 與 $\\angle B$ 對應同一條弧 $\\widehat{AC}$。',
            '由同弧所對的圓周角相等：$\\angle ADC = \\angle B = 65^\\circ$。'
          ],
          ans: '$\\angle ADC = 65^\\circ$。'
        }
      },
      {
        sec: '24.3', secName: '弧長、扇形面積與圓錐計算',
        title: '弧長 l = nπr/180；扇形面積 S = 1/2 lr；圓錐底面周長等於側展扇形弧長',
        points: [
          '<b>弧長公式</b>：$l = \\frac{n \\pi r}{180}$（$n$ 是圓心角度數，$r$ 是半徑）。',
          '<b>扇形面積公式</b>：$S = \\frac{n \\pi r^2}{360} = \\frac{1}{2}lr$（類比三角形面積公式 $\\frac{1}{2} \\times \\text{底} \\times \\text{高}$）。',
          '<b>圓錐側面積與全面積</b>：圓錐母線長 $l$ 為展開扇形半徑，底面周長等於扇形弧長：$2\\pi r = \\frac{n \\pi l}{180}$；側面積 $S_{\\text{側}} = \\pi r l$。'
        ],
        formula: { label: '弧長與圓錐側面積公式', tex: 'l = \\frac{n\\pi r}{180} \\;;\\; S_{\\text{扇}} = \\frac{1}{2}lr = \\frac{n\\pi r^2}{360} \\;;\\; S_{\\text{圓錐側}} = \\pi r l' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <path d="M 120 180 L 180 50 L 240 180 Z" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
            <ellipse cx="180" cy="180" rx="60" ry="18" fill="none" stroke="#d97706" stroke-width="2"/>
            <text x="180" y="35" font-size="12" font-weight="bold" fill="#d97706" text-anchor="middle">圓錐頂點</text>
            <text x="220" y="110" font-size="13" font-weight="bold" fill="#e11d48">母線 l</text>
            <text x="180" y="185" font-size="12" font-weight="bold" fill="#0284c7">r</text>

            <path d="M 320 60 L 390 150 A 90 90 0 0 1 290 170 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
            <text x="320" y="45" font-size="12" font-weight="bold" fill="#0284c7">展開扇形 (半徑為 l)</text>
            <text x="345" y="195" font-size="12" font-weight="bold" fill="#e11d48" text-anchor="middle">扇形弧長 = 2πr</text>
          `);
        },
        caption: '圓錐本質轉化：圓錐底面圓周長 \\(2\\pi r\\) 恰好等於側面上展開得到的扇形弧長。',
        example: {
          q: '已知一個圓錐的底面半徑 $r = 3\\text{ cm}$，母線長 $l = 5\\text{ cm}$。求這個圓錐的側面積和展開圖扇形的圓心角。',
          steps: [
            '計算圓錐側面積：$S_{\\text{側}} = \\pi r l = \\pi \\times 3 \\times 5 = 15\\pi\\text{ cm}^2$。',
            '底面周長為 $2\\pi r = 2\\pi \\times 3 = 6\\pi\\text{ cm}$。',
            '此周長等於展開扇形的弧長：$\\frac{n \\pi l}{180} = 6\\pi \\implies \\frac{n \\pi \\times 5}{180} = 6\\pi$。',
            '解得圓心角：$n = \\frac{6 \\times 180}{5} = 216^\\circ$。'
          ],
          ans: '側面積為 $15\\pi\\text{ cm}^2$，展開圖扇形的圓心角為 $216^\\circ$。'
        }
      }
    ]
  });
})();