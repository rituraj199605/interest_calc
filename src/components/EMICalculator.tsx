'use client';
import { useState, useCallback } from 'react';
import { calculateEMIResult, formatCurrency, formatINR } from '@/lib/calculations';
import { EMIResult } from '@/types';
import AmortizationTable from './AmortizationTable';

interface Props {
  loanType: string;
  defaultPrincipal?: number;
  defaultRate?: number;
  defaultTenure?: number;
  maxTenureYears?: number;
}

export default function EMICalculator({
  loanType,
  defaultPrincipal = 2000000,
  defaultRate = 8.5,
  defaultTenure = 240,
  maxTenureYears = 30,
}: Props) {
  const [principal, setPrincipal] = useState(defaultPrincipal);
  const [rate, setRate] = useState(defaultRate);
  const [tenure, setTenure] = useState(defaultTenure);
  const [result, setResult] = useState<EMIResult | null>(null);
  const [showAmort, setShowAmort] = useState(false);
  const [principalStr, setPrincipalStr] = useState(String(defaultPrincipal));

  const handlePrincipalChange = (val: string) => {
    setPrincipalStr(val);
    const num = parseFloat(val.replace(/,/g, ''));
    if (!isNaN(num) && num > 0) setPrincipal(num);
  };

  const calculate = useCallback(() => {
    if (principal <= 0 || rate <= 0 || tenure <= 0) return;
    setResult(calculateEMIResult(principal, rate, tenure));
  }, [principal, rate, tenure]);

  const interestPct = result ? Math.round((result.totalInterest / result.totalAmount) * 100) : 0;
  const principalPct = 100 - interestPct;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Loan Amount (₹)</label>
          <input
            type="text"
            value={principalStr}
            onChange={(e) => handlePrincipalChange(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="e.g. 2000000"
          />
          <p className="text-xs text-blue-600 mt-1 font-medium">{formatINR(principal)}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Interest Rate (% p.a.)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            step="0.05"
            min="1"
            max="50"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Tenure: <span className="text-blue-600 font-semibold">{Math.floor(tenure / 12)} yr {tenure % 12} mo</span>
          </label>
          <input
            type="range"
            min={12}
            max={maxTenureYears * 12}
            step={6}
            value={tenure}
            onChange={(e) => setTenure(parseInt(e.target.value))}
            className="w-full accent-blue-600 mt-3"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>1 yr</span>
            <span>{maxTenureYears} yr</span>
          </div>
        </div>
      </div>

      <button
        onClick={calculate}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition w-full md:w-auto text-base"
      >
        Calculate EMI
      </button>

      {result && (
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-500 mb-1">Monthly EMI</p>
              <p className="text-2xl font-bold text-blue-700">{formatCurrency(result.emi)}</p>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-500 mb-1">Total Interest Payable</p>
              <p className="text-2xl font-bold text-orange-600">{formatINR(result.totalInterest)}</p>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-500 mb-1">Total Amount Payable</p>
              <p className="text-2xl font-bold text-green-700">{formatINR(result.totalAmount)}</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2 font-medium">Principal vs Interest</p>
            <div className="flex h-5 rounded-full overflow-hidden border border-gray-100">
              <div className="bg-blue-500" style={{ width: `${principalPct}%` }} title={`Principal ${principalPct}%`} />
              <div className="bg-orange-400" style={{ width: `${interestPct}%` }} title={`Interest ${interestPct}%`} />
            </div>
            <div className="flex gap-5 mt-2 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-500 inline-block" />
                Principal {principalPct}% ({formatINR(principal)})
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-orange-400 inline-block" />
                Interest {interestPct}% ({formatINR(result.totalInterest)})
              </span>
            </div>
          </div>

          <button
            onClick={() => setShowAmort(!showAmort)}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium underline-offset-2 hover:underline"
          >
            {showAmort ? '▲ Hide' : '▼ View'} Full Amortization Schedule ({tenure} months)
          </button>
          {showAmort && <AmortizationTable rows={result.amortization} />}
        </div>
      )}
    </div>
  );
}
