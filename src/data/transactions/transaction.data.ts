import { TransactionType } from './../../transactions/entities/transaction.entity';
const transactions = [
    {
        amount: Math.floor(Math.random() * 100),
        type: TransactionType.QuestBounty,
        date: new Date('2022-01-24')
    },
    {
        amount: Math.floor(Math.random() * 100),
        type: TransactionType.Purchase,
        date: new Date('2022-01-24')
    },
    {
        amount: Math.floor(Math.random() * 100),
        type: TransactionType.QuestBounty,
        date: new Date('2022-01-22')
    },
    {
        amount: Math.floor(Math.random() * 100),
        type: TransactionType.Tax,
        date: new Date('2022-01-24')
    },
    {
        amount: Math.floor(Math.random() * 100),
        type: TransactionType.QuestBounty,
        date: new Date('2022-01-21')
    },
    {
        amount: Math.floor(Math.random() * 100),
        type: TransactionType.QuestBounty,
        date: new Date('2022-01-17')
    },
    {
        amount: Math.floor(Math.random() * 100),
        type: TransactionType.QuestBounty,
        date: new Date('2022-01-17')
    },
    {
        amount: Math.floor(Math.random() * 100),
        type: TransactionType.AdventurerPayment,
        date: new Date('2022-01-18')
    },
    {
        amount: Math.floor(Math.random() * 100),
        type: TransactionType.Tax ,
        date: new Date('2022-01-20')
    },
    {
        amount: Math.floor(Math.random() * 100),
        type: TransactionType.QuestBounty,
        date: new Date('2022-01-19')
    },
    {
        amount: Math.floor(Math.random() * 100),
        type: TransactionType.Tax,
        date: new Date('2022-01-24')
    },
    {
        amount: Math.floor(Math.random() * 100),
        type: TransactionType.Purchase,
        date: new Date('2022-01-22')
    },
    {
        amount: Math.floor(Math.random() * 100),
        type: TransactionType.Tax,
        date: new Date('2022-01-18')
    },
    {
        amount: Math.floor(Math.random() * 100),
        type: TransactionType.QuestBounty,
        date: new Date('2022-01-19')
    },
    {
        amount: Math.floor(Math.random() * 100),
        type: TransactionType.AdventurerPayment,
        date: new Date('2022-01-20')
    },
    {
        amount: Math.floor(Math.random() * 100),
        type: TransactionType.Purchase,
        date: new Date('2022-01-22')
    }
]

export = transactions