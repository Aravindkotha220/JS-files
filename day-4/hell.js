// function processOrder(orderId, callback) {
//     if (orderId) {
//         callback(true, "Order processed successfully");
//     } else {
//         callback(false, "Order processing failed");
//     }
// }

// function shipOrder(orderId, callback) {
//     if (orderId !== "FAIL") {
//         callback(true, "Order shipped with tracking XYZ123");
//     } else {
//         callback(false, "Shipping failed");
//     }
// }

// function dispatchOrder(orderId, callback) {
//     if (orderId !== "FAIL") {
//         callback(true, "Order dispatched to customer");
//     } else {
//         callback(false, "Dispatch failed");
//     }
// }


function Orderprocess(val, callback) {
    var res = val + 15;
    callback(res, true);
}
function ShipOrder(val, callback) {
    var res = val - 10;
    callback(res, true);
}
function dispatched(val, callback) {
    var res = val * 2;
    callback(res, true);
}
function deliveredplace(val, callback) {
    var res = val / 5;
    callback(res, true);
}
Orderprocess(20, (addRes, status) => {
    if (status == true) {
        sub(addRes, (subRes, status) => {
            if (status == true) {
                mul(subRes, (mulRes, status) => {
                    if (status == true) {
                        div(mulRes, (divRes, status) => {
                            if (status == true) {
                                console.log(Final Result : ${divRes});
                            }
                            else {
                                console.error("Division Failed.");
                            }
                        })
                    } else {
                        console.error("Multiplication Failed.")
                    }
                })
            }
            else {
                console.error("Substraction Failed");
            }
        })
    } else {
        console.error("Addition Failed...")
    }
})