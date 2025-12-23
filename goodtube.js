// ==================================================================================
// PRIMETUBE - MODERN UI STYLES
// ==================================================================================

function primeTube_modernUI_styles() {
    let style = document.createElement('style');
    style.setAttribute('data-version', 'prime');
    style.textContent = `
        /* ===== COLOR VARIABLES ===== */
        :root {
            --prime-orange: #FF8C00;
            --prime-gold: #FFD700;
            --prime-dark: #0a0a0a;
            --prime-dark-2: #1a1a1a;
            --prime-dark-3: #2a2a2a;
            --prime-border: rgba(255, 140, 0, 0.3);
        }

        /* ===== MENU BUTTON (Fire Emoji) ===== */
        .goodTube_menuButton {
            display: block;
            position: fixed;
            bottom: 26px;
            right: 21px;
            background: linear-gradient(135deg, var(--prime-orange), var(--prime-gold));
            border-radius: 50%;
            box-shadow: 0 4px 20px rgba(255, 140, 0, 0.5);
            width: 48px !important;
            height: 48px !important;
            z-index: 999999;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 1;
            cursor: pointer;
            border: 2px solid var(--prime-gold);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 26px;
        }

        .goodTube_menuButton img {
            display: none !important;
        }

        .goodTube_menuButton::before {
            content: '🔥';
            filter: brightness(0);
            position: absolute;
            font-size: 26px;
        }

        .goodTube_menuButton:hover {
            transform: scale(1.15) rotate(10deg);
            box-shadow: 0 6px 30px rgba(255, 140, 0, 0.7);
            background: linear-gradient(135deg, var(--prime-gold), var(--prime-orange));
        }

        /* ===== CLOSE BUTTON ===== */
        .goodTube_menuClose {
            display: block;
            position: fixed;
            bottom: 60px;
            right: 16px;
            width: 18px !important;
            height: 18px !important;
            background: var(--prime-dark);
            color: var(--prime-orange);
            font-size: 12px;
            font-weight: 700;
            border-radius: 50%;
            text-align: center;
            line-height: 18px;
            z-index: 999999;
            box-shadow: 0 2px 12px rgba(255, 140, 0, 0.4);
            opacity: 1;
            text-decoration: none;
            cursor: pointer;
            border: 2px solid var(--prime-orange);
            transition: all 0.3s ease;
        }

        .goodTube_menuClose:hover {
            background: var(--prime-orange);
            color: var(--prime-dark);
            transform: rotate(90deg) scale(1.1);
        }

        /* ===== MODAL CONTAINER ===== */
        .goodTube_modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 999998;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
            backdrop-filter: blur(10px);
            background: rgba(0, 0, 0, 0.85);
        }

        .goodTube_modal.visible {
            pointer-events: all;
            opacity: 1;
        }

        .goodTube_modal * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }

        /* ===== MODAL INNER ===== */
        .goodTube_modal .goodTube_modal_inner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 780px;
            max-width: calc(100% - 32px);
            max-height: calc(100% - 32px);
            z-index: 2;
            background: var(--prime-dark);
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(255, 140, 0, 0.4);
            font-family: 'Segoe UI', Roboto, Arial, sans-serif;
            padding: 32px;
            overflow: auto;
            border: 2px solid var(--prime-orange);
        }

        /* ===== CLOSE BUTTON (MODAL) ===== */
        .goodTube_modal .goodTube_modal_inner .goodTube_modal_closeButton {
            position: absolute;
            top: 20px;
            right: 20px;
            color: var(--prime-orange);
            font-size: 32px;
            font-weight: 400;
            text-decoration: none;
            width: 40px;
            height: 40px;
            background: var(--prime-dark-2);
            border-radius: 50%;
            text-align: center;
            line-height: 40px;
            transition: all 0.3s ease;
            cursor: pointer;
            border: 2px solid var(--prime-orange);
        }

        .goodTube_modal .goodTube_modal_inner .goodTube_modal_closeButton:hover {
            background: var(--prime-orange);
            color: var(--prime-dark);
            transform: rotate(90deg);
        }

        /* ===== TITLE ===== */
        .goodTube_modal .goodTube_title {
            font-weight: 700;
            font-size: 24px;
            padding-bottom: 16px;
            line-height: 32px;
            color: var(--prime-gold);
            display: flex;
            align-items: center;
            gap: 12px;
            margin-top: 24px;
        }

        .goodTube_modal .goodTube_title::before {
            content: '';
            width: 4px;
            height: 28px;
            background: linear-gradient(to bottom, var(--prime-orange), var(--prime-gold));
            border-radius: 2px;
        }

        .goodTube_modal .goodTube_title:first-child {
            margin-top: 0;
            font-size: 32px;
        }

        .goodTube_modal .goodTube_title:first-child::before {
            display: none;
        }

        /* ===== CONTENT ===== */
        .goodTube_modal .goodTube_content {
            margin-bottom: 32px;
            color: #ffffff;
        }

        .goodTube_modal .goodTube_content:last-child {
            margin-bottom: 0;
        }

        /* ===== SETTINGS ===== */
        .goodTube_modal .goodTube_content .goodTube_setting {
            display: flex;
            gap: 16px;
            align-items: center;
            margin-bottom: 16px;
            padding: 16px;
            background: var(--prime-dark-2);
            border-radius: 12px;
            border: 1px solid var(--prime-dark-3);
            transition: all 0.3s ease;
        }

        .goodTube_modal .goodTube_content .goodTube_setting:hover {
            border-color: var(--prime-orange);
            box-shadow: 0 4px 16px rgba(255, 140, 0, 0.2);
        }

        .goodTube_modal .goodTube_content .goodTube_setting input[type="checkbox"] {
            width: 48px;
            height: 26px;
            min-width: 48px;
            min-height: 26px;
            border-radius: 13px;
            cursor: pointer;
            appearance: none;
            background: var(--prime-dark-3);
            position: relative;
            transition: all 0.3s ease;
            border: 2px solid var(--prime-dark-3);
        }

        .goodTube_modal .goodTube_content .goodTube_setting input[type="checkbox"]::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            background: #ffffff;
            border-radius: 50%;
            top: 1px;
            left: 2px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .goodTube_modal .goodTube_content .goodTube_setting input[type="checkbox"]:checked {
            background: var(--prime-orange);
            border-color: var(--prime-gold);
        }

        .goodTube_modal .goodTube_content .goodTube_setting input[type="checkbox"]:checked::after {
            left: 24px;
        }

        .goodTube_modal .goodTube_content .goodTube_setting select {
            border-radius: 8px;
            border: 2px solid var(--prime-dark-3);
            width: 120px;
            min-width: 120px;
            font-size: 14px;
            color: #ffffff;
            background: var(--prime-dark-3);
            padding: 10px 12px;
            font-family: 'Segoe UI', Roboto, Arial, sans-serif;
            transition: all 0.3s ease;
            font-weight: 500;
            cursor: pointer;
        }

        .goodTube_modal .goodTube_content .goodTube_setting select:hover,
        .goodTube_modal .goodTube_content .goodTube_setting select:focus {
            border-color: var(--prime-orange);
            outline: none;
        }

        .goodTube_modal .goodTube_content .goodTube_setting select option {
            background: var(--prime-dark-2);
            color: #ffffff;
        }

        .goodTube_modal .goodTube_content .goodTube_setting label {
            font-size: 15px;
            color: #ffffff;
            font-weight: 500;
            cursor: pointer;
            flex: 1;
        }

        /* ===== BUTTONS ===== */
        .goodTube_modal .goodTube_button {
            all: initial;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            display: inline-block;
            background: linear-gradient(135deg, var(--prime-orange), var(--prime-gold));
            color: var(--prime-dark);
            text-align: center;
            font-size: 16px;
            font-weight: 700;
            padding: 14px 24px;
            letter-spacing: 0.5px;
            border-radius: 12px;
            font-family: 'Segoe UI', Roboto, Arial, sans-serif;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 16px rgba(255, 140, 0, 0.3);
            border: none;
        }

        .goodTube_modal .goodTube_button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 24px rgba(255, 140, 0, 0.5);
            background: linear-gradient(135deg, var(--prime-gold), var(--prime-orange));
        }

        /* ===== TEXT ===== */
        .goodTube_modal .goodTube_text {
            display: block;
            font-size: 15px;
            padding-bottom: 16px;
            line-height: 160%;
            color: #cccccc;
        }

        .goodTube_modal .goodTube_text:last-child {
            padding-bottom: 0;
        }

        .goodTube_modal .goodTube_text a {
            color: var(--prime-gold);
            text-decoration: none;
            border-bottom: 1px solid var(--prime-gold);
            transition: all 0.3s ease;
        }

        .goodTube_modal .goodTube_text a:hover {
            color: var(--prime-orange);
            border-bottom-color: var(--prime-orange);
        }

        /* ===== FAQ ===== */
        .goodTube_modal_faq {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            padding: 16px;
            background: var(--prime-dark-2);
            border-radius: 12px;
            margin-bottom: 12px;
            border: 1px solid var(--prime-dark-3);
            transition: all 0.3s ease;
        }

        .goodTube_modal_faq:hover {
            border-color: var(--prime-orange);
        }

        .goodTube_modal_faq .goodTube_modal_question {
            display: flex;
            flex-wrap: nowrap;
            gap: 16px;
            width: 100%;
            cursor: pointer;
            transition: color 0.3s ease;
        }

        .goodTube_modal_faq .goodTube_modal_question:hover {
            color: var(--prime-gold);
        }

        .goodTube_modal_faq .goodTube_modal_question .goodTube_modal_question_text {
            width: 100%;
            font-weight: 600;
            color: #ffffff;
        }

        .goodTube_modal_faq .goodTube_modal_question .goodTube_modal_question_arrow {
            position: relative;
            top: 6px;
            transform: rotate(45deg);
            width: 8px;
            height: 8px;
            border-color: var(--prime-orange);
            border-style: solid;
            border-width: 0 2px 2px 0;
            transition: all 0.3s ease;
        }

        .goodTube_modal_faq[data-open="true"] .goodTube_modal_question .goodTube_modal_question_arrow {
            top: 9px;
            transform: rotate(225deg);
        }

        .goodTube_modal_faq .goodTube_modal_answer {
            display: grid;
            grid-template-rows: 0fr;
            margin-top: 0;
            transition: grid-template-rows 0.4s ease;
        }

        .goodTube_modal_faq[data-open="true"] .goodTube_modal_answer {
            grid-template-rows: 1fr;
        }

        .goodTube_modal_faq .goodTube_modal_answer .goodTube_modal_answerInner {
            overflow: hidden;
            padding-top: 0;
            opacity: 0;
            transition: all 0.4s ease;
            color: #aaaaaa;
            line-height: 160%;
        }

        .goodTube_modal_faq[data-open="true"] .goodTube_modal_answer .goodTube_modal_answerInner {
            padding-top: 16px;
            opacity: 1;
        }

        /* ===== REPORT FORM ===== */
        .goodTube_modal .goodTube_successText {
            font-size: 15px;
            padding: 16px;
            background: rgba(255, 215, 0, 0.1);
            border: 1px solid var(--prime-gold);
            border-radius: 8px;
            line-height: 160%;
            display: none;
            color: var(--prime-gold);
        }

        .goodTube_modal .goodTube_report input:not(.goodTube_button),
        .goodTube_modal .goodTube_report textarea {
            border-radius: 8px;
            border: 2px solid var(--prime-dark-3);
            width: 100%;
            font-size: 14px;
            color: #ffffff;
            background: var(--prime-dark-2);
            padding: 12px 16px;
            font-family: 'Segoe UI', Roboto, Arial, sans-serif;
            transition: all 0.3s ease;
        }

        .goodTube_modal .goodTube_report input:not(.goodTube_button)::placeholder,
        .goodTube_modal .goodTube_report textarea::placeholder {
            color: #666666;
        }

        .goodTube_modal .goodTube_report input:not(.goodTube_button):focus,
        .goodTube_modal .goodTube_report textarea:focus {
            border-color: var(--prime-orange);
            outline: none;
        }

        .goodTube_modal .goodTube_report input:not(.goodTube_button) {
            margin-bottom: 12px;
        }

        .goodTube_modal .goodTube_report textarea {
            margin-bottom: 16px;
            height: 140px;
            resize: vertical;
        }

        /* ===== SCROLLBAR ===== */
        .goodTube_modal_inner::-webkit-scrollbar {
            width: 10px;
        }

        .goodTube_modal_inner::-webkit-scrollbar-track {
            background: var(--prime-dark-2);
            border-radius: 5px;
        }

        .goodTube_modal_inner::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, var(--prime-orange), var(--prime-gold));
            border-radius: 5px;
        }

        .goodTube_modal_inner::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, var(--prime-gold), var(--prime-orange));
        }

        /* ===== ANIMATIONS ===== */
        @keyframes slideUp {
            from {
                transform: translate(-50%, -40%);
                opacity: 0;
            }
            to {
                transform: translate(-50%, -50%);
                opacity: 1;
            }
        }

        .goodTube_modal.visible .goodTube_modal_inner {
            animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(style);
}

// Call this function to inject the modern UI styles
primeTube_modernUI_styles();
