 function main(){
    async function BTC()
    {
 
     let bit=document.getElementById("BTC")
     let key="16P5BEF58JY7MEYPU34E5BXYABCJADDS1C"
     let url=`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${key}`
     let value=await fetch(url)
     value=await value.json();
 
     bit.innerHTML ="$"+value.result.ethusd +"@" +value.result.ethbtc +"BTC/ETH"
 
    }
 
     BTC()

        var number = "";
        let num1 = document.getElementById("lastblock");
        console.log(num1);
    
       async function lastBlockFunc(){
        let key = "16P5BEF58JY7MEYPU34E5BXYABCJADDS1C";
        let url = `https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=${key}`
        console.log(url)
        let lastBlockValue= await fetch(url)
        let jsonLastBlockValue= await  lastBlockValue.json()
        number=parseInt(jsonLastBlockValue.result,16)
        calculateDifficulty(jsonLastBlockValue.result)
        transaction(jsonLastBlockValue.result)
        console.log(number)
        num1.innerHTML=number
     }
        lastBlockFunc();
    
        
        let transactionid = document.getElementById("transaction")
     
        async function transaction(num){
        let key = "16P5BEF58JY7MEYPU34E5BXYABCJADDS1C"
        let url = `https://api.etherscan.io/api?module=proxy&action=eth_getBlockTransactionCountByNumber&tag=${num}&apikey=YourApiKeyToken`
        let lastTransaction = await fetch(url)
        let jsonLastTransaction = await lastTransaction.json()
        let lastTransactionNumber = parseInt(jsonLastTransaction.result,16);
        transactionid.innerHTML = lastTransactionNumber
      }    
        transaction();
    
        let difficultyFunc = document.getElementById('difficulty')
        
    async function calculateDifficulty(num){
            
            let key = "16P5BEF58JY7MEYPU34E5BXYABCJADDS1C"
            let url=`https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${num}&boolean=true&apikey=YourApiKeyToken`
            let fetchDifficulty = await fetch(url)
            let jsonFetchDifficulty = await fetchDifficulty.json()
            let lastDifficulty = parseInt(jsonFetchDifficulty.result.difficulty,16)
            let afterDecimal = lastDifficulty/1000000000000;
            let afterDecimalLastDifficulty = afterDecimal.toFixed(2) + ' TH'
            calculateHashRate(lastDifficulty)
            difficultyFunc.innerHTML = afterDecimalLastDifficulty
        }
    
    
    
        let hashFunc = document.getElementById('hashrate')
    
    function calculateHashRate(difficultyNumber){
        console.log(difficultyNumber);
        let hashRate = difficultyNumber / 15000000000 
        console.log(hashRate)
        let afterDecimal =  hashRate.toFixed(2) + ' GH/s'
        console.log(afterDecimal)
        hashFunc.innerHTML = afterDecimal
        }
        

    const btn=document.getElementById("btn1")
    const adrs1=document.getElementById("a1")
    const mainresult = document.getElementById("b1")
    
    btn.addEventListener("click",async function(e){
    e.preventDefault()    
    let address=adrs1.value
    let key="16P5BEF58JY7MEYPU34E5BXYABCJADDS1C"
    let url=`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${key}`
    let mainurl= await fetch(url)
    let rvalue=await mainurl.json()
    mainresult.innerHTML= "The Amount in Ether is:" + rvalue.result/1000000000000000000
    
    })
    }
    


 window.onload = main