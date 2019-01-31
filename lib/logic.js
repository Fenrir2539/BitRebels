/**Sample transaction
* @param {bitrebel.FundTransfer} fundTransfer
* @transaction
*/
function fundTransfer(fundTransfer) {
	
	if (fundTransfer.fromAccount.accountBalance < fundTransfer.amount) {
		throw new Error ("Insufficient funds");
	}
	
	fundTransfer.fromAccount.accountBalance -= fundTransfer.amount;
	fundTransfer.toAccount.accountBalance += fundTransfer.amount;
	
	return getAssetRegistry('bitrebel.CustomerAccount')
.then (function (assetRegistry) {
return assetRegistry.update(fundTransfer.fromAccount);
})
.then (function () {
return getAssetRegistry('bitrebel.CustomerAccount');
})
.then(function (assetRegistry) {
return assetRegistry.update(fundTransfer.toAccount);
});
}
