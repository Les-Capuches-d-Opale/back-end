import { TransactionType } from './../../transactions/entities/transaction.entity';

const transactions = [
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/20"),
        status: TransactionType.QuestBounty,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/21"),
        status: TransactionType.QuestBounty,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/20"),
        status: TransactionType.QuestBounty,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/22"),
        status: TransactionType.QuestBounty,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/24"),
        status: TransactionType.QuestBounty,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/21"),
        status: TransactionType.QuestBounty,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/20"),
        status: TransactionType.QuestBounty,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/20"),
        status: TransactionType.Tax,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/20"),
        status: TransactionType.Tax,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/21"),
        status: TransactionType.Tax,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/20"),
        status: TransactionType.Tax,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/22"),
        status: TransactionType.Tax,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/24"),
        status: TransactionType.Tax,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/21"),
        status: TransactionType.Tax,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/20"),
        status: TransactionType.Tax,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/20"),
        status: TransactionType.Purchase,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/20"),
        status: TransactionType.Purchase,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/21"),
        status: TransactionType.Purchase,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/20"),
        status: TransactionType.Purchase,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/22"),
        status: TransactionType.Purchase,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/24"),
        status: TransactionType.Purchase,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/21"),
        status: TransactionType.Purchase,
    },
    {
        amount: Math.floor(Math.random() * 10),
        date: new Date("2022/01/20"),
        status: TransactionType.Purchase,
    },
]

export = transactions.map((transaction) => {
    return {
      amount: transaction.amount,
      date: transaction.date,
      type: transaction.status,
    };
  });