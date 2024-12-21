import React, { useId } from "react";

function Input({
  label, // from/to btane k lie hai ye
  amount, //jo amount hum feed krenge initial input box me
  onAmountChange, // if amount change ho to useState change kaene k lie hai ye
  onCurrencyChange, // if currency change ho to use state change karne k lie hai ye
  currencyOption = [], //array of currency options
  selectCurrency = "", //initial currencu jo select hoge
  amountDisable = false, // if amout option disable ho to
  currencydisable = false, // if currency option disable ho to
  className = "", // for user ki agar ki wo apna css dalna chaye
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId} // bind kie h label k saath
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencydisable}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
