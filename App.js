// ტრეიდინგის ანალიზის საიტის JavaScript კოდი

document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to selected tab and content
            tab.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Symbol change simulation
    const symbolSelect = document.getElementById('symbol-select');
    const marketSelect = document.getElementById('market-select');
    
    // Libertex ვალუტების დამატება
    addLibertexCurrencies();
    
    function updateAnalysis() {
        // Show loading spinner
        const chartSection = document.querySelector('.chart-section');
        const loading = document.createElement('div');
        loading.className = 'loading';
        loading.innerHTML = '<div class="spinner"></div>';
        chartSection.appendChild(loading);
        
        // Simulate analysis delay
        setTimeout(() => {
            // Remove loading spinner
            chartSection.removeChild(loading);
            
            // Update random values
            const indicators = document.querySelectorAll('.indicator-value');
            const signals = ['buy', 'sell', 'neutral'];
            const signalTexts = {
                'buy': 'ყიდვა',
                'sell': 'გაყიდვა',
                'neutral': 'ნეიტრალური'
            };
            
            indicators.forEach(indicator => {
                // Remove existing classes
                indicator.classList.remove('buy', 'sell', 'neutral');
                
                // For some indicators, just update numeric values
                if (indicator.textContent.includes('.')) {
                    const baseValue = parseFloat(indicator.textContent);
                    const newValue = (baseValue + (Math.random() * 0.01 - 0.005)).toFixed(4);
                    
                    // For support/resistance levels
                    if (!indicator.textContent.includes('-')) {
                        indicator.textContent = newValue;
                    } else {
                        // For indicators with signal
                        const randomSignal = signals[Math.floor(Math.random() * signals.length)];
                        indicator.textContent = `${newValue} - ${signalTexts[randomSignal]}`;
                        indicator.classList.add(randomSignal);
                    }
                } else if (indicator.textContent.includes('ყიდვა') || 
                           indicator.textContent.includes('გაყიდვა') || 
                           indicator.textContent.includes('ნეიტრალური')) {
                    // For text only signals
                    const randomSignal = signals[Math.floor(Math.random() * signals.length)];
                    indicator.textContent = signalTexts[randomSignal];
                    indicator.classList.add(randomSignal);
                }
            });
            
            // Update strategies
            const strategySignals = document.querySelectorAll('.signal-indicator');
            const signalClasses = ['buy-bg', 'sell-bg', 'neutral-bg'];
            const signalTextsArray = ['ყიდვის სიგნალი', 'გაყიდვის სიგნალი', 'ნეიტრალური სიგნალი'];
            
            strategySignals.forEach(signal => {
                // Remove existing classes
                signal.classList.remove('buy-bg', 'sell-bg', 'neutral-bg');
                
                // Add random class
                const randomIndex = Math.floor(Math.random() * signalClasses.length);
                signal.classList.add(signalClasses[randomIndex]);
                
                // Update text
                const textElement = signal.nextElementSibling;
                if (textElement) {
                    textElement.textContent = signalTextsArray[randomIndex];
                }
            });

            // სიმულაცია TradingView API-სთან დაკავშირების
            updateChartData();
            
            // პროცენტული პროგნოზის დამატება
            updateProbabilityPrediction();
            
            // სანთლების მოძრაობის ანალიზი
            updateCandleAnalysis();
            
            // სავაჭრო დროის რეკომენდაცია
            updateTimeZoneRecommendation();
            
        }, 1500);
    }
    
    // Initial analysis
    updateAnalysis();
    
    // Event listeners for analysis updates
    symbolSelect.addEventListener('change', updateAnalysis);
    marketSelect.addEventListener('change', updateAnalysis);
    
    const timeframeButtons = document.querySelectorAll('.timeframe-btn');
    timeframeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all timeframe buttons
            timeframeButtons.forEach(btn => btn.style.backgroundColor = '');
            
            // Add active class to selected button
            this.style.backgroundColor = '#0d47a1';
            
            // Update analysis
            updateAnalysis();
        });
    });
    
    // Set initial active timeframe
    timeframeButtons[3].style.backgroundColor = '#0d47a1';

    // Function to update chart data (would connect to TradingView API in real implementation)
    function updateChartData() {
        const selectedSymbol = symbolSelect.value;
        const selectedMarket = marketSelect.value;
        console.log(`Updating chart for ${selectedSymbol} in ${selectedMarket} market`);
        
        // აქ იქნებოდა TradingView API-ის გამოძახება რეალურ იმპლემენტაციაში
        
        // მაგალითად:
        // const widget = new TradingView.widget({
        //    container_id: 'chart-container',
        //    symbol: selectedSymbol,
        //    interval: 'D',
        //    ...other parameters
        // });
    }

    // TradingView API-ის დამატების ფუნქცია (რეალურ პროექტში)
    function loadTradingViewWidget() {
        // კოდი TradingView-ის Widget-ის დასამატებლად
        // აქ შეგიძლიათ დაამატოთ ნამდვილი Trading View API კოდი
    }

    // ინდიკატორების გამოთვლის ფუნქციები (რეალურ იმპლემენტაციაში უფრო რთული იქნებოდა)
    
    // RSI ინდიკატორი
    function calculateRSI(prices, period = 14) {
        // RSI-ის გამოთვლის ლოგიკა
        return Math.random() * 100; // სიმულაცია
    }
    
    // MACD ინდიკატორი
    function calculateMACD(prices, fastPeriod = 12, slowPeriod = 26, signalPeriod = 9) {
        // MACD-ის გამოთვლის ლოგიკა
        return Math.random() * 0.01 - 0.005; // სიმულაცია
    }
    
    // მოძრავი საშუალო
    function calculateMA(prices, period = 50) {
        // მოძრავი საშუალოს გამოთვლის ლოგიკა
        return Math.random() + 1; // სიმულაცია
    }
    
    // ბოლინჯერის სარტყელები
    function calculateBollingerBands(prices, period = 20, deviations = 2) {
        // ბოლინჯერის სარტყელების გამოთვლის ლოგიკა
        return {
            upper: Math.random() + 1.05,
            middle: Math.random() + 1,
            lower: Math.random() + 0.95
        }; // სიმულაცია
    }
    
    // მხარდაჭერა/წინააღმდეგობის დონეები
    function calculateSupportResistance(prices) {
        // მხარდაჭერა/წინააღმდეგობის გამოთვლის ლოგიკა
        const currentPrice = 1.09;
        return {
            support1: currentPrice - 0.015,
            support2: currentPrice - 0.025,
            resistance1: currentPrice + 0.01,
            resistance2: currentPrice + 0.025
        }; // სიმულაცია
    }

    // სიახლეების API-სთან დაკავშირების ფუნქცია (რეალურ იმპლემენტაციაში)
    function fetchMarketNews() {
        // აქ იქნებოდა API-დან სიახლეების მიღების ლოგიკა
        console.log("Fetching market news...");
    }

    // საიტის ინიციალიზაცია ჩატვირთვისას
    function initializeSite() {
        console.log("Trading Analysis Site initialized");
        updateAnalysis();
        fetchMarketNews();
        
        // UI ელემენტების დამატება ახალი ფუნქციონალისთვის
        createProbabilitySection();
        createCandleAnalysisSection();
        createTimeZoneSection();
    }
    
    // -- ახალი ფუნქციების დამატება --
    
    // 1. პროცენტული პროგნოზის ფუნქციები
    function createProbabilitySection() {
        // შექმენით განყოფილება პროგნოზისთვის
        const analysisSection = document.querySelector('.analysis-section');
        
        if (analysisSection) {
            const probabilitySection = document.createElement('div');
            probabilitySection.className = 'indicator-group probability-section';
            probabilitySection.innerHTML = `
                <h3>პროგნოზი</h3>
                <div class="indicator">
                    <div class="indicator-name">ზრდის შანსი:</div>
                    <div class="indicator-value probability-up">0%</div>
                </div>
                <div class="indicator">
                    <div class="indicator-name">კლების შანსი:</div>
                    <div class="indicator-value probability-down">0%</div>
                </div>
                <div class="indicator">
                    <div class="indicator-name">საბოლოო პროგნოზი:</div>
                    <div class="indicator-value final-prediction">-</div>
                </div>
            `;
            analysisSection.appendChild(probabilitySection);
        }
    }
    
    function updateProbabilityPrediction() {
        // გამოთვალეთ პროგნოზი სხვადასხვა ინდიკატორების საფუძველზე
        const upChance = Math.floor(Math.random() * 101); // 0-100%
        const downChance = 100 - upChance;
        
        // განაახლეთ UI
        const upProbability = document.querySelector('.probability-up');
        const downProbability = document.querySelector('.probability-down');
        const finalPrediction = document.querySelector('.final-prediction');
        
        if (upProbability && downProbability && finalPrediction) {
            upProbability.textContent = `${upChance}%`;
            downProbability.textContent = `${downChance}%`;
            
            // მიანიჭეთ კლასები ფერებისთვის
            upProbability.className = 'indicator-value probability-up';
            downProbability.className = 'indicator-value probability-down';
            
            if (upChance > downChance) {
                upProbability.classList.add('buy');
                finalPrediction.textContent = 'ზრდა';
                finalPrediction.className = 'indicator-value final-prediction buy';
            } else if (downChance > upChance) {
                downProbability.classList.add('sell');
                finalPrediction.textContent = 'კლება';
                finalPrediction.className = 'indicator-value final-prediction sell';
            } else {
                finalPrediction.textContent = 'ნეიტრალური';
                finalPrediction.className = 'indicator-value final-prediction neutral';
            }
        }
    }
    
    // 2. სანთლების ანალიზის ფუნქციები
    function createCandleAnalysisSection() {
        // შექმენით განყოფილება სანთლების ანალიზისთვის
        const analysisSection = document.querySelector('.analysis-section');
        
        if (analysisSection) {
            const candleSection = document.createElement('div');
            candleSection.className = 'indicator-group candle-section';
            candleSection.innerHTML = `
                <h3>სანთლების ანალიზი</h3>
                <div class="indicator">
                    <div class="indicator-name">ბოლო სანთლის ტიპი:</div>
                    <div class="indicator-value candle-type">-</div>
                </div>
                <div class="indicator">
                    <div class="indicator-name">სანთლის ფორმაცია:</div>
                    <div class="indicator-value candle-formation">-</div>
                </div>
                <div class="indicator">
                    <div class="indicator-name">მომდევნო სავარაუდო მოძრაობა:</div>
                    <div class="indicator-value candle-prediction">-</div>
                </div>
                <div class="candlestick-visualization">
                    <canvas id="candlestick-canvas" width="280" height="150"></canvas>
                </div>
            `;
            analysisSection.appendChild(candleSection);
        }
    }
    
    function updateCandleAnalysis() {
        // ანალიზი გააკეთეთ ბოლო სანთლების
        const candleTypes = ['დოჯი', 'ჩაქუჩი', 'გრძელი', 'მოკლე', 'ძაღლის კუდი', 'მარაბოზუ'];
        const candleType = candleTypes[Math.floor(Math.random() * candleTypes.length)];
        
        const candleFormations = ['ვარსკვლავი', 'ჩანთქმა', 'სამი შავი ყორანი', 'პინცეტი', 'გარღვევა', 'ჰარამი'];
        const formation = candleFormations[Math.floor(Math.random() * candleFormations.length)];
        
        const predictions = ['ზრდის მოსალოდნელობა', 'კლების მოსალოდნელობა', 'გვერდითი მოძრაობა'];
        const predictionIndex = Math.floor(Math.random() * predictions.length);
        const prediction = predictions[predictionIndex];
        
        // განაახლეთ UI
        const candleTypeElement = document.querySelector('.candle-type');
        const formationElement = document.querySelector('.candle-formation');
        const predictionElement = document.querySelector('.candle-prediction');
        
        if (candleTypeElement && formationElement && predictionElement) {
            candleTypeElement.textContent = candleType;
            formationElement.textContent = formation;
            predictionElement.textContent = prediction;
            
            // მიანიჭეთ კლასები ფერებისთვის
            predictionElement.className = 'indicator-value candle-prediction';
            if (predictionIndex === 0) {
                predictionElement.classList.add('buy');
            } else if (predictionIndex === 1) {
                predictionElement.classList.add('sell');
            } else {
                predictionElement.classList.add('neutral');
            }
        }
        
        // დახატეთ სანთლები
        drawCandlesticks();
    }
    
    function drawCandlesticks() {
        const canvas = document.getElementById('candlestick-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        // გაასუფთავეთ canvas
        ctx.clearRect(0, 0, width, height);
        
        // ჰორიზონტალური ხაზი (მარტივი სახელმძღვანელო)
        ctx.strokeStyle = '#ddd';
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.stroke();
        
        // დახატეთ სანთლები
        const candleWidth = 20;
        const gap = 10;
        const totalCandles = 7;
        const startX = (width - (totalCandles * (candleWidth + gap))) / 2;
        
        for (let i = 0; i < totalCandles; i++) {
            const x = startX + i * (candleWidth + gap);
            const isUp = Math.random() > 0.5;
            
            // სანთლის სხეული
            const bodyHeight = Math.random() * 50 + 20;
            const bodyY = isUp ? (height / 2) - bodyHeight : height / 2;
            
            // სანთლის ფერი
            ctx.fillStyle = isUp ? 'green' : 'red';
            
            // სანთლის სხეული
            ctx.fillRect(x, bodyY, candleWidth, bodyHeight);
            
            // სანთლის ჩრდილები
            ctx.strokeStyle = ctx.fillStyle;
            ctx.beginPath();
            
            // ზედა ჩრდილი
            const upperShadow = Math.random() * 20 + 5;
            const lowerShadow = Math.random() * 20 + 5;
            
            const wickMiddle = x + candleWidth / 2;
            
            // ზედა ჩრდილი
            ctx.moveTo(wickMiddle, bodyY);
            ctx.lineTo(wickMiddle, bodyY - upperShadow);
            
            // ქვედა ჩრდილი
            ctx.moveTo(wickMiddle, bodyY + bodyHeight);
            ctx.lineTo(wickMiddle, bodyY + bodyHeight + lowerShadow);
            
            ctx.stroke();
        }
    }
    
    // 3. სავაჭრო დროის რეკომენდაციის ფუნქციები
    function createTimeZoneSection() {
        // შექმენით განყოფილება დროის სარტყელის რეკომენდაციისთვის
        const analysisSection = document.querySelector('.analysis-section');
        
        if (analysisSection) {
            const timeZoneSection = document.createElement('div');
            timeZoneSection.className = 'indicator-group timezone-section';
            timeZoneSection.innerHTML = `
                <h3>სავაჭრო დროის რეკომენდაცია</h3>
                <div class="indicator">
                    <div class="indicator-name">რეკომენდირებული სესია:</div>
                    <div class="indicator-value recommended-session">-</div>
                </div>
                <div class="indicator">
                    <div class="indicator-name">საუკეთესო დრო (თბილისის დროით):</div>
                    <div class="indicator-value best-time">-</div>
                </div>
                <div class="indicator">
                    <div class="indicator-name">მოსალოდნელი ვოლატილობა:</div>
                    <div class="indicator-value expected-volatility">-</div>
                </div>
            `;
            analysisSection.appendChild(timeZoneSection);
        }
    }
    
    function updateTimeZoneRecommendation() {
        // დრო და სესიის რეკომენდაციები დამოკიდებულია არჩეულ ვალუტაზე და ბაზარზე
        const selectedSymbol = symbolSelect.value;
        const selectedMarket = marketSelect.value;
        
        // სესიების სია
        const sessions = ['აზიის სესია', 'ევროპის სესია', 'ამერიკის სესია'];
        
        // გენერირეთ რეკომენდაცია ვალუტის ან ბაზრის მიხედვით
        let recommendedSession, bestTime, volatility;
        
        // ლოგიკა რეკომენდაციებისთვის
        if (selectedMarket === 'forex' || selectedMarket === 'crypto') {
            if (selectedSymbol.includes('JPY') || selectedSymbol.includes('AUD') || selectedSymbol.includes('NZD')) {
                recommendedSession = 'აზიის სესია';
                bestTime = '02:00 - 08:00';
            } else if (selectedSymbol.includes('EUR') || selectedSymbol.includes('GBP') || selectedSymbol.includes('CHF')) {
                recommendedSession = 'ევროპის სესია';
                bestTime = '10:00 - 16:00';
            } else if (selectedSymbol.includes('USD') || selectedSymbol.includes('CAD')) {
                recommendedSession = 'ამერიკის სესია';
                bestTime = '16:00 - 22:00';
            } else {
                // თუ დამთხვევა არ მოხდა, შეარჩიეთ შემთხვევითი სესია
                const sessionIndex = Math.floor(Math.random() * sessions.length);
                recommendedSession = sessions[sessionIndex];
                
                if (sessionIndex === 0) {
                    bestTime = '02:00 - 08:00';
                } else if (sessionIndex === 1) {
                    bestTime = '10:00 - 16:00';
                } else {
                    bestTime = '16:00 - 22:00';
                }
            }
        } else {
            // აქციების ბაზრისთვის, დამოკიდებულია რეგიონზე
            if (selectedSymbol.includes('US') || selectedSymbol.includes('NASDAQ') || selectedSymbol.includes('NYSE')) {
                recommendedSession = 'ამერიკის სესია';
                bestTime = '16:30 - 23:00';
            } else if (selectedSymbol.includes('EU') || selectedSymbol.includes('DE') || selectedSymbol.includes('UK')) {
                recommendedSession = 'ევროპის სესია';
                bestTime = '10:00 - 18:30';
            } else {
                recommendedSession = 'აზიის სესია';
                bestTime = '03:00 - 09:00';
            }
        }
        
        // ვოლატილობის გენერაცია
        const volatilityLevels = ['დაბალი', 'საშუალო', 'მაღალი'];
        volatility = volatilityLevels[Math.floor(Math.random() * volatilityLevels.length)];
        
        // განაახლეთ UI
        const sessionElement = document.querySelector('.recommended-session');
        const timeElement = document.querySelector('.best-time');
        const volatilityElement = document.querySelector('.expected-volatility');
        
        if (sessionElement && timeElement && volatilityElement) {
            sessionElement.textContent = recommendedSession;
            timeElement.textContent = bestTime;
            volatilityElement.textContent = volatility;
            
            // ვოლატილობის ფერები
            volatilityElement.className = 'indicator-value expected-volatility';
            if (volatility === 'დაბალი') {
                volatilityElement.classList.add('neutral');
            } else if (volatility === 'საშუალო') {
                volatilityElement.classList.add('buy');
            } else {
                volatilityElement.classList.add('sell');
            }
        }
    }
    
    // 4. Libertex ვალუტების დამატება
    function addLibertexCurrencies() {
        // Libertex-ის ვალუტების სია
        const libertexCurrencies = [
            // Forex
            {value: 'EURUSD', text: 'EUR/USD - ევრო/დოლარი'},
            {value: 'GBPUSD', text: 'GBP/USD - ფუნტი/დოლარი'},
            {value: 'USDJPY', text: 'USD/JPY - დოლარი/იენი'},
            {value: 'AUDUSD', text: 'AUD/USD - ავსტრალიური დოლარი/დოლარი'},
            {value: 'USDCHF', text: 'USD/CHF - დოლარი/შვეიცარული ფრანკი'},
            {value: 'NZDUSD', text: 'NZD/USD - ახალი ზელანდიის დოლარი/დოლარი'},
            {value: 'USDCAD', text: 'USD/CAD - დოლარი/კანადური დოლარი'},
            // Crypto
            {value: 'BTCUSD', text: 'BTC/USD - ბიტკოინი/დოლარი'},
            {value: 'ETHUSD', text: 'ETH/USD - ეთერიუმი/დოლარი'},
            {value: 'LTCUSD', text: 'LTC/USD - ლაითქოინი/დოლარი'},
            {value: 'XRPUSD', text: 'XRP/USD - რიპლი/დოლარი'},
            // Stocks
            {value: 'AAPL', text: 'AAPL - Apple Inc.'},
            {value: 'MSFT', text: 'MSFT - Microsoft'},
            {value: 'AMZN', text: 'AMZN - Amazon'},
            {value: 'FB', text: 'META - Meta (Facebook)'},
            {value: 'GOOGL', text: 'GOOGL - Google'},
            {value: 'TSLA', text: 'TSLA - Tesla'},
            // Indices
            {value: 'US500', text: 'US500 - S&P 500'},
            {value: 'USTEC', text: 'USTEC - Nasdaq 100'},
            {value: 'DE30', text: 'DE30 - DAX 30'},
            // Commodities
            {value: 'GOLD', text: 'GOLD - ოქრო'},
            {value: 'SILVER', text: 'SILVER - ვერცხლი'},
            {value: 'OIL', text: 'OIL - ნავთობი'}
        ];
        
        // განაახლეთ სიმბოლოების ჩამონათვალი, თუ ის არსებობს
        if (symbolSelect) {
            // გაასუფთავეთ არსებული ვარიანტები
            symbolSelect.innerHTML = '';
            
            // დაამატეთ ახალი ვარიანტები
            libertexCurrencies.forEach(currency => {
                const option = document.createElement('option');
                option.value = currency.value;
                option.textContent = currency.text;
                symbolSelect.appendChild(option);
            });
        }
    }

    // საიტის ინიციალიზაცია
    initializeSite();
});
