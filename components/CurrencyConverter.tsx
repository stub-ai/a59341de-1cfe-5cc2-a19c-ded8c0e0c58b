import { useState } from 'react';

const CurrencyConverter = () => {
  const [currency, setCurrency] = useState('');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const handleConvert = () => {
    // Conversion logic here
    // This is a placeholder, replace with actual conversion logic
    setConvertedAmount(amount * 1.2);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <input
        type="text"
        placeholder="Currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
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

export default CurrencyConverter;