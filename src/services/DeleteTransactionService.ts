import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRep = getCustomRepository(TransactionsRepository);

    const transaction = await transactionRep.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist');
    }

    await transactionRep.remove(transaction);
  }
}

export default DeleteTransactionService;
