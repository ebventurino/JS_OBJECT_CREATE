const financialAdvisor = Object.create({}, {
    company: {
        enumerable: true,
        writable: true,
        value: "abc"
    },
    specialty: {
        enumerable: true,
        value: "def"
    },
    portfolio: {
        enumerable: false,
        value: [{symbol: "cde",
                quantity: 1000,
                price: 245,
                bought: false,
                sold: true,
            },{symbol: "cde",
                quantity: 1000,
                price: 245,
                bought: false,
                sold: true},
             {symbol: "cde",
                quantity: 1000,
                price: 245,
                bought: true,
                sold: false},
            {symbol: "cde",
                quantity: 1000,
                price: 240,
                bought: true,
                sold: false}]
    },
    worth: {
        enumerable: false,
        value: function () {
            let grandTotal = 0
            const newNum = financialAdvisor.portfolio
            for(i=0;i < newNum.length; i++) {
                console.log(newNum[i])
                if(newNum[i].bought === true) {
                    const totalAmount = newNum[i].price * newNum[i].quantity
                    grandTotal = grandTotal + totalAmount
                    grandTotal2 = grandTotal - totalAmount
                    console.log("total Amount", totalAmount)
                    console.log("grandTotal2", grandTotal2)
                 } else {
                    console.log("you sold this item",newNum[i])
                 }
            }console.log(grandTotal,"grandTotal")
            console.log("newNum",newNum)
        
        }
    },
    purchase: {
        enumerable: false,
        value: function  (symbol, quantity, price) {
            financialAdvisor.portfolio.push({symbol, quantity, price})
        }

    },
    sell: {
        enumerable: false,
        value: function (symbol, quantity,price){
            financialAdvisor.portfolio.push({symbol, quantity, price})
        }
       
     }

})

financialAdvisor.sell ("ABC", 123, 126)
financialAdvisor.worth ()
console.log(financialAdvisor.portfolio)





