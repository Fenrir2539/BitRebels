# BitRebels


A POC application for blockchain backed banking transaction.
The application has Customers and Accounts which can be created, edited, and deleted.
It also contains an AccountTransfer which enables transactions between accounts.

Assumes an installation of Hyperledger Composer and a working Hyperledger Fabric runtime to deploy the business network onto

Prerequisites: <br/>
https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html

Hyperledger Development Environment: <br/>
https://hyperledger.github.io/composer/latest/installing/development-tools.html

Start the Fabric Network
`$ ./startFabric.sh`

Install and deploy the Business Network Archive onto the Fabric runtime from the directory where they were created <br/>
`$ composer network install --card PeerAdmin@hlfv1 --archiveFile bitrebel@0.0.1.bna`
```
$ composer network start --networkName bitrebel --networkVersion 0.0.1 --card PeerAdmin@hlfv1 --networkAdmin admin
--networkAdminEnrollSecret adminpw --file networkadmin.card
```

Expose a RESTful API <br/>
With the ability to specify options such as encryption<br/>
`$ composer-rest-server`<br/> <br/>
Or to just expose the API with the choices made for our POC<br/>
`$ composer-rest-server -c admin@bitrebel -n always -u true -w true`

From the directory containing the angular scaffold bitrebel, deploy the Angular server <br/>
`$ npm start`
