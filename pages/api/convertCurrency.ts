import type { NextApiRequest, NextApiResponse } from 'next'
import CurrencyConverter from 'currency-converter-lt';

const converter = new CurrencyConverter('YOUR_API_KEY');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { amount, sourceCurrency, targetCurrency } = req.body;
  const result = await converter.convert(amount, sourceCurrency, targetCurrency);
  res.status(200).json({ convertedAmount: result });
}