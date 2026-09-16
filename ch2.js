/* ============ 第 22 章　二次函數 ============ */
window.DECK = window.DECK || [];
(function () {
  const C = '#059669';
  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  window.DECK.push({
    ch: 22,
    title: '二次函數',
    color: C,
    sections: [
      '22.1 二次函數圖象與三種表達式',
      '22.2 拋物線性質與 a,b,c 符號判斷',
      '22.3 二次函數最值與實際應用建模'
    ],
    slides: [
      {
        sec: '22.1', secName: '二次函數圖象與三種表達式',
        title: '一般式、頂點式與交點式；頂點坐標與平移變換法則',
        points: [
          '<b>一般式</b>：$y = ax^2 + bx + c\\;(a \\neq 0)$，頂點坐標為 $(-\\frac{b}{2a}, \\frac{4ac - b^2}{4a})$。',
          '<b>頂點式</b>：$y = a(x - h)^2 + k$，頂點坐標為 $(h, k)$，對稱軸為直線 $x = h$。',
          '<b>交點式</b>：$y = a(x - x_1)(x - x_2)$，圖象與 $x$ 軸兩交點為 $(x_1, 0), (x_2, 0)$，對稱軸為 $x = \\frac{x_1 + x_2}{2}$。',
          '<b>平移規律口訣</b>：<b>左加右減</b>（針對 $x$），<b>上加下減</b>（針對常數項）。'
        ],
        formula: { label: '二次函數三種形式', tex: 'y = a(x-h)^2 + k \\;;\\; (h, k) = \\left( -\\frac{b}{2a}, \\frac{4ac-b^2}{4a} \\right) \\;;\\; x_{\\text{對稱}} = -\\frac{b}{2a}' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <line x1="40" y1="200" x2="400" y2="200" stroke="#334155" stroke-width="2"/>
            <polygon points="400,196 412,200 400,204" fill="#334155"/>
            <text x="405" y="215" font-size="13" font-weight="bold" fill="#334155">x</text>

            <line x1="120" y1="230" x2="120" y2="20" stroke="#334155" stroke-width="2"/>
            <polygon points="116,20 120,8 124,20" fill="#334155"/>
            <text x="135" y="25" font-size="13" font-weight="bold" fill="#334155">y</text>

            <path d="M 120 40 Q 220 220 320 40" fill="none" stroke="#059669" stroke-width="3"/>
            <line x1="220" y1="30" x2="220" y2="220" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="4 3"/>
            <text x="225" y="45" font-size="12" font-weight="bold" fill="#e11d48">x = h (對稱軸)</text>

            <circle cx="220" cy="130" r="5" fill="#e11d48"/>
            <text x="220" y="150" font-size="13" font-weight="bold" fill="#e11d48" text-anchor="middle">頂點 (h, k)</text>
          `);
        },
        caption: '對稱性：拋物線上橫坐標與對稱軸距離相等的兩個點，其縱坐標相等。',
        example: {
          q: '將拋物線 $y = 2x^2$ 先向右平移 3 個單位，再向上平移 4 個單位，寫出平移後的解析式及頂點坐標。',
          steps: [
            '根據平移口訣「左加右減，上加下減」：',
            '向右平移 3 個單位，自變量變為 $(x - 3)$，式子變為 $y = 2(x - 3)^2$。',
            '向上平移 4 個單位，常數項加 4，解析式變為 $y = 2(x - 3)^2 + 4$。',
            '此時頂點式為 $y = 2(x - 3)^2 + 4$，頂點坐標為 $(3, 4)$。'
          ],
          ans: '解析式為 $y = 2(x - 3)^2 + 4$，頂點坐標為 $(3, 4)$。'
        }
      },
      {
        sec: '22.2', secName: '拋物線性質與 a,b,c 符號判斷',
        title: '$a$ 決定開口大小與方向，左同右異看 $b$，$c$ 看 $y$ 軸交點',
        points: [
          '<b>a 的作用</b>：$a > 0$ 開口向上，有<b>最小值</b>；$a < 0$ 開口向下，有<b>最大值</b>；$|a|$ 越大開口越小。',
          '<b>b 的符號（左同右異口訣）</b>：對稱軸在 $y$ 軸左側 $\\implies ab > 0$（同號）；在 $y$ 軸右側 $\\implies ab < 0$（異號）；對稱軸為 $y$ 軸 $\\implies b = 0$。',
          '<b>c 的符號</b>：拋物線與 $y$ 軸交於 $(0, c)$。交於正半軸 $c > 0$；交於負半軸 $c < 0$；過原點 $c = 0$。',
          '<b>特殊代數式符號</b>：當 $x = 1$ 時，$y = a + b + c$；當 $x = -1$ 時，$y = a - b + c$。'
        ],
        formula: { label: '係數符號判斷四寶', tex: 'a \\text{ (開口)} \\;;\\; -\\frac{b}{2a} \\text{ (左同右異)} \\;;\\; c \\text{ (y交點)} \\;;\\; \\Delta = b^2 - 4ac \\text{ (x交點)}' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <rect x="25" y="25" width="185" height="195" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="117" y="55" font-size="14" font-weight="bold" fill="#047857" text-anchor="middle">係數判斷黃金法則</text>
            <text x="40" y="90" font-size="12" fill="#334155">① a: 開口向上 a>0，向下 a<0</text>
            <text x="40" y="125" font-size="12" fill="#334155">② b: 對稱軸在 y 軸右側 ⟹ ab<0</text>
            <text x="40" y="160" font-size="12" fill="#334155">③ c: 與 y 軸交點 (0, c)</text>
            <text x="40" y="195" font-size="12" fill="#334155">④ b² - 4ac: 與 x 軸交點個數</text>

            <rect x="230" y="25" width="185" height="195" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
            <text x="322" y="55" font-size="14" font-weight="bold" fill="#047857" text-anchor="middle">特殊點對應值判斷</text>
            <text x="250" y="95" font-size="12" fill="#334155">x = 1 ⟹ y = a + b + c</text>
            <text x="250" y="130" font-size="12" fill="#334155">x = -1 ⟹ y = a - b + c</text>
            <text x="250" y="165" font-size="12" fill="#334155">x = 2 ⟹ y = 4a + 2b + c</text>
            <text x="250" y="200" font-size="12" font-weight="bold" fill="#e11d48">看該 x 對應 y 的正負</text>
          `);
        },
        caption: '中考高頻壓軸選填：觀察圖象上特定點 \\(x = \\pm 1, \\pm 2\\) 的位置，直接判斷複合代數式正負。',
        example: {
          q: '二次函數 $y = ax^2 + bx + c$ 圖象如圖，開口向上，對稱軸為直線 $x = 1$，與 $y$ 軸交於負半軸。判斷下列結論的正誤：(1) $abc > 0$；(2) $b^2 - 4ac > 0$。',
          steps: [
            '開口向上 $\\implies a > 0$。',
            '對稱軸 $x = -\\frac{b}{2a} = 1 > 0$，因為 $a > 0$，所以 $b < 0$（左同右異）。',
            '與 $y$ 軸交於負半軸 $\\implies c < 0$。',
            '所以 $abc = (+) \\times (-) \\times (-) > 0$，結論 (1) 正確。',
            '因為拋物線與 $y$ 軸交於負半軸且開口向上，必與 $x$ 軸有 2 個交點，故 $\\Delta = b^2 - 4ac > 0$，結論 (2) 正確。'
          ],
          ans: '(1) 正確；(2) 正確。'
        }
      },
      {
        sec: '22.3', secName: '二次函數最值與實際應用建模',
        title: '頂點處取極值；注意自變量取值範圍對最值的限制',
        points: [
          '<b>拋物線頂點最值</b>：當 $a < 0$ 時，在頂點 $x = -\\frac{b}{2a}$ 處取得<b>最大值</b>；當 $a > 0$ 時取得<b>最小值</b>。',
          '<b>自變量區間限制（必考易錯）</b>：若自變量有範圍限制 $m \\le x \\le n$，必須先判斷對稱軸是否在區間內，若在區間內頂點取極值；若在區間外，在<b>端點處取最值</b>。',
          '<b>幾何與利潤模型</b>：設自變量 $x \\to$ 建立二次函數關係式 $y = ax^2 + bx + c \\to$ 配方化為頂點式求最值。'
        ],
        formula: { label: '二次函數頂點最值公式', tex: 'y_{\\max/\\min} = \\frac{4ac - b^2}{4a} \\quad \\left( \\text{當 } x = -\\frac{b}{2a} \\text{ 在定義域內時} \\right)' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <line x1="40" y1="200" x2="400" y2="200" stroke="#334155" stroke-width="2"/>
            <path d="M 80 180 Q 220 20 360 180" fill="none" stroke="#e11d48" stroke-width="3"/>

            <circle cx="220" cy="100" r="5" fill="#e11d48"/>
            <text x="220" y="80" font-size="14" font-weight="bold" fill="#e11d48" text-anchor="middle">頂點 (最大利潤點)</text>

            <rect x="70" y="215" width="300" height="28" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="1.2"/>
            <text x="220" y="234" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">利潤 = (售價 - 進價) × 銷量 ＝ 二次函數模型</text>
          `);
        },
        caption: '應用題三步法：審設求解析式、求定義域、配方結合區間判斷最大值。',
        example: {
          q: '某商場銷售一種商品，每件成本 40 元，定價 60 元時每天可售出 100 件。調查發現每降價 1 元每天多售 10 件。當降價多少元時，每天可獲得最大利潤？最大利潤是多少？',
          steps: [
            '設每件降價 $x$ 元，則每件利潤為 $(60 - 40 - x) = (20 - x)$ 元，每天銷售量為 $(100 + 10x)$ 件。',
            '每天總利潤 $W = (20 - x)(100 + 10x) = -10x^2 + 100x + 2000$。',
            '配方：$W = -10(x^2 - 10x) + 2000 = -10(x - 5)^2 + 2250$。',
            '因為 $a = -10 < 0$，當 $x = 5$ 時，$W$ 取得最大值 2250 元。'
          ],
          ans: '當降價 5 元時，每天可獲得最大利潤 2250 元。'
        }
      }
    ]
  });
})();