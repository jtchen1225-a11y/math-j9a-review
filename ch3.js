/* ============ 第 23 章　旋轉 ============ */
window.DECK = window.DECK || [];
(function () {
  const C = '#7c3aed';
  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  window.DECK.push({
    ch: 23,
    title: '旋轉',
    color: C,
    sections: [
      '23.1 圖形旋轉的性質與應用',
      '23.2 中心對稱與坐標變換'
    ],
    slides: [
      {
        sec: '23.1', secName: '圖形旋轉的性質與應用',
        title: '對應點到旋轉中心距離相等；對應線段連線夾角等於旋轉角',
        points: [
          '<b>旋轉三要素</b>：<b>旋轉中心</b>、<b>旋轉方向</b>（順時針/逆時針）、<b>旋轉角度</b>。',
          '<b>三大核心性質</b>：① 對應點到旋轉中心的距離相等；② 對應點與旋轉中心所連線段的夾角等於旋轉角；③ 旋轉前後圖形<b>全等</b>（大小形狀不變）。',
          '<b>輔助線技巧（手拉手旋轉模型）</b>：遇共頂點等線段（如等邊三角形、等腰直角三角形），常繞該頂點旋轉某個三角形構造全等。'
        ],
        formula: { label: '旋轉變換核心等量關係', tex: 'OA = OA\' \\;;\\; OB = OB\' \\;;\\; \\angle AOA\' = \\angle BOB\' = \\alpha \\;;\\; \\triangle OAB \\cong \\triangle OA\'B\'' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <circle cx="160" cy="140" r="5" fill="#e11d48"/>
            <text x="160" y="165" font-size="13" font-weight="bold" fill="#e11d48" text-anchor="middle">O (旋轉中心)</text>

            <polygon points="160,140 240,60 280,110" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
            <text x="245" y="55" font-size="12" font-weight="bold" fill="#0284c7">A</text>
            <text x="290" y="115" font-size="12" font-weight="bold" fill="#0284c7">B</text>

            <polygon points="160,140 80,60 70,120" fill="#fdf4ff" stroke="#7c3aed" stroke-width="2"/>
            <text x="75" y="50" font-size="12" font-weight="bold" fill="#7c3aed">A'</text>
            <text x="50" y="125" font-size="12" font-weight="bold" fill="#7c3aed">B'</text>

            <path d="M 210 90 A 80 80 0 0 0 110 90" fill="none" stroke="#e11d48" stroke-width="2" stroke-dasharray="4 3"/>
            <text x="160" y="75" font-size="13" font-weight="bold" fill="#e11d48" text-anchor="middle">旋轉角 α</text>
          `);
        },
        caption: '旋轉構造法：等腰三角形繞頂點旋轉底邊頂角，等邊三角形繞頂點旋轉 $60^\\circ$。',
        example: {
          q: '如圖，點 $P$ 是正三角形 $ABC$ 內部一點，$PA = 3$，$PB = 4$，$PC = 5$。將 $\\triangle APB$ 繞點 $A$ 逆時針旋轉 $60^\\circ$ 得到 $\\triangle AP\'C$。求 $\\angle APB$ 的度數。',
          steps: [
            '由旋轉性質可知：$\\triangle AP\'C \\cong \\triangle APB$，故 $AP\' = AP = 3$，$P\'C = PB = 4$，$\\angle PAP\' = 60^\\circ$。',
            '在 $\\triangle APP\'$ 中，因為 $AP = AP\' = 3$ 且 $\\angle PAP\' = 60^\\circ$，所以 $\\triangle APP\'$ 是等邊三角形。',
            '因此 $PP\' = 3$，且 $\\angle APP\' = 60^\\circ$。',
            '在 $\\triangle PP\'C$ 中，三邊長分別為 $PP\' = 3, P\'C = 4, PC = 5$。',
            '因為 $3^2 + 4^2 = 5^2$，由勾股定理逆定理，$\\angle PP\'C = 90^\\circ$。',
            '所以 $\\angle APB = \\angle AP\'C = \\angle AP\'P + \\angle PP\'C = 60^\\circ + 90^\\circ = 150^\\circ$。'
          ],
          ans: '$\\angle APB = 150^\\circ$。'
        }
      },
      {
        sec: '23.2', secName: '中心對稱與坐標變換',
        title: '旋轉 $180^\\circ$ 重合為中心對稱；關於原點對稱橫縱坐標全相反',
        points: [
          '<b>中心對稱定義</b>：把一個圖形繞著某一個點旋轉 $180^\\circ$，如果它能夠與另一個圖形重合，那麼稱這兩個圖形成中心對稱。',
          '<b>核心性質</b>：對稱點所連線段都經過對稱中心，而且<b>被對稱中心平分</b>。',
          '<b>關於原點對稱的點的坐標規律</b>：點 $P(x, y)$ 關於原點對稱的點為 <b>$(-x, -y)$</b>（橫縱坐標均互為相反數）。'
        ],
        formula: { label: '坐標中心對稱規律', tex: 'P(x, y) \\xrightarrow{\\text{關於原點對稱}} P\'(-x, -y) \\;;\\; P(x, y) \\xrightarrow{\\text{關於 } (a, b) \\text{ 對稱}} P\'(2a - x, 2b - y)' },
        visual: (h) => {
          h.innerHTML = svg('0 0 440 250', `
            <line x1="40" y1="125" x2="400" y2="125" stroke="#334155" stroke-width="2"/>
            <polygon points="400,121 412,125 400,129" fill="#334155"/>
            <line x1="220" y1="230" x2="220" y2="20" stroke="#334155" stroke-width="2"/>
            <polygon points="216,20 220,8 224,20" fill="#334155"/>
            <circle cx="220" cy="125" r="4" fill="#64748b"/><text x="205" y="140" font-size="12">O</text>

            <circle cx="330" cy="65" r="5" fill="#0284c7"/>
            <text x="335" y="55" font-size="13" font-weight="bold" fill="#0284c7">P(x, y)</text>

            <circle cx="110" cy="185" r="5" fill="#e11d48"/>
            <text x="75" y="205" font-size="13" font-weight="bold" fill="#e11d48">P'(-x, -y)</text>

            <line x1="110" y1="185" x2="330" y2="65" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 3"/>
            <rect x="80" y="215" width="280" height="28" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
            <text x="220" y="234" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">對稱中心 O 平分線段 PP'</text>
          `);
        },
        caption: '常見中心對稱圖形：平行四邊形、矩形、菱形、正方形、圓、線段。',
        example: {
          q: '在平面直角坐標系中，點 $A(2, -3)$ 關於原點對稱的點 $A\'$ 的坐標是什麼？',
          steps: [
            '由關於原點對稱的點的坐標規律：橫縱坐標均互為相反數。',
            '橫坐標變為原來的相反數：$-(2) = -2$。',
            '縱坐標變為原來的相反數：$-(-3) = 3$。',
            '所以點 $A\'$ 的坐標為 $(-2, 3)$。'
          ],
          ans: '點 $A\'$ 的坐標為 $(-2, 3)$。'
        }
      }
    ]
  });
})();