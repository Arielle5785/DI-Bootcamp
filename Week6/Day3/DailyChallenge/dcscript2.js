
const fromInput = document.getElementById('from');
console.log(fromInput);

const toInput = document.getElementById('to');
const amountInput = document.getElementById('amount');
const convertButton = document.getElementById('convert');
const switchButton = document.getElementById('switch');

const convertCurrency = async () => {
    const fromCCY = fromInput.value.trim().toUpperCase();
    const toCCY = toInput.value.trim().toUpperCase();
    const amount = amountInput.value.trim();

    if (!fromCCY || !toCCY || !amount) {
        alert('Please enter valid currencies and amount.');
        return;
    }
    
    try {
        
        // const fromCCY = from
        // const toCCY = to
        const response = await fetch(`https://v6.exchangerate-api.com/v6/a3623b26bf23055eacbdf020/pair/${fromCCY}/${toCCY}/${amount}`);
        console.log(`https://v6.exchangerate-api.com/v6/a3623b26bf23055eacbdf020/pair/${fromCCY}/${toCCY}/${amount}`);
        
        // if (!response.ok ) {
        //     throw new Error(`Error: ${response.status}`);
        // }
        
        const data = await response.json();
        console.log('data',data);
        

        fromCCY = data?.base_code;
        console.log(fromCCY);
        
        // toCCY = data?.target_code;
        // let rate = data?.conversion_rate;
        // amount = data?.conversion_result;
        // document.getElementById('convertedAmount').append(amount)
        // const reverseAmount = 1 / data.conversion_result
        // document.getElementById('reverseAmount').append(switch)


    } catch (error) {
        console.log(`Failed to load data.`);
       
    };
}
convertButton.addEventListener('click', convertCurrency)

// Add event listener to the button


    

