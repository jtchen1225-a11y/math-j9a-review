/* ============ 第 25 章　概率初步 ============ */
window.DECK = window.DECK || [];
(function () {
  const C = '#dc2626';
  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  window.DECK.push({
    ch: 25,
    title: '概率初步',
    color: C,
    sections: [
      '25.1 隨機事件與古典概型',
      '25.2 列表法、樹狀圖與頻率估計概率'
    ],
    slides: [
      {
        sec: '25.1', secName: '隨機事件與古典概型',
        title: '必然事件 $P = 1$，不可能事件 $P = 0$，隨機事件 $0 < P < 1$',
        points: [
          '<b>事件分類</b>：① <b>必然事件</b>（一定發生，$P = 1$）；② <b>不可能事件</b>（一定不發生，$P = 0$）；③ <b>隨機事件</b>（可能發生也可能不發生，$0 < P < 1$）。',
          '<b>古典概型定義</b>：試驗具備兩個特徵：① 只有有限個可能結果；② 每個結果出現的<b>可能性相等</b>。',
          '<b>古典概型概率計算公式</b>：若所有可能結果總數為 $n$，事件 $A$ 發生的結果數為 $m$，則 $P(A) = \\frac{m}{n}$。'
        ],
        formula: { label: '古典概型概率計算公式', tex: 'P(A) = \\frac{m}{n} = \\frac{\\text{事件 A 包含的可能結果數}}{\\text{所有等可能結果的總數}} \\quad (0 \\le P(A) \\le 1)' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <line x1="60" y1="125" x2="380" y2="125" stroke="#334155" stroke-width="3"/>
            <circle cx="60" cy="125" r="6" fill="#64748b"/>
            <text x="60" y="100" font-size="14" font-weight="bold" fill="#64748b" text-anchor="middle">P = 0</text>
            <text x="60" y="155" font-size="13" font-weight="bold" fill="#64748b" text-anchor="middle">不可能事件</text>

            <circle cx="380" cy="125" r="6" fill="#059669"/>
            <text x="380" y="100" font-size="14" font-weight="bold" fill="#059669" text-anchor="middle">P = 1</text>
            <text x="380" y="155" font-size="13" font-weight="bold" fill="#059669" text-anchor="middle">必然事件</text>

            <rect x="140" y="80" width="160" height="90" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
            <text x="220" y="115" font-size="15" font-weight="bold" fill="#b91c1c" text-anchor="middle">0 < P < 1</text>
            <text x="220" y="145" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">隨機事件</text>
          `);
        },
        caption: '等可能性原則：求概率必須保證基本事件的發生具備「等可能性」，不可主觀臆斷。',
        example: {
          q: '一個不透明的袋子裡裝有 3 個紅球和 2 個白球，每個球除顏色外完全相同。從中隨機摸出一個球，摸到紅球的概率是多少？',
          steps: [
            '計算袋子中球的總數：$3 + 2 = 5$ 個。',
            '每個球被摸到的可能性是等可能的，總結果數 $n = 5$。',
            '摸到紅球的事件包含的可能結果數 $m = 3$。',
            '由概率公式：$P(\\text{摸到紅球}) = \\frac{m}{n} = \\frac{3}{5}$。'
          ],
          ans: '摸到紅球的概率是 $\\frac{3}{5}$。'
        }
      },
      {
        sec: '25.2', secName: '列表法、樹狀圖與頻率估計概率',
        title: '兩步實驗用列表或樹狀圖，三步及以上必須畫樹狀圖',
        points: [
          '<b>列表法</b>：適用於<b>涉及兩步</b>試驗或兩種對象抽取的問題，清晰展示所有 $m \\times n$ 種等可能結果。',
          '<b>樹狀圖法</b>：適用於<b>兩步及兩步以上</b>的試驗（如擲 3 次硬幣、抽 3 張卡片）。分支層級分明，不重不漏。',
          '<b>放回與不放回問題</b>：放回抽取每次總數不變；<b>不放回抽取</b>第二次總數少 1，且不能抽取自身（列表對角線無效）。',
          '<b>頻率估計概率</b>：在大量重複試驗中，事件發生的<b>頻率會穩定在某個常數附近</b>，這個常數就是該事件的概率。'
        ],
        formula: { label: '列舉與頻率逼近公式', tex: 'P(A) = \\frac{\\text{所求分支數}}{\\text{總末端分支數}} \\;;\\; \\lim_{N \\to \\infty} \\frac{m}{N} = P(A)' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <circle cx="80" cy="125" r="16" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
            <text x="80" y="130" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">開始</text>

            <line x1="96" y1="125" x2="180" y2="70" stroke="#0284c7" stroke-width="2"/>
            <circle cx="180" cy="70" r="14" fill="#bae6fd"/><text x="180" y="74" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">紅1</text>

            <line x1="96" y1="125" x2="180" y2="180" stroke="#dc2626" stroke-width="2"/>
            <circle cx="180" cy="180" r="14" fill="#fbcfe8"/><text x="180" y="184" font-size="11" font-weight="bold" fill="#be123c" text-anchor="middle">白1</text>

            <line x1="194" y1="70" x2="280" y2="40" stroke="#64748b" stroke-width="1.5"/>
            <text x="310" y="44" font-size="12" font-weight="bold" fill="#334155">(紅, 紅)</text>
            <line x1="194" y1="70" x2="280" y2="90" stroke="#64748b" stroke-width="1.5"/>
            <text x="310" y="94" font-size="12" font-weight="bold" fill="#334155">(紅, 白)</text>

            <line x1="194" y1="180" x2="280" y2="160" stroke="#64748b" stroke-width="1.5"/>
            <text x="310" y="164" font-size="12" font-weight="bold" fill="#334155">(白, 紅)</text>
            <line x1="194" y1="180" x2="280" y2="210" stroke="#64748b" stroke-width="1.5"/>
            <text x="310" y="214" font-size="12" font-weight="bold" fill="#334155">(白, 白)</text>
          `);
        },
        caption: '樹狀圖列舉規範：從「開始」節點出發，第一步分第一層分支，第二步分第二層分支。',
        example: {
          q: '同時拋擲兩枚質地均勻的硬幣，求兩枚硬幣均正面朝上的概率。',
          steps: [
            '每一枚硬幣有「正」和「反」兩種等可能結果。',
            '畫樹狀圖或列表，所有等可能的結果有 4 種：(正, 正), (正, 反), (反, 正), (反, 反)。',
            '兩枚硬幣均正面朝上的結果只有 1 種：(正, 正)。',
            '由概率公式計算：$P(\\text{均正面}) = \\frac{1}{4}$。'
          ],
          ans: '兩枚硬幣均正面朝上的概率為 $\\frac{1}{4}$。'
        }
      }
    ]
  });
})();