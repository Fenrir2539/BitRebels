/**Sample transaction
* @param {bitrebel.AccountTransfer} accountTransfer
* @transaction
*/
function accountTransfer(accountTransfer) {
if (accountTransfer.from.balance < accountTransfer.amount) {
throw new Error ("Insufficient funds");
}
accountTransfer.from.balance -= accountTransfer.amount;
accountTransfer.to.balance += accountTransfer.amount;
return getAssetRegistry('bitrebel.Account')
.then (function (assetRegistry) {
return assetRegistry.update(accountTransfer.from);
})
.then (function () {
return getAssetRegistry('bitrebel.Account');
})
.then(function (assetRegistry) {
return assetRegistry.update(accountTransfer.to);
});
}