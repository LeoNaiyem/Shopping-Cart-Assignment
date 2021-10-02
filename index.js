function manageCartProduct (isIncreasing, inputId, totalId){
    const productQuantity = document.getElementById(inputId);
    const productQuantityNumber = parseInt(productQuantity.value);
    let newProductQuantity = productQuantityNumber;
    if(isIncreasing == true){
        newProductQuantity = productQuantityNumber + 1;
    };
    if(isIncreasing == false && productQuantityNumber > 0){
        newProductQuantity = productQuantityNumber - 1;
    };
    productQuantity.value = newProductQuantity;
    let totalProductPrice = 0;
    if( totalId == 'total-iphone-price'){
        totalProductPrice = newProductQuantity * 1219;
    };
    if(totalId == 'total-case-price'){
        totalProductPrice = newProductQuantity * 59;
    };
    document.getElementById(totalId).innerText = '$' + totalProductPrice;
    calculateTotal();
};
calculateTotal();


function calculateTotal(){
    const iphoneQuantity = gettingValue('iphone-quantity');
    const caseQuantity = gettingValue('case-quantity');
    const subTotal = iphoneQuantity * 1219 + caseQuantity * 59;
    document.getElementById('subtotal').innerText = '$' + subTotal;
    const tax =Math.ceil((subTotal * 10)/100);
    document.getElementById('tax').innerText = '$' + tax;
    const total = subTotal + tax;
    document.getElementById('total').innerText = '$' + total;

}


function gettingValue (id){
    const productQuantity = document.getElementById(id);
    const productQuantityNumber = parseInt(productQuantity.value);
    return productQuantityNumber;
};





// document.getElementById('case-plus-btn').addEventListener('click', function(){
//     // const caseQuantity = document.getElementById('case-quantity');
//     // const caseQuantityNumber = parseInt(caseQuantity.value);
//     // const newCaseQuantity = caseQuantityNumber + 1;
//     // caseQuantity.value = newCaseQuantity;
//     // const totalCasePrice = newCaseQuantity * 59;
//     // document.getElementById('total-case-price').innerText = '$' + totalCasePrice;
//     // casePriceHandler(true);
//     // manageCartProduct(true, 'case-quantity', 'total-case-price');
// });


// document.getElementById('case-minus-btn').addEventListener('click', function(){
//     // const caseQuantity = document.getElementById('case-quantity');
//     // const caseQuantityNumber = parseInt(caseQuantity.value);
//     // const newCaseQuantity = caseQuantityNumber - 1;
//     // caseQuantity.value = newCaseQuantity;
//     // const totalCasePrice = newCaseQuantity * 59;
//     // document.getElementById('total-case-price').innerText = '$' + totalCasePrice;
//     // casePriceHandler(false);
//     // manageCartProduct(false, 'case-quantity', 'total-case-price');

// })

// function casePriceHandler(isIncreasing){
//     const caseInput = document.getElementById('case-quantity');
//     const caseInputNumber = parseInt(caseInput.value);
//     let newCaseInputNumber = caseInputNumber;
//     if(isIncreasing == true){
//         newCaseInputNumber = caseInputNumber + 1;
//     };
//     if (isIncreasing == false && caseInputNumber > 0){
//         newCaseInputNumber = caseInputNumber -1; 
//     };
//     caseInput.value = newCaseInputNumber;
//     const totalCasePrice = newCaseInputNumber * 59;
//     document.getElementById('total-case-price').innerText = '$' + totalCasePrice;
// };


// document.getElementById('iphone-plus-btn').addEventListener('click', function(){
//     // const iphoneQuantity = document.getElementById('iphone-quantity');
//     // const iphoneQuantityNumber = parseInt(iphoneQuantity.value);
//     // const newIphoneQuantity = iphoneQuantityNumber + 1;
//     // iphoneQuantity.value = newIphoneQuantity;
//     // const totalIphonePrice = newIphoneQuantity * 1219;
//     // document.getElementById('total-iphone-price').innerText = '$' + totalIphonePrice;
//     // iphonePriceHandler(true);
//     manageCartProduct(true, 'iphone-quantity', 'total-iphone-price');


// });


// document.getElementById('iphone-minus-btn').addEventListener('click', function(){
//     // const iphoneQuantity = document.getElementById('iphone-quantity');
//     // const iphoneQuantityNumber = parseInt(iphoneQuantity.value);
//     // const newIphoneQuantity = iphoneQuantityNumber - 1;
//     // iphoneQuantity.value = newIphoneQuantity;
//     // const totalIphonePrice = newIphoneQuantity * 1219;
//     // document.getElementById('total-iphone-price').innerText = '$' + totalIphonePrice;
//     // iphonePriceHandler(false);
//     manageCartProduct(false, 'iphone-quantity', 'total-iphone-price');


// });

// function iphonePriceHandler(isIncreasing){
//     const iphoneQuantity = document.getElementById('iphone-quantity');
//     const iphoneQuantityNumber = parseInt(iphoneQuantity.value);
//     let newIphoneQuantity = iphoneQuantityNumber
//     if(isIncreasing == true){
//         newIphoneQuantity = iphoneQuantityNumber + 1;
//     };
//     if(isIncreasing == false && iphoneQuantityNumber > 0){
//         newIphoneQuantity = iphoneQuantityNumber - 1;
//     };
//     iphoneQuantity.value = newIphoneQuantity;
//     const totalIphonePrice = newIphoneQuantity * 1219;
//     document.getElementById('total-iphone-price').innerText = '$' + totalIphonePrice;
// }