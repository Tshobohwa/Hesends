// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Hesends {
    struct Currency {
        string symbol;
        string name;
        uint16 exchangeRate;
    }

    struct User {
        string name;
        string lastname;
        string email;
        string tag;
        address walletAddress;
    }

    struct Transaction {
        address sender;
        address receiver;
        uint256 amount;
        string currency;
        uint256 timestamp;
        string txType; // "Deposit", "Withdraw", "Transfer"
    }

    mapping(string => Currency) public currencies; // Store currencies by symbol
    mapping(address => mapping(string => uint256)) public balances; // Users' balances per currency
    mapping(address => Transaction[]) public transactionHistory; // Store transactions per user
    mapping(address => User) public users; // Store users by wallet address
    mapping(string => address) public userTags; // Store addresses by tag (for lookup)

    string[] public currencyList; // Track all available currency symbols

    event UserRegistered(address indexed user, string tag);
    event Deposit(address indexed user, uint256 amount, string currency, uint256 timestamp);
    event Withdrawal(address indexed user, uint256 amount, string currency, uint256 timestamp);
    event Transfer(address indexed sender, address indexed receiver, uint256 amount, string currency, uint256 timestamp);

    constructor() {
        addCurrency("CDF", "Franc Congolais", 2800);
        addCurrency("KES", "Kenyan Shilling", 129);
        addCurrency("UGX", "Uganda Shilling", 3661);
        addCurrency("BFI", "Franc Burundais", 2963);
        addCurrency("TZS", "Tanzanian Shilling", 2650);
        addCurrency("SSP", "South Sudanese Pounds", 130);
        addCurrency("RWF", "Rwandan Franc", 1416);
    }

    function addCurrency(string memory _symbol, string memory _name, uint16 _exchangeRate) private {
        currencies[_symbol] = Currency(_symbol, _name, _exchangeRate);
        currencyList.push(_symbol);
    }

    function registerUser(string memory _name, string memory _lastname, string memory _email, string memory _tag) public {
        require(userTags[_tag] == address(0), "Tag already taken");
        require(bytes(users[msg.sender].tag).length == 0, "User already registered");

        users[msg.sender] = User(_name, _lastname, _email, _tag, msg.sender);
        userTags[_tag] = msg.sender;

        emit UserRegistered(msg.sender, _tag);
    }

    function deposit(uint256 _amount, string memory _currency) public {
        require(_amount > 0, "Invalid amount");
        require(bytes(currencies[_currency].symbol).length > 0, "Currency not supported");

        balances[msg.sender][_currency] += _amount;
        transactionHistory[msg.sender].push(Transaction(msg.sender, msg.sender, _amount, _currency, block.timestamp, "Deposit"));
        emit Deposit(msg.sender, _amount, _currency, block.timestamp);
    }

    function withdraw(uint256 _amount, string memory _currency) public {
        require(_amount > 0, "Invalid amount");
        require(balances[msg.sender][_currency] >= _amount, "Insufficient balance");

        balances[msg.sender][_currency] -= _amount;
        transactionHistory[msg.sender].push(Transaction(msg.sender, msg.sender, _amount, _currency, block.timestamp, "Withdraw"));
        emit Withdrawal(msg.sender, _amount, _currency, block.timestamp);
    }

    function transfer(address _to, uint256 _amount, string memory _currency) public {
        require(_to != address(0), "Invalid recipient");
        require(balances[msg.sender][_currency] >= _amount, "Insufficient balance");

        balances[msg.sender][_currency] -= _amount;
        balances[_to][_currency] += _amount;

        transactionHistory[msg.sender].push(Transaction(msg.sender, _to, _amount, _currency, block.timestamp, "Transfer"));
        transactionHistory[_to].push(Transaction(msg.sender, _to, _amount, _currency, block.timestamp, "Transfer"));

        emit Transfer(msg.sender, _to, _amount, _currency, block.timestamp);
    }

    function transferByTag(string memory _tag, uint256 _amount, string memory _currencySent, string memory _currencyReceived) public {
        address receiver = userTags[_tag];
        require(receiver != address(0), "Tag not registered");
        require(balances[msg.sender][_currencySent] >= _amount, "Insufficient balance");
        require(bytes(currencies[_currencySent].symbol).length > 0, "Sender currency not supported");
        require(bytes(currencies[_currencyReceived].symbol).length > 0, "Receiver currency not supported");

        // Fetch exchange rates
        uint16 rateSent = currencies[_currencySent].exchangeRate;
        uint16 rateReceived = currencies[_currencyReceived].exchangeRate;

        // Convert the amount
        uint256 convertedAmount = (_amount * rateReceived) / rateSent;

        // Deduct from sender
        balances[msg.sender][_currencySent] -= _amount;

        // Credit receiver
        balances[receiver][_currencyReceived] += convertedAmount;

        // Record transaction history
        transactionHistory[msg.sender].push(Transaction(msg.sender, receiver, _amount, _currencySent, block.timestamp, "Transfer"));
        transactionHistory[receiver].push(Transaction(msg.sender, receiver, convertedAmount, _currencyReceived, block.timestamp, "Transfer"));

        emit Transfer(msg.sender, receiver, _amount, _currencySent, block.timestamp);
    }

    function getTransactionHistory(address _user) public view returns (Transaction[] memory) {
        return transactionHistory[_user];
    }

    function updateExchangeRate(string memory _currency, uint16 _exchangeRate) public {
        require(bytes(currencies[_currency].symbol).length > 0, "Currency not supported");
        currencies[_currency].exchangeRate = _exchangeRate;
    }
}
