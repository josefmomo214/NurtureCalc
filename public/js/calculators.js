document.addEventListener("DOMContentLoaded", () => {
    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
        mobileMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' || e.target === mobileMenu) {
                mobileMenu.classList.remove('active');
            }
        });
    }

    // Cookie Banner (Opt-In GDPR Compliant)
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookies = document.getElementById('acceptCookies');
    
    // Check local storage for consent
    if (cookieBanner && !localStorage.getItem('cookieConsent')) {
        setTimeout(() => {
            cookieBanner.classList.add('visible');
        }, 1000);
    }

    if (acceptCookies) {
        acceptCookies.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieBanner.classList.remove('visible');
            loadAdsenseAfterConsent();
        });
    }

    // Load adsense only if accepted
    function loadAdsenseAfterConsent() {
        if (localStorage.getItem('cookieConsent') === 'accepted') {
            const script = document.createElement('script');
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
            script.async = true;
            document.head.appendChild(script);
        }
    }
    loadAdsenseAfterConsent();

    // Global Unit Toggle
    let currentUnit = localStorage.getItem('nurturecalc_unit') || 'metric';
    initUnitToggle();
    updateLabels();

    function initUnitToggle() {
        const unitBtns = document.querySelectorAll('.unit-btn');
        unitBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const selected = e.target.dataset.unit;
                if (selected !== currentUnit) {
                    currentUnit = selected;
                    localStorage.setItem('nurturecalc_unit', currentUnit);
                    updateToggleUI();
                    convertValues();
                    updateLabels();
                    validateForm(); // Re-validate after unit conversion
                }
            });
        });
        updateToggleUI();
    }

    function updateToggleUI() {
        document.querySelectorAll('.unit-btn').forEach(btn => {
            if (btn.dataset.unit === currentUnit) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    function updateLabels() {
        const weightLabels = document.querySelectorAll('.label-weight');
        const heightContainers = document.querySelectorAll('.height-container');

        weightLabels.forEach(label => {
            label.textContent = currentUnit === 'metric' ? 'Weight (kg)' : 'Weight (lbs)';
        });

        heightContainers.forEach(container => {
            const metric = container.querySelector('.height-metric');
            const imperial = container.querySelector('.height-imperial');
            if (metric && imperial) {
                if (currentUnit === 'metric') {
                    metric.classList.remove('hidden');
                    imperial.classList.add('hidden');
                } else {
                    metric.classList.add('hidden');
                    imperial.classList.remove('hidden');
                }
            }
        });
    }

    function convertValues() {
        // ... (Skipping conversion logic identical to before for brevity, rewritten as pure text)
        const weightInputs = document.querySelectorAll('input.val-weight');
        weightInputs.forEach(input => {
            if (input.value) {
                let val = parseFloat(input.value);
                if (currentUnit === 'metric') {
                    input.value = (val / 2.20462).toFixed(1);
                } else {
                    input.value = (val * 2.20462).toFixed(1);
                }
            }
        });
        
        const cmInput = document.querySelector('input.val-height-cm');
        const ftInput = document.querySelector('input.val-height-ft');
        const inInput = document.querySelector('input.val-height-in');
        
        if (cmInput && ftInput && inInput) {
            if (currentUnit === 'metric') {
                let ft = parseFloat(ftInput.value) || 0;
                let inch = parseFloat(inInput.value) || 0;
                if (ft > 0 || inch > 0) {
                    cmInput.value = Math.round((ft * 30.48) + (inch * 2.54));
                }
            } else {
                let cm = parseFloat(cmInput.value);
                if (cm > 0) {
                    ftInput.value = Math.floor(cm / 30.48);
                    inInput.value = Math.round((cm % 30.48) / 2.54);
                }
            }
        }
    }

    // --- Input Validation & Sanitisation ---
    const calcForm = document.getElementById('calcForm');
    const submitBtn = calcForm ? calcForm.querySelector('button[type="submit"]') : null;

    const validationRules = {
        'age': { min: 15, max: 60, msg: 'Age must be between 15 and 60 years.' },
        'weeksPostpartum': { min: 1, max: 52, msg: 'Weeks postpartum must be between 1 and 52.' },
        'babyAge': { min: 0, max: 52, msg: 'Baby age must be between 0 and 52 weeks.' }
    };

    function getWeightLimits() {
        return currentUnit === 'metric' 
            ? { min: 30, max: 300, msg: 'Weight must be between 30 and 300 kg.' }
            : { min: 66, max: 660, msg: 'Weight must be between 66 and 660 lbs.' };
    }

    function getBabyWeightLimits() {
        return currentUnit === 'metric'
            ? { min: 0.5, max: 20, msg: 'Baby weight must be between 0.5 and 20 kg.' }
            : { min: 1, max: 45, msg: 'Baby weight must be between 1.1 and 44 lbs.' };
    }

    function getHeightLimits() {
        return currentUnit === 'metric'
            ? { min: 100, max: 250, msg: 'Height must be between 100 and 250 cm.' }
            : { min: 39, max: 98, msg: 'Height must be between 3 ft 3 in and 8 ft 2 in.' };
    }

    function showError(input, message) {
        let errorDiv = input.nextElementSibling;
        if (!errorDiv || !errorDiv.classList.contains('input-error')) {
            errorDiv = document.createElement('div');
            errorDiv.classList.add('input-error');
            errorDiv.style.color = '#E8A0A8';
            errorDiv.style.fontSize = '0.875rem';
            errorDiv.style.marginTop = '4px';
            input.parentNode.insertBefore(errorDiv, input.nextSibling);
        }
        errorDiv.textContent = message;
        input.style.borderColor = '#E8A0A8';
    }

    function clearError(input) {
        let errorDiv = input.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('input-error')) {
            errorDiv.remove();
        }
        input.style.borderColor = ''; // Reset to CSS default
    }

    function validateField(input) {
        if (!input || input.type !== 'number') return true;
        
        // Strip non-numeric on blur (handled by a separate blur listener)
        let val = parseFloat(input.value);
        if (isNaN(val)) return false; // Don't show range error if empty, just required check fails later
        
        let isValid = true;
        let rule = null;

        if (input.id === 'age') rule = validationRules['age'];
        if (input.id === 'weeksPostpartum') rule = validationRules['weeksPostpartum'];
        if (input.id === 'babyAge') rule = validationRules['babyAge'];
        if (input.id === 'currentWeight') {
            rule = calcForm.dataset.calcType === 'babyWeight' ? getBabyWeightLimits() : getWeightLimits();
        }
        if (input.id === 'heightCm' && !input.closest('.hidden')) {
            rule = getHeightLimits();
        }

        if (rule) {
            if (val < rule.min || val > rule.max) {
                showError(input, rule.msg);
                isValid = false;
            } else {
                clearError(input);
            }
        }

        // Special check for imperial height
        if ((input.id === 'heightFt' || input.id === 'heightIn') && !input.closest('.hidden')) {
            const ftInput = document.getElementById('heightFt');
            const inInput = document.getElementById('heightIn');
            let ftValid = true;
            let inValid = true;

            const ft = parseFloat(ftInput.value) || 0;
            const inch = parseFloat(inInput.value) || 0;
            const totalInches = (ft * 12) + inch;
            
            if (totalInches > 0 && (totalInches < 39 || totalInches > 98)) {
                showError(inInput, getHeightLimits().msg);
                isValid = false;
            } else {
                clearError(ftInput);
                clearError(inInput);
            }
        }

        return isValid;
    }

    function validateForm() {
        if (!calcForm || calcForm.dataset.calcType === 'pelvicFloor') return;
        
        let allValid = true;
        let allRequiredFilled = true;

        const inputs = calcForm.querySelectorAll('input[type="number"]');
        inputs.forEach(input => {
            // Ignore hidden fields
            if (input.closest('.hidden')) return;

            if (input.required && !input.value) {
                allRequiredFilled = false;
            }

            if (input.value) {
                if (!validateField(input)) {
                    allValid = false;
                }
            }
        });

        // Radio groups check
        const radioGroups = calcForm.querySelectorAll('.radio-group');
        radioGroups.forEach(group => {
            const requiredRadio = group.querySelector('input[type="radio"][required]');
            if (requiredRadio) {
                const checked = group.querySelector('input[type="radio"]:checked');
                if (!checked) allRequiredFilled = false;
            }
        });

        if (submitBtn) {
            submitBtn.disabled = !(allValid && allRequiredFilled);
            submitBtn.style.opacity = submitBtn.disabled ? '0.5' : '1';
        }
    }

    if (calcForm) {
        const numberInputs = calcForm.querySelectorAll('input[type="number"]');
        numberInputs.forEach(input => {
            input.addEventListener('input', validateForm);
            input.addEventListener('blur', () => {
                // Strip all non-numeric characters (except decimal point)
                if (input.value) {
                    input.value = input.value.replace(/[^0-9.]/g, '');
                    validateField(input);
                }
            });
        });

        const radios = calcForm.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => radio.addEventListener('change', validateForm));
        
        const selects = calcForm.querySelectorAll('select');
        selects.forEach(select => select.addEventListener('change', validateForm));

        // Initial validation
        validateForm();
    }


    // --- Calculators Logic ---
    const resultCard = document.getElementById('resultCard');
    const resultValue = document.getElementById('resultValue');
    const resetBtn = document.getElementById('resetBtn');

    if (calcForm) {
        calcForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const type = calcForm.dataset.calcType;
            let resultData = null;

            if (type === 'weightLoss') resultData = calcWeightLoss();
            else if (type === 'calorieNeeds') resultData = calcCalorieNeeds();
            else if (type === 'exerciseTimeline') resultData = calcExerciseTimeline();
            else if (type === 'babyWeight') resultData = calcBabyWeight();

            if (resultData) {
                // CLEAR previous content securely
                resultValue.textContent = '';
                
                // Create primary heading
                const mainSpan = document.createElement('span');
                mainSpan.style.color = resultData.color || 'var(--primary-color)';
                mainSpan.style.fontSize = '2.5rem';
                mainSpan.style.fontWeight = 'bold';
                mainSpan.textContent = resultData.main;
                resultValue.appendChild(mainSpan);

                // Create subtext safely
                if (resultData.sub) {
                    const br = document.createElement('br');
                    resultValue.appendChild(br);
                    const small = document.createElement('small');
                    small.style.fontSize = '1rem';
                    small.style.fontWeight = 'normal';
                    small.style.lineHeight = '1.4';
                    small.style.display = 'block';
                    small.style.marginTop = '8px';
                    small.textContent = resultData.sub;
                    resultValue.appendChild(small);
                }

                calcForm.classList.add('hidden');
                resultCard.classList.remove('hidden');
            }
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            resultCard.classList.add('hidden');
            calcForm.classList.remove('hidden');
            if (calcForm.dataset.calcType !== 'pelvicFloor') {
                calcForm.reset();
                validateForm();
                clearAllErrors();
            }
        });
    }

    function clearAllErrors() {
        const errors = calcForm.querySelectorAll('.input-error');
        errors.forEach(err => err.remove());
        const inputs = calcForm.querySelectorAll('input');
        inputs.forEach(input => input.style.borderColor = '');
    }

    function calcWeightLoss() {
        let weight = parseFloat(document.getElementById('currentWeight').value);
        const weeks = parseInt(document.getElementById('weeksPostpartum').value);
        const isBf = document.getElementById('breastfeedingYes').checked;
        
        if (currentUnit === 'imperial') weight = weight / 2.20462;
        
        let rate = 0;
        let subText = "";

        if (isBf && weeks < 12) { rate = 0.25; subText = "Gentle weight loss allows your milk supply to establish safely while you heal."; }
        else if (isBf && weeks >= 12) { rate = 0.5; subText = "A moderate pace ensures your body still has fuel for breastfeeding."; }
        else if (!isBf && weeks < 6) { rate = 0; subText = "Your body is actively healing from birth. It is not recommended to actively try losing weight before your 6-week postnatal check."; }
        else if (!isBf && weeks >= 6) { rate = 0.75; subText = "This is a healthy, sustainable rate for long-term recovery."; }

        if (rate === 0) return { main: "Wait to Heal", sub: subText };
        
        if (currentUnit === 'imperial') {
            return { main: `Up to ${(rate * 2.20462).toFixed(1)} lbs / week`, sub: subText };
        } else {
            return { main: `Up to ${rate} kg / week`, sub: subText };
        }
    }

    function calcCalorieNeeds() {
        const age = parseInt(document.getElementById('age').value);
        let weight = parseFloat(document.getElementById('currentWeight').value);
        let heightCm = 0;

        if (currentUnit === 'metric') {
            heightCm = parseFloat(document.getElementById('heightCm').value);
        } else {
            weight = weight / 2.20462;
            const ft = parseFloat(document.getElementById('heightFt').value) || 0;
            const inch = parseFloat(document.getElementById('heightIn').value) || 0;
            heightCm = (ft * 30.48) + (inch * 2.54);
        }

        const activity = parseFloat(document.getElementById('activityLevel').value);
        const bfRadios = document.getElementsByName('breastfeeds');
        let bfCals = 0;
        for (const radio of bfRadios) if (radio.checked) bfCals = parseInt(radio.value);

        const bmr = (10 * weight) + (6.25 * heightCm) - (5 * age) - 161;
        const total = Math.round((bmr * activity) + bfCals);

        return {
            main: `~${total.toLocaleString()} kcal / day`,
            sub: `Includes a ${bfCals} calorie allowance for breastfeeding.`
        };
    }

    function calcExerciseTimeline() {
        const isVaginal = document.getElementById('deliveryVaginal').checked;
        const weeks = parseInt(document.getElementById('weeksPostpartum').value);
        const leak = document.getElementById('sympLeak').checked;
        const heavy = document.getElementById('sympHeavy').checked;
        const pain = document.getElementById('sympPain').checked;

        if (leak || heavy || pain) {
            return {
                main: "Not yet ready",
                sub: "Symptoms indicate you should seek advice from a pelvic health physiotherapist before exercising.",
                color: "#E8A0A8"
            };
        }

        let main = "";
        if (isVaginal) {
            if (weeks < 6) main = "Not yet ready — gentle walking only";
            else if (weeks <= 12) main = "Gentle start — walking, stretching, postnatal yoga";
            else if (weeks <= 20) main = "Building up — add bodyweight exercises";
            else main = "Full return — listen to your body";
        } else {
            if (weeks < 8) main = "Not yet ready — short walks only";
            else if (weeks <= 12) main = "Gentle start — low impact only";
            else if (weeks <= 20) main = "Building up — add bodyweight exercises";
            else main = "Full return — listen to your body";
        }
        return { main: main, sub: "" };
    }

    function calcBabyWeight() {
        let weight = parseFloat(document.getElementById('currentWeight').value);
        const weeks = parseInt(document.getElementById('babyAge').value);
        const sex = document.querySelector('input[name="babySex"]:checked')?.value;

        if (currentUnit === 'imperial') weight = weight / 2.20462;

        let baseWeight = sex === 'girl' ? 3.2 + (weeks * 0.11) : 3.3 + (weeks * 0.12);
        let diff = weight - baseWeight;
        let stdDev = diff / (0.8 + (weeks * 0.01));

        let percentile = 50;
        if (stdDev > 1.88) percentile = 97;
        else if (stdDev > 1.04) percentile = 85;
        else if (stdDev > -1.04) percentile = 50 + (stdDev * 30);
        else if (stdDev > -1.64) percentile = 10;
        else percentile = 3;

        percentile = Math.max(1, Math.min(99, Math.round(percentile)));

        let color = "var(--text-color)";
        let sub = "";

        if (percentile >= 15 && percentile <= 85) {
            color = "#3f6653"; // green-ish
            sub = "Healthy range (15th - 85th percentile)";
        } else if ((percentile > 85 && percentile <= 97) || (percentile >= 5 && percentile < 15)) {
            color = "#cba72f"; // yellow
            sub = "Worth monitoring with your care provider.";
        } else {
            color = "#ba1a1a"; // red
            sub = "Outside standard percentiles (under 5th or over 97th). Please discuss with your doctor.";
        }

        return {
            main: `${percentile}th percentile`,
            sub: sub,
            color: color
        };
    }

    // Pelvic Floor Quiz Logic
    const quizNextBtn = document.getElementById('quizNextBtn');
    if (quizNextBtn) {
        let currentStep = 1;
        quizNextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentDiv = document.querySelector(`.quiz-step[data-step="${currentStep}"]`);
            const selected = currentDiv.querySelector('input[type="radio"]:checked');
            
            if (!selected) {
                 // Inline validation for quiz
                 let err = currentDiv.querySelector('.quiz-error');
                 if (!err) {
                     err = document.createElement('p');
                     err.classList.add('quiz-error');
                     err.style.color = '#E8A0A8';
                     err.style.marginTop = '8px';
                     err.textContent = 'Please select an answer.';
                     currentDiv.appendChild(err);
                 }
                 return;
            } else {
                let err = currentDiv.querySelector('.quiz-error');
                if (err) err.remove();
            }

            if (currentStep < 4) {
                currentDiv.classList.add('hidden');
                currentStep++;
                const nextDiv = document.querySelector(`.quiz-step[data-step="${currentStep}"]`);
                nextDiv.classList.remove('hidden');
                document.getElementById('quizProgress').style.width = ((currentStep / 4) * 100) + '%';
                if (currentStep === 4) quizNextBtn.textContent = 'See Results';
            } else {
                const q2 = parseInt(document.querySelector('input[name="q2"]:checked').value);
                const q3 = parseInt(document.querySelector('input[name="q3"]:checked').value);
                const q4 = parseInt(document.querySelector('input[name="q4"]:checked').value);
                const score = q2 + q3 + q4;

                let main = "";
                let sub = "";

                if (score >= 6) {
                    main = "Early Recovery phase";
                    sub = "We highly recommend seeing a pelvic floor physiotherapist to guide your healing. Avoid high impact activities.";
                } else if (score >= 3) {
                    main = "Progressing phase";
                    sub = "You are making progress but still healing. Focus on core connections and consider a physio review.";
                } else {
                    main = "Strong Recovery";
                    sub = "Your pelvic floor seems to be recovering well. Continue listening to your body as you increase activity.";
                }

                document.getElementById('quizContainer').classList.add('hidden');
                
                resultValue.textContent = '';
                const titleSpan = document.createElement('span');
                titleSpan.style.fontSize = '2rem';
                titleSpan.textContent = main;
                resultValue.appendChild(titleSpan);

                const br = document.createElement('br');
                resultValue.appendChild(br);

                const small = document.createElement('small');
                small.style.fontSize = '1rem';
                small.style.fontWeight = 'normal';
                small.style.lineHeight = '1.4';
                small.style.display = 'block';
                small.style.marginTop = '16px';
                small.textContent = sub;
                resultValue.appendChild(small);

                resultCard.classList.remove('hidden');
                quizNextBtn.classList.add('hidden');
            }
        });
    }

});