
function isNullAddress(address) {
    return address === "0x0000000000000000000000000000000000000000";
}



function isNullAccount(account) {
    //if account is false, return true. That is, if no account, account is null.
    return !account;
}



export { isNullAccount, isNullAddress };