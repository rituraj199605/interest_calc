'use client';
import { AmortizationRow } from '@/types';
import { formatCurrency } from '@/lib/calculations';

interface Props { rows: AmortizationRow[]; }

function downloadCSV(rows: AmortizationRow[]) {
  const header = 'Month,EMI,Principal,Interest,Balance\n';
  const data = rows
    .map((r) => `${r.month},${r.emi.toFixed(2)},${r.principal.toFixed(2)},${r.interest.toFixed(2)},${r.balance.toFixed(2)}`)
    .join('\n');
  const blob = new Blob([header + data], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'amortization_schedule.csv';
  a.click();
  URL.revokeObjectURL(url);
}

export default function AmortizationTable({ rows }: Props) {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-700">
          Amortization Schedule ({rows.length} months)
        </h3>
        <button
          onClick={() => downloadCSV(rows)}
          className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-lg transition flex items-center gap-1"
        >
          ⬇ Export CSV
        </button>
      </div>
      <div className="overflow-x-auto rounded-xl border border-gray-200 max-h-96">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-4 py-2.5 text-left text-gray-600 font-medium">Month</th>
              <th className="px-4 py-2.5 text-right text-gray-600 font-medium">EMI</th>
              <th className="px-4 py-2.5 text-right text-gray-600 font-medium">Principal</th>
              <th className="px-4 py-2.5 text-right text-gray-600 font-medium">Interest</th>
              <th className="px-4 py-2.5 text-right text-gray-600 font-medium">Balance</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.month} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-2 text-gray-600">{row.month}</td>
                <td className="px-4 py-2 text-right text-gray-700">{formatCurrency(row.emi)}</td>
                <td className="px-4 py-2 text-right text-blue-600">{formatCurrency(row.principal)}</td>
                <td className="px-4 py-2 text-right text-orange-500">{formatCurrency(row.interest)}</td>
                <td className="px-4 py-2 text-right text-gray-700">{formatCurrency(row.balance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
