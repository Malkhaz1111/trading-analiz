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
    }

    // საიტის ინიციალიზაცია
    initializeSite();
});