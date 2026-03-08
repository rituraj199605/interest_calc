'use client';
import { useState } from 'react';
import { getBanksByLoanType, getLoanTypes } from '@/lib/bankData';
import { calculateEMI, formatCurrency, formatINR } from '@/lib/calculations';
import { LoanType } from '@/types';

export default function BankComparison() {
  const [loanType, setLoanType] = useState<LoanType>('home');
  const [principal, setPrincipal] = useState(2000000);
  const [tenure, setTenure] = useState(240);
  const [sortBy, setSortBy] = useState<'minRate' | 'emi' | 'totalInterest'>('minRate');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searched, setSearched] = useState(false);

  const loanTypes = getLoanTypes();

  const banks = getBanksByLoanType(loanType)
    .filter((b) => categoryFilter === 'all' || b.category === categoryFilter)
    .map((b) => ({
      ...b,
      emi: calculateEMI(principal, b.minRate, tenure),
      totalInterest: Math.round((calculateEMI(principal, b.minRate, tenure) * tenure - principal) * 100) / 100,
    }))
    .sort((a, b) => {
      if (sortBy === 'minRate') return a.minRate - b.minRate;
      if (sortBy === 'emi') return a.emi - b.emi;
      return a.totalInterest - b.totalInterest;
    });

  const badge: Record<string, string> = {
    PSB: 'bg-blue-100 text-blue-700',
    Private: 'bg-purple-100 text-purple-700',
    SFB: 'bg-green-100 text-green-700',
    NBFC: 'bg-orange-100 text-orange-700',
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Loan Type</label>
          <select
            value={loanType}
            onChange={(e) => { setLoanType(e.target.value as LoanType); setSearched(false); }}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {loanTypes.map((l) => <option key={l.value} value={l.value}>{l.label}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Loan Amount (₹)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Tenure (months)</label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Bank Type</label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="all">All Banks & NBFCs</option>
            <option value="PSB">Public Sector Banks</option>
            <option value="Private">Private Banks</option>
            <option value="SFB">Small Finance Banks</option>
            <option value="NBFC">NBFCs</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <button
          onClick={() => setSearched(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition"
        >
          Compare Now
        </button>
        {searched && (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            Sort:
            {(['minRate', 'emi', 'totalInterest'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSortBy(s)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                  sortBy === s
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
                }`}
              >
                {s === 'minRate' ? 'Rate' : s === 'emi' ? 'EMI' : 'Total Interest'}
              </button>
            ))}
          </div>
        )}
      </div>

      {searched && (
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-gray-600 font-medium">Bank / NBFC</th>
                <th className="px-4 py-3 text-left text-gray-600 font-medium">Type</th>
                <th className="px-4 py-3 text-right text-gray-600 font-medium">Rate (p.a.)</th>
                <th className="px-4 py-3 text-right text-gray-600 font-medium">Monthly EMI</th>
                <th className="px-4 py-3 text-right text-gray-600 font-medium">Total Interest</th>
                <th className="px-4 py-3 text-right text-gray-600 font-medium">Processing Fee</th>
              </tr>
            </thead>
            <tbody>
              {banks.map((bank, i) => (
                <tr key={bank.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium text-gray-800">{bank.bankName}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badge[bank.category] ?? 'bg-gray-100 text-gray-600'}`}>
                      {bank.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="font-semibold text-gray-800">{bank.minRate}%</span>
                    <span className="text-gray-400 text-xs"> – {bank.maxRate}%</span>
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-blue-700">{formatCurrency(bank.emi)}</td>
                  <td className="px-4 py-3 text-right text-orange-600">{formatINR(bank.totalInterest)}</td>
                  <td className="px-4 py-3 text-right text-gray-500 text-xs">
                    {bank.processingFeePercent > 0 ? `${bank.processingFeePercent}%` : 'Nil'}
                    {bank.processingFeeMin > 0 ? ` (min ₹${bank.processingFeeMin.toLocaleString('en-IN')})` : ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-400 p-3 border-t border-gray-100">
            * EMI calculated at the starting (minimum) rate. Actual rate depends on CIBIL score, income, and bank policy. Rates as of March 2026.
          </p>
        </div>
      )}
    </div>
  );
}
