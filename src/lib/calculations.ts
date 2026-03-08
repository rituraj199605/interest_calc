import { AmortizationRow, EMIResult } from '@/types';

export function calculateEMI(principal: number, annualRate: number, tenureMonths: number): number {
  if (annualRate === 0) return Math.round((principal / tenureMonths) * 100) / 100;
  const r = annualRate / 12 / 100;
  const emi = (principal * r * Math.pow(1 + r, tenureMonths)) / (Math.pow(1 + r, tenureMonths) - 1);
  return Math.round(emi * 100) / 100;
}

export function generateAmortization(
  principal: number,
  annualRate: number,
  tenureMonths: number
): AmortizationRow[] {
  const r = annualRate / 12 / 100;
  const emi = calculateEMI(principal, annualRate, tenureMonths);
  const rows: AmortizationRow[] = [];
  let balance = principal;
  for (let month = 1; month <= tenureMonths; month++) {
    const interest = Math.round(balance * r * 100) / 100;
    const principalComp = Math.round((emi - interest) * 100) / 100;
    balance = Math.max(0, Math.round((balance - principalComp) * 100) / 100);
    rows.push({ month, emi, principal: principalComp, interest, balance });
  }
  return rows;
}

export function calculateEMIResult(
  principal: number,
  annualRate: number,
  tenureMonths: number
): EMIResult {
  const emi = calculateEMI(principal, annualRate, tenureMonths);
  const totalAmount = Math.round(emi * tenureMonths * 100) / 100;
  const totalInterest = Math.round((totalAmount - principal) * 100) / 100;
  const amortization = generateAmortization(principal, annualRate, tenureMonths);
  return { emi, totalInterest, totalAmount, amortization };
}

export function formatINR(amount: number): string {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)} L`;
  return `₹${amount.toLocaleString('en-IN')}` ;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
