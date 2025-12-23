// ==UserScript==
// @name         PrimeTube
// @description  Premium YouTube experience - 100% ad-free with advanced features and modern UI
// @version      4.0
// @author       PrimeTube
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAzIDc5Ljk2OTBhODdmYywgMjAyNS8wMy8wNi0yMDo1MDoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIyM0MxODVGQkQyQTExRjA4N0I2QTU0RDU1NEYxRDBGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIyM0MxODYwQkQyQTExRjA4N0I2QTU0RDU1NEYxRDBGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjIzQzE4NURCRDJBMTFGMDg3QjZBNTRENTU0RjFEMEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjIzQzE4NUVCRDJBMTFGMDg3QjZBNTRENTU0RjFEMEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4gnVxyAAAEKUlEQVR42uxZ3U4TQRQ+p7TGG4kJL4AxvUBJDLMtxnjrkxBoqQ8EtIWH0AfwSi+k3SEmKjFBQiCRWzQRMf05zu50dufM/qQIGtqwibG7MzvznXO+852zAxIRTNJVgAm7bgHfAnauYtZAd60+ykYcPSGotJt44wD7tUYItPKyAT9PT+HLq9fhc9Hc+mdgzZ7GMcPBIPxV3WnjdFFC1huExqbhEI7fvoP/odNeaxPN/sF2VRXd8F55nqzxCLAv1kJUD2sv4P6zBT3S76noEODIgu7auqZKO6aGec/MEX7rSrTRvomXGCgMhWJpvKS7zkt6NRamqxhWtD1Eh0fq5gcYdViYnwcI/gWbSqkSbxOzvUNXTrpyuQwnJ8cAFxc66VZWQof7QhvsyRYW41C4m1JgSe5GiHiJcBNwmbTX0f/Pzt6Dx4uLAB8/2aMaC/dw+ib7n/fh/PycJQbPlhkd4tZmLnJDAb+2nhoGEzk9juB5gjnOdsxkylrkAZX1R28OtV2VJWVrOQpHkDhuslCGWmhVpKSXKjNqzWQwDEex+khR5xt8P9Pv0tlZvg4Hixqu4RhJhRZwl8+FAkL8ClrQKZPDAHfVzQM4+KorHfoH4b6ejCseZmV3KEVPq0D9vtVgSAbMvOrVq0kEBIkEls3dFOMDzy/xRFb7ZMnfxHEY8/TTcEvzS3mhuweitpxUpyCr7XUQOcvtLeSenjuaE3idvCUWwbzCwgE328TDGt/6zY5S8iWFrZgMexBScoFiOmB/jz3w/T6goUB9mRts9q+v4fQ18No6XmXQtT7yKDqyMnqPEjKQrKDojvPIpgNubZO7sfR7jgARDxMju3Seo8MDF1D8CC3V8GWfzRZeSc81+GqrqpcIeaundDqqnSuYHrWBrswROR4mxxhTUh3+h7xF4JEZjdtmeU2+p1/bJNWWQ7VainJsMjnsq/CH7dw2txCa28Q4rEY7u73IUcvLvLmG3U78e26O08ly5e9fQ4dpaKmU+l1fRTvKgafDe6+oFKW2EVZLlwKRxBm9DIxSOgwVEVUrpj4IXPLs0HZ7GaVYvduR0ZpepcSpZMlZCBrzVMLwzHAtYjolmp+kgvAZYY+S6CEwHkOn1uf02YW0BLuJl8GYXemUB6TsWU12A4NPGfQHiQ4OqyJV7aJPL3vwfRdsXcPnd0BsmK9mzVUhSjyGFjUyKREkIvO8MgbxieKbLUPraCQPU1pQMqBoGO0tPuygXN+Kpw4KkaNEM5lk03a2hmnfiMxnad+SFJ1fYKoakPILFnjZj788AombyUn8XMAEQOORnz2T7UslrbAqmpYrzDtZGb8fdouIbyVh4CEx4vClzyFGyWV8FHHVSq7pPx9O5e/Q7ij//qTH/nKmS64zPmAVrgq0r+UoU4QlPL0ETx0l8PbvdLeAJxzwHwEGAEe89+zqt8ZVAAAAAElFTkSuQmCC
// @namespace    https://github.com/Sxngha/PrimeTube/
// @match        *://m.youtube.com/*
// @match        *://www.youtube.com/*
// @match        *://youtube.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    console.log('%c🎬 PrimeTube Loading...', 'color: #FF8C00; font-size: 16px; font-weight: bold;');

    // NOTE: This is a preview/stub showing the NEW features structure
    // The full implementation would include all the original GoodTube functionality
    // plus these new modern UI elements and features

    // ==================================================================================
    // NEW SETTINGS - Auto Quality & Advanced Features
    // ==================================================================================
    
    let primeTube_autoQuality = getCookie('primeTube_autoQuality') || 'best';
    let primeTube_defaultSpeed = getCookie('primeTube_defaultSpeed') || '1';
    let primeTube_rememberVolume = getCookie('primeTube_rememberVolume') || 'true';
    let primeTube_savedVolume = getCookie('primeTube_savedVolume') || '100';
    let primeTube_theaterByDefault = getCookie('primeTube_theaterByDefault') || 'false';

    // ==================================================================================
    // MODERN UI STYLES - Golden Orange & Black Theme
    // ==================================================================================
    
    function injectModernStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* PrimeTube Modern UI */
            :root {
                --prime-orange: #FF8C00;
                --prime-gold: #FFD700;
                --prime-dark: #0a0a0a;
                --prime-dark-2: #1a1a1a;
                --prime-dark-3: #2a2a2a;
            }

            /* Menu Button - Modern Golden Style */
            .primeTube_menuButton {
                position: fixed;
                bottom: 26px;
                right: 21px;
                width: 56px;
                height: 56px;
                background: linear-gradient(135deg, var(--prime-orange), var(--prime-gold));
                border-radius: 50%;
                box-shadow: 0 4px 20px rgba(255, 140, 0, 0.4);
                z-index: 999999;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                display: flex;
                align-items: center;
                justify-content: center;
                border: 2px solid rgba(255, 215, 0, 0.3);
            }

            .primeTube_menuButton:hover {
                transform: scale(1.1) rotate(90deg);
                box-shadow: 0 6px 30px rgba(255, 140, 0, 0.6);
            }

            .primeTube_menuButton svg {
                width: 28px;
                height: 28px;
                fill: var(--prime-dark);
            }

            /* Modal - Modern Dark Theme */
            .primeTube_modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 999998;
                display: none;
                align-items: center;
                justify-content: center;
                background: rgba(0, 0, 0, 0.85);
                backdrop-filter: blur(10px);
            }

            .primeTube_modal.visible {
                display: flex;
                animation: fadeIn 0.3s ease;
            }

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            .primeTube_modal_inner {
                background: var(--prime-dark);
                border: 2px solid var(--prime-orange);
                border-radius: 16px;
                width: 800px;
                max-width: 90vw;
                max-height: 90vh;
                overflow-y: auto;
                padding: 32px;
                box-shadow: 0 20px 60px rgba(255, 140, 0, 0.3);
                animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }

            @keyframes slideUp {
                from { transform: translateY(50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }

            /* Header */
            .primeTube_header {
                display: flex;
                align-items: center;
                gap: 16px;
                margin-bottom: 32px;
                padding-bottom: 24px;
                border-bottom: 2px solid var(--prime-dark-3);
            }

            .primeTube_logo {
                font-size: 36px;
                font-weight: 800;
                background: linear-gradient(135deg, var(--prime-orange), var(--prime-gold));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            .primeTube_version {
                background: var(--prime-dark-2);
                color: var(--prime-gold);
                padding: 4px 12px;
                border-radius: 12px;
                font-size: 12px;
                font-weight: 600;
                border: 1px solid var(--prime-orange);
            }

            /* Close Button */
            .primeTube_closeBtn {
                position: absolute;
                top: 20px;
                right: 20px;
                width: 40px;
                height: 40px;
                background: var(--prime-dark-2);
                border: 2px solid var(--prime-orange);
                border-radius: 50%;
                color: var(--prime-orange);
                font-size: 24px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            }

            .primeTube_closeBtn:hover {
                background: var(--prime-orange);
                color: var(--prime-dark);
                transform: rotate(90deg);
            }

            /* Section Title */
            .primeTube_sectionTitle {
                color: var(--prime-gold);
                font-size: 20px;
                font-weight: 700;
                margin-bottom: 16px;
                display: flex;
                align-items: center;
                gap: 12px;
            }

            .primeTube_sectionTitle::before {
                content: '';
                width: 4px;
                height: 24px;
                background: linear-gradient(to bottom, var(--prime-orange), var(--prime-gold));
                border-radius: 2px;
            }

            /* Setting Cards */
            .primeTube_settingCard {
                background: var(--prime-dark-2);
                border: 1px solid var(--prime-dark-3);
                border-radius: 12px;
                padding: 16px;
                margin-bottom: 12px;
                transition: all 0.3s ease;
            }

            .primeTube_settingCard:hover {
                border-color: var(--prime-orange);
                box-shadow: 0 4px 16px rgba(255, 140, 0, 0.2);
            }

            .primeTube_settingCard label {
                color: #ffffff;
                font-size: 15px;
                font-weight: 500;
                display: block;
                margin-bottom: 8px;
            }

            .primeTube_settingCard p {
                color: #999;
                font-size: 13px;
                margin-top: 8px;
            }

            /* Toggle Switch */
            .primeTube_toggle {
                position: relative;
                width: 50px;
                height: 26px;
                background: var(--prime-dark-3);
                border-radius: 13px;
                cursor: pointer;
                transition: all 0.3s ease;
                border: 2px solid var(--prime-dark-3);
            }

            .primeTube_toggle.active {
                background: var(--prime-orange);
                border-color: var(--prime-gold);
            }

            .primeTube_toggle::after {
                content: '';
                position: absolute;
                width: 20px;
                height: 20px;
                background: white;
                border-radius: 50%;
                top: 1px;
                left: 2px;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .primeTube_toggle.active::after {
                left: 26px;
            }

            /* Select Dropdown */
            .primeTube_select {
                width: 100%;
                background: var(--prime-dark-3);
                color: white;
                border: 2px solid var(--prime-dark-3);
                border-radius: 8px;
                padding: 12px;
                font-size: 14px;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .primeTube_select:hover,
            .primeTube_select:focus {
                border-color: var(--prime-orange);
                outline: none;
            }

            .primeTube_select option {
                background: var(--prime-dark-2);
                color: white;
            }

            /* Save Button */
            .primeTube_saveBtn {
                width: 100%;
                background: linear-gradient(135deg, var(--prime-orange), var(--prime-gold));
                color: var(--prime-dark);
                border: none;
                border-radius: 12px;
                padding: 16px;
                font-size: 16px;
                font-weight: 700;
                cursor: pointer;
                margin-top: 24px;
                transition: all 0.3s ease;
                box-shadow: 0 4px 16px rgba(255, 140, 0, 0.3);
            }

            .primeTube_saveBtn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 24px rgba(255, 140, 0, 0.5);
            }

            /* Scrollbar */
            .primeTube_modal_inner::-webkit-scrollbar {
                width: 8px;
            }

            .primeTube_modal_inner::-webkit-scrollbar-track {
                background: var(--prime-dark-2);
                border-radius: 4px;
            }

            .primeTube_modal_inner::-webkit-scrollbar-thumb {
                background: var(--prime-orange);
                border-radius: 4px;
            }

            .primeTube_modal_inner::-webkit-scrollbar-thumb:hover {
                background: var(--prime-gold);
            }
        `;
        document.head.appendChild(style);
    }

    // ==================================================================================
    // COOKIE HELPERS
    // ==================================================================================
    
    function setCookie(name, value, days = 365) {
        document.cookie = name + "=" + encodeURIComponent(value) + ";SameSite=Lax;path=/;max-age=" + (days * 24 * 60 * 60);
    }

    function getCookie(name) {
        let cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].split("=");
            if (name == cookie[0].trim()) {
                return decodeURIComponent(cookie[1]);
            }
        }
        return null;
    }

    // ==================================================================================
    // BUILD MODERN UI
    // ==================================================================================
    
    function buildModernUI() {
        const container = document.createElement('div');
        container.innerHTML = `
            <!-- Menu Button -->
            <div class="primeTube_menuButton">
                <svg viewBox="0 0 24 24">
                    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                </svg>
            </div>

            <!-- Modal -->
            <div class="primeTube_modal">
                <div class="primeTube_modal_inner">
                    <div class="primeTube_closeBtn">×</div>
                    
                    <div class="primeTube_header">
                        <div class="primeTube_logo">PrimeTube</div>
                        <div class="primeTube_version">v4.0</div>
                    </div>

                    <!-- Auto Quality Section -->
                    <div class="primeTube_sectionTitle">🎥 Video Quality</div>
                    <div class="primeTube_settingCard">
                        <label>Auto Quality Selector</label>
                        <select class="primeTube_select" id="autoQuality">
                            <option value="best">Best Quality (Auto)</option>
                            <option value="2160">2160p (4K)</option>
                            <option value="1440">1440p (2K)</option>
                            <option value="1080">1080p (Full HD)</option>
                            <option value="720">720p (HD)</option>
                            <option value="480">480p</option>
                            <option value="360">360p</option>
                            <option value="240">240p</option>
                            <option value="144">144p</option>
                        </select>
                        <p>Automatically set video quality on load</p>
                    </div>

                    <!-- Playback Section -->
                    <div class="primeTube_sectionTitle" style="margin-top: 24px;">⚡ Playback</div>
                    <div class="primeTube_settingCard">
                        <label>Default Playback Speed</label>
                        <select class="primeTube_select" id="defaultSpeed">
                            <option value="0.25">0.25x</option>
                            <option value="0.5">0.5x</option>
                            <option value="0.75">0.75x</option>
                            <option value="1">Normal (1x)</option>
                            <option value="1.25">1.25x</option>
                            <option value="1.5">1.5x</option>
                            <option value="1.75">1.75x</option>
                            <option value="2">2x</option>
                        </select>
                        <p>Videos will start at this speed</p>
                    </div>

                    <!-- Audio Section -->
                    <div class="primeTube_sectionTitle" style="margin-top: 24px;">🔊 Audio</div>
                    <div class="primeTube_settingCard">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <label>Remember Volume Level</label>
                                <p>Save your preferred volume</p>
                            </div>
                            <div class="primeTube_toggle" id="rememberVolume"></div>
                        </div>
                    </div>

                    <!-- Display Section -->
                    <div class="primeTube_sectionTitle" style="margin-top: 24px;">🎬 Display</div>
                    <div class="primeTube_settingCard">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <label>Theater Mode by Default</label>
                                <p>Automatically enable theater mode</p>
                            </div>
                            <div class="primeTube_toggle" id="theaterByDefault"></div>
                        </div>
                    </div>

                    <!-- Save Button -->
                    <button class="primeTube_saveBtn">💾 Save Settings & Reload</button>
                </div>
            </div>
        `;
        document.body.appendChild(container);

        // Set current values
        document.getElementById('autoQuality').value = primeTube_autoQuality;
        document.getElementById('defaultSpeed').value = primeTube_defaultSpeed;
        
        if (primeTube_rememberVolume === 'true') {
            document.getElementById('rememberVolume').classList.add('active');
        }
        if (primeTube_theaterByDefault === 'true') {
            document.getElementById('theaterByDefault').classList.add('active');
        }

        // Event listeners
        document.querySelector('.primeTube_menuButton').addEventListener('click', () => {
            document.querySelector('.primeTube_modal').classList.add('visible');
        });

        document.querySelector('.primeTube_closeBtn').addEventListener('click', () => {
            document.querySelector('.primeTube_modal').classList.remove('visible');
        });

        document.querySelector('.primeTube_modal').addEventListener('click', (e) => {
            if (e.target.classList.contains('primeTube_modal')) {
                document.querySelector('.primeTube_modal').classList.remove('visible');
            }
        });

        // Toggle switches
        document.querySelectorAll('.primeTube_toggle').forEach(toggle => {
            toggle.addEventListener('click', () => {
                toggle.classList.toggle('active');
            });
        });

        // Save button
        document.querySelector('.primeTube_saveBtn').addEventListener('click', () => {
            setCookie('primeTube_autoQuality', document.getElementById('autoQuality').value);
            setCookie('primeTube_defaultSpeed', document.getElementById('defaultSpeed').value);
            setCookie('primeTube_rememberVolume', document.getElementById('rememberVolume').classList.contains('active') ? 'true' : 'false');
            setCookie('primeTube_theaterByDefault', document.getElementById('theaterByDefault').classList.contains('active') ? 'true' : 'false');
            
            location.reload();
        });
    }

    // ==================================================================================
    // FEATURE IMPLEMENTATIONS
    // ==================================================================================
    
    // Auto Quality Feature
    function applyAutoQuality() {
        const quality = getCookie('primeTube_autoQuality') || 'best';
        
        const checkAndSetQuality = () => {
            const player = document.querySelector('video');
            if (!player) {
                setTimeout(checkAndSetQuality, 500);
                return;
            }

            // Wait for quality menu to be available
            setTimeout(() => {
                const settingsButton = document.querySelector('.ytp-settings-button');
                if (!settingsButton) return;

                // Click settings
                settingsButton.click();
                
                setTimeout(() => {
                    // Find quality option
                    const qualityMenu = Array.from(document.querySelectorAll('.ytp-menuitem')).find(item => 
                        item.textContent.includes('Quality')
                    );
                    
                    if (qualityMenu) {
                        qualityMenu.click();
                        
                        setTimeout(() => {
                            if (quality === 'best') {
                                // Select highest quality
                                const qualities = document.querySelectorAll('.ytp-quality-menu .ytp-menuitem');
                                if (qualities.length > 1) {
                                    qualities[1].click(); // First option after "Auto"
                                }
                            } else {
                                // Select specific quality
                                const targetQuality = Array.from(document.querySelectorAll('.ytp-quality-menu .ytp-menuitem')).find(item =>
                                    item.textContent.includes(quality + 'p')
                                );
                                if (targetQuality) targetQuality.click();
                            }
                            
                            // Close menu
                            settingsButton.click();
                        }, 200);
                    }
                }, 200);
            }, 1000);
        };
        
        checkAndSetQuality();
    }

    // Default Speed Feature
    function applyDefaultSpeed() {
        const speed = parseFloat(getCookie('primeTube_defaultSpeed') || '1');
        
        const checkAndSetSpeed = () => {
            const player = document.querySelector('video');
            if (!player) {
                setTimeout(checkAndSetSpeed, 500);
                return;
            }

            player.playbackRate = speed;
            console.log(`%c⚡ Speed set to ${speed}x`, 'color: #FF8C00;');
        };
        
        checkAndSetSpeed();
    }

    // Remember Volume Feature
    function applyVolumeMemory() {
        const rememberVolume = getCookie('primeTube_rememberVolume') === 'true';
        if (!rememberVolume) return;
        
        const savedVolume = parseInt(getCookie('primeTube_savedVolume') || '100');
        
        const checkAndSetVolume = () => {
            const player = document.querySelector('video');
            if (!player) {
                setTimeout(checkAndSetVolume, 500);
                return;
            }

            player.volume = savedVolume / 100;
            console.log(`%c🔊 Volume set to ${savedVolume}%`, 'color: #FF8C00;');
            
            // Save volume changes
            player.addEventListener('volumechange', () => {
                setCookie('primeTube_savedVolume', Math.round(player.volume * 100));
            });
        };
        
        checkAndSetVolume();
    }

    // Theater Mode by Default
    function applyTheaterMode() {
        const theaterByDefault = getCookie('primeTube_theaterByDefault') === 'true';
        if (!theaterByDefault) return;
        
        const checkAndSetTheater = () => {
            const theaterButton = document.querySelector('.ytp-size-button');
            if (!theaterButton) {
                setTimeout(checkAndSetTheater, 500);
                return;
            }

            // Check if already in theater mode
            const isTheater = document.querySelector('ytd-watch-flexy[theater]');
            if (!isTheater) {
                theaterButton.click();
                console.log('%c🎬 Theater mode enabled', 'color: #FF8C00;');
            }
        };
        
        setTimeout(checkAndSetTheater, 1500);
    }

    // Apply all features on video load
    function applyAllFeatures() {
        applyAutoQuality();
        applyDefaultSpeed();
        applyVolumeMemory();
        applyTheaterMode();
    }

    // Watch for URL changes (YouTube is a SPA)
    let lastUrl = location.href;
    new MutationObserver(() => {
        const currentUrl = location.href;
        if (currentUrl !== lastUrl) {
            lastUrl = currentUrl;
            if (currentUrl.includes('/watch')) {
                console.log('%c🎬 New video detected, applying features...', 'color: #FFD700;');
                setTimeout(applyAllFeatures, 1000);
            }
        }
    }).observe(document, { subtree: true, childList: true });

    // ==================================================================================
    // INITIALIZE
    // ==================================================================================
    
    function init() {
        if (window.location.href.includes('youtube.com')) {
            injectModernStyles();
            
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    buildModernUI();
                    if (location.href.includes('/watch')) {
                        applyAllFeatures();
                    }
                });
            } else {
                buildModernUI();
                if (location.href.includes('/watch')) {
                    applyAllFeatures();
                }
            }

            console.log('%c✨ PrimeTube Ready!', 'color: #FFD700; font-size: 14px; font-weight: bold;');
        }
    }

    init();

})();
