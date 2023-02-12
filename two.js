document.getElementById('deposit').addEventListener('click', function(){
    const userDeposit = document.getElementById('user-deposit');
    const userValu = userDeposit.value;
    const userValuString = parseFloat(userValu);

    

    const totalBalance = document.getElementById('total-deposit');
    const tatalIner = totalBalance.innerText;
    const totalDepositString= parseFloat(tatalIner);

    const totalUserBalance = totalDepositString+userValuString;

    totalBalance.innerText=totalUserBalance;


    const balance= document.getElementById('balance');
    const balanceInner = balance.innerText;
    const balanceString = parseFloat(balanceInner);
    balance.innerText = totalUserBalance;


    userDeposit.value="";
})


document.getElementById('withdraw').addEventListener("click", function(){
    
    const withdraw = document.getElementById('user-withdrow');
    const withdrawValue = withdraw.value;
    const withdrawString = parseFloat(withdrawValue);
    


    const wit = document.getElementById('withdra');
    const withInner = wit.innerText;
    const withString = parseFloat(withInner);


    const totalWithdraw = withdrawString+withString;
    wit.innerText= totalWithdraw;

    const balance = document.getElementById('balance');
    const balanceInner = balance.innerText;
    const balanceString = parseFloat(balanceInner);

    const balanceSub = balanceString-withdrawString;
    balance.innerText= balanceSub;




    withdraw.value="";



    

})