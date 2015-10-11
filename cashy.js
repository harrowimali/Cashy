function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}
//function to add people in the discount thing

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);
var me = new StaffMember("Ali",20);
//people and discounts^^


var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount : function(employee){
        this.total -= this.total * (employee.discountPercent / 100);
    }
    
};
// My Cash Register

/*
cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// things you want^^

*/

            function myFunction() {
                cashRegister.total = 0;
                this.person = prompt("Please enter your name", "Yeezus");
                
                
                
                this.item = prompt("what do you need?", "eggs, milk, magazine, or chocolate");    
                
                this.amount = prompt("how many " + item + "s do you need?");
                cashRegister.scan(item,amount);
                                    
                 if(person == "me"){
    cashRegister.applyStaffDiscount(me);
}
if(person == "bob"){
    cashRegister.applyStaffDiscount(bob);
}
if(person == "sally"){
    cashRegister.applyStaffDiscount(sally);
}
                
                if (person != null && item != null && amount > 0) {
                    document.getElementById("final").innerHTML =
                    "Hello " + person + " you're final total is " + cashRegister.total.toFixed(2) + "!";
            }
        }





console.log(cashRegister.total); //total before discount

//cashRegister.applyStaffDiscount(); //applying discount
console.log(cashRegister.total); // after applying discount



// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));

//Special thanks to Robert Kim and Brendan Horng foe helping me out!!!

