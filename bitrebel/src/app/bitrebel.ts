import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace bitrebel{
   export class Bank extends Participant {
      bankId: string;
      bankName: string;
      customerAccounts: CustomerAccount[];
   }
   export class CustomerAccount extends Asset {
      accountId: string;
      firstName: string;
      lastName: string;
      accountBalance: number;
      bankId: Bank;
   }
   export class FundTransfer extends Transaction {
      fromBank: Bank;
      toBank: Bank;
      fromAccount: CustomerAccount;
      toAccount: CustomerAccount;
      amount: number;
   }
// }
