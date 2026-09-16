/* ============ 第 21 章　一元二次方程 ============ */
window.DECK = window.DECK || [];
(function () {
  const C = '#0284c7';
  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  window.DECK.push({
    ch: 21,
    title: '一元二次方程',
    color: C,
    sections: [
      '21.1 一元二次方程的四種解法',
      '21.2 根的判別式與韋達定理',
      '21.3 實際問題與一元二次方程建模'
    ],
    slides: [
      {
        sec: '21.1', secName: '一元二次方程的四種解法',
        title: '配方、公式、分解因式；求根公式為萬能鑰匙',
        points: [
          '<b>一般形式</b>：$ax^2 + bx + c = 0\\;(a \\neq 0)$。二次項係數 $a$ 絕不能為 0。',
          '<b>四大解法</b>：① 直接開平方法；② 配方法（二次項係數化 1，加上一次項係數一半的平方）；③ <b>公式法</b>（萬能公式）；④ <b>因式分解法</b>（右邊化為 0，左邊分解為兩一次因式之積，最簡捷首選）。'
        ],
        formula: { label: '求根公式（萬能公式）', tex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\quad (b^2 - 4ac \\ge 0)' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <rect x="30" y="25" width="180" height="95" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
            <text x="120" y="55" font-size="14" font-weight="bold" fill="#1d4ed8" text-anchor="middle">直接開平方法</text>
            <text x="120" y="80" font-size="13" fill="#334155" text-anchor="middle">(x + m)² = n (n ≥ 0)</text>
            <text x="120" y="102" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">x + m = ±√n</text>

            <rect x="230" y="25" width="180" height="95" rx="8" fill="#f0fdf4" stroke="#059669" stroke-width="1.5"/>
            <text x="320" y="55" font-size="14" font-weight="bold" fill="#047857" text-anchor="middle">因式分解法 (首選)</text>
            <text x="320" y="80" font-size="13" fill="#334155" text-anchor="middle">(ax + b)(cx + d) = 0</text>
            <text x="320" y="102" font-size="12" font-weight="bold" fill="#059669" text-anchor="middle">ax + b = 0 或 cx + d = 0</text>

            <rect x="30" y="130" width="180" height="95" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
            <text x="120" y="160" font-size="14" font-weight="bold" fill="#b45309" text-anchor="middle">配方法五步法</text>
            <text x="120" y="185" font-size="12" fill="#334155" text-anchor="middle">移項 ⟹ 化二次項係數為 1</text>
            <text x="120" y="208" font-size="12" font-weight="bold" fill="#d97706" text-anchor="middle">兩邊加 (b/2a)²</text>

            <rect x="230" y="130" width="180" height="95" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
            <text x="320" y="160" font-size="14" font-weight="bold" fill="#b91c1c" text-anchor="middle">公式法 (萬能公式)</text>
            <text x="320" y="185" font-size="12" fill="#334155" text-anchor="middle">先算判別式 Δ = b² - 4ac</text>
            <text x="320" y="208" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">代入求根公式</text>
          `);
        },
        caption: '解題策略：有括號先看直接開平，十字相乘能解優先因式分解，係數複雜用公式法。',
        example: {
          q: '用適當方法解方程：(1) $x^2 - 4x = 0$；(2) $x^2 - 2x - 1 = 0$。',
          steps: [
            '(1) 提出公因式因式分解：$x(x - 4) = 0$，解得 $x_1 = 0, x_2 = 4$。',
            '(2) 配方法：移項得 $x^2 - 2x = 1$。',
            '兩邊同時加上一次項係數一半的平方 $1^2 = 1$：$x^2 - 2x + 1 = 1 + 1$。',
            '配方得：$(x - 1)^2 = 2 \\implies x - 1 = \\pm\\sqrt{2} \\implies x = 1 \\pm \\sqrt{2}$。'
          ],
          ans: '(1) $x_1 = 0, x_2 = 4$；(2) $x_1 = 1 + \\sqrt{2}, x_2 = 1 - \\sqrt{2}$。'
        }
      },
      {
        sec: '21.2', secName: '根的判別式與韋達定理',
        title: '$\\Delta > 0$ 兩不相等實根；韋達定理兩根和積妙解對稱式',
        points: [
          '<b>根的判別式 $\\Delta = b^2 - 4ac$</b>：',
          '① $\\Delta > 0 \\iff$ 方程有兩個<b>不相等的實數根</b>；② $\\Delta = 0 \\iff$ 方程有兩個<b>相等的實數根</b>；③ $\\Delta < 0 \\iff$ 方程<b>沒有實數根</b>。',
          '<b>韋達定理（根與係數關係）</b>：設 $x_1, x_2$ 為方程兩根，則 $x_1 + x_2 = -\\frac{b}{a}$，$x_1 x_2 = \\frac{c}{a}$。',
          '<b>常用對稱式</b>：$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2$；$\\frac{1}{x_1} + \\frac{1}{x_2} = \\frac{x_1 + x_2}{x_1 x_2}$。'
        ],
        formula: { label: '判別式與韋達定理公式', tex: '\\Delta = b^2 - 4ac \\;;\\; x_1 + x_2 = -\\frac{b}{a} \\;;\\; x_1 x_2 = \\frac{c}{a} \\;;\\; (x_1 - x_2)^2 = (x_1 + x_2)^2 - 4x_1 x_2' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <rect x="25" y="25" width="120" height="120" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
            <text x="85" y="55" font-size="15" font-weight="bold" fill="#047857" text-anchor="middle">Δ > 0</text>
            <text x="85" y="85" font-size="12" fill="#334155" text-anchor="middle">兩個不相等實根</text>
            <text x="85" y="115" font-size="12" font-weight="bold" fill="#059669" text-anchor="middle">與 x 軸 2 個交點</text>

            <rect x="160" y="25" width="120" height="120" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
            <text x="220" y="55" font-size="15" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Δ = 0</text>
            <text x="220" y="85" font-size="12" fill="#334155" text-anchor="middle">兩個相等實根</text>
            <text x="220" y="115" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">與 x 軸相切 (1點)</text>

            <rect x="295" y="25" width="120" height="120" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
            <text x="355" y="55" font-size="15" font-weight="bold" fill="#b91c1c" text-anchor="middle">Δ < 0</text>
            <text x="355" y="85" font-size="12" fill="#334155" text-anchor="middle">無實數根</text>
            <text x="355" y="115" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">與 x 軸無交點</text>

            <rect x="25" y="160" width="390" height="65" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="220" y="185" font-size="13" font-weight="bold" fill="#7c3aed" text-anchor="middle">韋達定理：x1 + x2 = -b/a ； x1 · x2 = c/a</text>
            <text x="220" y="210" font-size="12" fill="#475569" text-anchor="middle">應用前提：必須確保判別式 Δ ≥ 0 且二次項係數 a ≠ 0！</text>
          `);
        },
        caption: '易錯警示：已知「方程有實數根」，隱含條件為 \\(\\Delta \\ge 0\\)；若題目含字母係數，還需注意 \\(a \\neq 0\\)。',
        example: {
          q: '已知方程 $x^2 - 3x + 1 = 0$ 的兩根分別為 $x_1, x_2$，求 $\\frac{1}{x_1} + \\frac{1}{x_2}$ 的值。',
          steps: [
            '檢查判別式：$\\Delta = (-3)^2 - 4(1)(1) = 9 - 4 = 5 > 0$，方程有兩不相等實根。',
            '由韋達定理：$x_1 + x_2 = 3$，$x_1 x_2 = 1$。',
            '通分計算待求式：$\\frac{1}{x_1} + \\frac{1}{x_2} = \\frac{x_1 + x_2}{x_1 x_2} = \\frac{3}{1} = 3$。'
          ],
          ans: '$\\frac{1}{x_1} + \\frac{1}{x_2} = 3$。'
        }
      },
      {
        sec: '21.3', secName: '實際問題與一元二次方程建模',
        title: '平均增長率 $a(1 \\pm x)^2 = b$；銷售利潤與面積鋪路模型',
        points: [
          '<b>平均增長率模型</b>：原數為 $a$，平均增長率為 $x$，兩期後數量為 $b$：$a(1 + x)^2 = b$；下降率：$a(1 - x)^2 = b$。',
          '<b>傳播問題模型</b>：一人得病傳染 $x$ 人，第一輪後共 $(1 + x)$ 人，第二輪後共 $(1 + x)^2$ 人。',
          '<b>利潤問題</b>：$\\text{總利潤} = (\\text{單件售價} - \\text{單件進價}) \\times \\text{銷售量}$。降價促銷：單價每降 1 元，銷量增加 $m$ 件。'
        ],
        formula: { label: '增長率與利潤經典模型', tex: 'a(1 \\pm x)^2 = b \\;;\\; (p - c) \\cdot q = W \\;;\\; (A - x)(B - x) = S_{\\text{草坪}}' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <rect x="50" y="40" width="160" height="120" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
            <line x1="50" y1="100" x2="210" y2="100" stroke="#fff" stroke-width="12"/>
            <line x1="130" y1="40" x2="130" y2="160" stroke="#fff" stroke-width="12"/>
            <text x="130" y="190" font-size="12" font-weight="bold" fill="#0284c7" text-anchor="middle">原圖：中間有十字道路</text>

            <rect x="250" y="40" width="140" height="100" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
            <text x="320" y="190" font-size="12" font-weight="bold" fill="#e11d48" text-anchor="middle">平移法：草坪平移至一角</text>
            <text x="320" y="95" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">(A - x)(B - x)</text>
          `);
        },
        caption: '幾何鋪路巧思：利用「圖形平移法」將曲折或十字道路平移至矩形邊緣，草坪化為完整矩形。',
        example: {
          q: '某種商品原售價為每件 100 元，經過連續兩次降價後，現在每件售價為 81 元。求這兩次降價的平均降價率。',
          steps: [
            '設每次降價的平均降價率為 $x$。',
            '由題意列方程：$100(1 - x)^2 = 81$。',
            '兩邊同除以 100：$(1 - x)^2 = 0.81$。',
            '直接開平方：$1 - x = \\pm 0.9$。',
            '解得：$x_1 = 1 - 0.9 = 0.1 = 10\\%$；$x_2 = 1 + 0.9 = 1.9 = 190\\%$（降價率大於 1，不合實際，捨去）。'
          ],
          ans: '這兩次降價的平均降價率為 $10\\%$。'
        }
      }
    ]
  });
})();