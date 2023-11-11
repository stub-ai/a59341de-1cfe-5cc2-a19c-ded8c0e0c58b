import { useState } from 'react';

const CurrencyConverterComponent = () => {
  const [sourceCurrency, setSourceCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const handleConvert = async () => {
    const response = await fetch('/api/convertCurrency', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        sourceCurrency,
        targetCurrency,
      }),
    });
    const data = await response.json();
    setConvertedAmount(data.convertedAmount);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <input
        type="text"
        placeholder="Source Currency"
        value={sourceCurrency}
        onChange={(e) => setSourceCurrency(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        placeholder="Target Currency"
        value={targetCurrency}
        onChange={(e) => setTargetCurrency(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="p-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={handleConvert}
        className="p-2 bg-blue-500 text-white rounded-md"
      >
        Convert
      </button>
      <div className="text-lg">
        Converted Amount: <span className="font-bold">{convertedAmount}</span>
      </div>
    </div>
  );
};

export default CurrencyConverterComponent;