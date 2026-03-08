import { BankRate, LoanType } from '@/types';

export const bankRates: BankRate[] = [
  // ===== HOME LOANS =====
  { id: 'sbi-home', bankName: 'State Bank of India', category: 'PSB', loanType: 'home', rateType: 'floating', minRate: 8.50, maxRate: 9.65, processingFeePercent: 0.35, processingFeeMin: 2000, processingFeeMax: 10000, prepaymentCharge: 'Nil (floating)', lastUpdated: '2026-03-01', sourceUrl: 'https://sbi.co.in' },
  { id: 'bob-home', bankName: 'Bank of Baroda', category: 'PSB', loanType: 'home', rateType: 'floating', minRate: 8.40, maxRate: 10.60, processingFeePercent: 0.25, processingFeeMin: 8500, processingFeeMax: 25000, prepaymentCharge: 'Nil (floating)', lastUpdated: '2026-03-01', sourceUrl: 'https://bankofbaroda.in' },
  { id: 'pnb-home', bankName: 'Punjab National Bank', category: 'PSB', loanType: 'home', rateType: 'floating', minRate: 8.40, maxRate: 10.25, processingFeePercent: 0.35, processingFeeMin: 2500, processingFeeMax: 15000, prepaymentCharge: 'Nil (floating)', lastUpdated: '2026-03-01', sourceUrl: 'https://pnbindia.in' },
  { id: 'canara-home', bankName: 'Canara Bank', category: 'PSB', loanType: 'home', rateType: 'floating', minRate: 8.40, maxRate: 11.25, processingFeePercent: 0.50, processingFeeMin: 1500, processingFeeMax: 10000, prepaymentCharge: 'Nil (floating)', lastUpdated: '2026-03-01', sourceUrl: 'https://canarabank.com' },
  { id: 'union-home', bankName: 'Union Bank of India', category: 'PSB', loanType: 'home', rateType: 'floating', minRate: 8.35, maxRate: 10.75, processingFeePercent: 0.50, processingFeeMin: 3000, processingFeeMax: 15000, prepaymentCharge: 'Nil (floating)', lastUpdated: '2026-03-01', sourceUrl: 'https://unionbankofindia.co.in' },
  { id: 'boi-home', bankName: 'Bank of India', category: 'PSB', loanType: 'home', rateType: 'floating', minRate: 8.40, maxRate: 10.85, processingFeePercent: 0.25, processingFeeMin: 1500, processingFeeMax: 20000, prepaymentCharge: 'Nil (floating)', lastUpdated: '2026-03-01', sourceUrl: 'https://bankofindia.co.in' },
  { id: 'hdfc-home', bankName: 'HDFC Bank', category: 'Private', loanType: 'home', rateType: 'floating', minRate: 8.75, maxRate: 9.65, processingFeePercent: 0.50, processingFeeMin: 3000, processingFeeMax: 10000, prepaymentCharge: 'Nil (floating)', lastUpdated: '2026-03-01', sourceUrl: 'https://hdfcbank.com' },
  { id: 'icici-home', bankName: 'ICICI Bank', category: 'Private', loanType: 'home', rateType: 'floating', minRate: 8.75, maxRate: 9.80, processingFeePercent: 0.50, processingFeeMin: 3000, processingFeeMax: 10000, prepaymentCharge: 'Nil (floating)', lastUpdated: '2026-03-01', sourceUrl: 'https://icicibank.com' },
  { id: 'axis-home', bankName: 'Axis Bank', category: 'Private', loanType: 'home', rateType: 'floating', minRate: 8.75, maxRate: 13.30, processingFeePercent: 1.00, processingFeeMin: 10000, processingFeeMax: 25000, prepaymentCharge: 'Nil (floating)', lastUpdated: '2026-03-01', sourceUrl: 'https://axisbank.com' },
  { id: 'kotak-home', bankName: 'Kotak Mahindra Bank', category: 'Private', loanType: 'home', rateType: 'floating', minRate: 8.75, maxRate: 9.50, processingFeePercent: 0.50, processingFeeMin: 10000, processingFeeMax: 10000, prepaymentCharge: 'Nil (floating)', lastUpdated: '2026-03-01', sourceUrl: 'https://kotak.com' },
  { id: 'idfc-home', bankName: 'IDFC FIRST Bank', category: 'Private', loanType: 'home', rateType: 'floating', minRate: 8.85, maxRate: 12.50, processingFeePercent: 0.50, processingFeeMin: 5000, processingFeeMax: 15000, prepaymentCharge: 'Nil (floating)', lastUpdated: '2026-03-01', sourceUrl: 'https://idfcfirstbank.com' },
  { id: 'bajaj-home', bankName: 'Bajaj Housing Finance', category: 'NBFC', loanType: 'home', rateType: 'floating', minRate: 8.50, maxRate: 15.00, processingFeePercent: 0.35, processingFeeMin: 5000, processingFeeMax: 15000, prepaymentCharge: 'Nil (floating)', lastUpdated: '2026-03-01', sourceUrl: 'https://bajajfinserv.in' },
  { id: 'tata-home', bankName: 'Tata Capital', category: 'NBFC', loanType: 'home', rateType: 'floating', minRate: 8.75, maxRate: 14.00, processingFeePercent: 0.50, processingFeeMin: 5000, processingFeeMax: 15000, prepaymentCharge: '2% (fixed rate)', lastUpdated: '2026-03-01', sourceUrl: 'https://tatacapital.com' },

  // ===== PERSONAL LOANS =====
  { id: 'sbi-personal', bankName: 'State Bank of India', category: 'PSB', loanType: 'personal', rateType: 'fixed', minRate: 11.45, maxRate: 14.50, processingFeePercent: 1.00, processingFeeMin: 1000, processingFeeMax: 15000, prepaymentCharge: '3% on outstanding', lastUpdated: '2026-03-01', sourceUrl: 'https://sbi.co.in' },
  { id: 'pnb-personal', bankName: 'Punjab National Bank', category: 'PSB', loanType: 'personal', rateType: 'fixed', minRate: 11.80, maxRate: 16.50, processingFeePercent: 1.00, processingFeeMin: 1000, processingFeeMax: 15000, prepaymentCharge: '2% on outstanding', lastUpdated: '2026-03-01', sourceUrl: 'https://pnbindia.in' },
  { id: 'hdfc-personal', bankName: 'HDFC Bank', category: 'Private', loanType: 'personal', rateType: 'fixed', minRate: 10.50, maxRate: 24.00, processingFeePercent: 2.50, processingFeeMin: 1999, processingFeeMax: 25000, prepaymentCharge: '2-4% on outstanding', lastUpdated: '2026-03-01', sourceUrl: 'https://hdfcbank.com' },
  { id: 'icici-personal', bankName: 'ICICI Bank', category: 'Private', loanType: 'personal', rateType: 'fixed', minRate: 10.80, maxRate: 16.15, processingFeePercent: 2.50, processingFeeMin: 1999, processingFeeMax: 25000, prepaymentCharge: '3% on outstanding', lastUpdated: '2026-03-01', sourceUrl: 'https://icicibank.com' },
  { id: 'axis-personal', bankName: 'Axis Bank', category: 'Private', loanType: 'personal', rateType: 'fixed', minRate: 11.25, maxRate: 22.00, processingFeePercent: 1.50, processingFeeMin: 999, processingFeeMax: 15000, prepaymentCharge: '2-5% on outstanding', lastUpdated: '2026-03-01', sourceUrl: 'https://axisbank.com' },
  { id: 'kotak-personal', bankName: 'Kotak Mahindra Bank', category: 'Private', loanType: 'personal', rateType: 'fixed', minRate: 10.99, maxRate: 24.00, processingFeePercent: 2.50, processingFeeMin: 999, processingFeeMax: 25000, prepaymentCharge: 'Nil after 12 EMIs', lastUpdated: '2026-03-01', sourceUrl: 'https://kotak.com' },
  { id: 'indusind-personal', bankName: 'IndusInd Bank', category: 'Private', loanType: 'personal', rateType: 'fixed', minRate: 10.49, maxRate: 32.00, processingFeePercent: 3.00, processingFeeMin: 1000, processingFeeMax: 25000, prepaymentCharge: '4% on outstanding', lastUpdated: '2026-03-01', sourceUrl: 'https://indusind.com' },
  { id: 'bajaj-personal', bankName: 'Bajaj Finance', category: 'NBFC', loanType: 'personal', rateType: 'fixed', minRate: 11.00, maxRate: 35.00, processingFeePercent: 3.93, processingFeeMin: 999, processingFeeMax: 25000, prepaymentCharge: '4.72% on outstanding', lastUpdated: '2026-03-01', sourceUrl: 'https://bajajfinserv.in' },
  { id: 'tata-personal', bankName: 'Tata Capital', category: 'NBFC', loanType: 'personal', rateType: 'fixed', minRate: 10.99, maxRate: 35.00, processingFeePercent: 2.75, processingFeeMin: 999, processingFeeMax: 25000, prepaymentCharge: '4% on outstanding', lastUpdated: '2026-03-01', sourceUrl: 'https://tatacapital.com' },

  // ===== CAR LOANS =====
  { id: 'sbi-car', bankName: 'State Bank of India', category: 'PSB', loanType: 'car', rateType: 'fixed', minRate: 9.15, maxRate: 10.75, processingFeePercent: 0.50, processingFeeMin: 1000, processingFeeMax: 15000, prepaymentCharge: 'Nil', lastUpdated: '2026-03-01', sourceUrl: 'https://sbi.co.in' },
  { id: 'pnb-car', bankName: 'Punjab National Bank', category: 'PSB', loanType: 'car', rateType: 'fixed', minRate: 8.65, maxRate: 9.80, processingFeePercent: 0.25, processingFeeMin: 1000, processingFeeMax: 10000, prepaymentCharge: 'Nil', lastUpdated: '2026-03-01', sourceUrl: 'https://pnbindia.in' },
  { id: 'bob-car', bankName: 'Bank of Baroda', category: 'PSB', loanType: 'car', rateType: 'fixed', minRate: 8.65, maxRate: 10.75, processingFeePercent: 0.25, processingFeeMin: 2500, processingFeeMax: 10000, prepaymentCharge: 'Nil', lastUpdated: '2026-03-01', sourceUrl: 'https://bankofbaroda.in' },
  { id: 'hdfc-car', bankName: 'HDFC Bank', category: 'Private', loanType: 'car', rateType: 'fixed', minRate: 8.80, maxRate: 11.00, processingFeePercent: 0.50, processingFeeMin: 3500, processingFeeMax: 15000, prepaymentCharge: '6% yr1, 5% yr2, 3% yr3+', lastUpdated: '2026-03-01', sourceUrl: 'https://hdfcbank.com' },
  { id: 'icici-car', bankName: 'ICICI Bank', category: 'Private', loanType: 'car', rateType: 'fixed', minRate: 9.00, maxRate: 11.00, processingFeePercent: 1.00, processingFeeMin: 3500, processingFeeMax: 15000, prepaymentCharge: '5% on outstanding', lastUpdated: '2026-03-01', sourceUrl: 'https://icicibank.com' },
  { id: 'axis-car', bankName: 'Axis Bank', category: 'Private', loanType: 'car', rateType: 'fixed', minRate: 9.20, maxRate: 11.50, processingFeePercent: 1.00, processingFeeMin: 3500, processingFeeMax: 15000, prepaymentCharge: '5% on outstanding', lastUpdated: '2026-03-01', sourceUrl: 'https://axisbank.com' },
  { id: 'kotak-car', bankName: 'Kotak Mahindra Bank', category: 'Private', loanType: 'car', rateType: 'fixed', minRate: 8.75, maxRate: 11.00, processingFeePercent: 0.50, processingFeeMin: 5000, processingFeeMax: 10000, prepaymentCharge: '6% yr1, 5% yr2, 3% yr3+', lastUpdated: '2026-03-01', sourceUrl: 'https://kotak.com' },

  // ===== EDUCATION LOANS =====
  { id: 'sbi-edu', bankName: 'State Bank of India', category: 'PSB', loanType: 'education', rateType: 'floating', minRate: 9.65, maxRate: 11.65, processingFeePercent: 0, processingFeeMin: 0, processingFeeMax: 0, prepaymentCharge: 'Nil', lastUpdated: '2026-03-01', sourceUrl: 'https://sbi.co.in' },
  { id: 'bob-edu', bankName: 'Bank of Baroda', category: 'PSB', loanType: 'education', rateType: 'floating', minRate: 8.85, maxRate: 11.40, processingFeePercent: 0, processingFeeMin: 0, processingFeeMax: 0, prepaymentCharge: 'Nil', lastUpdated: '2026-03-01', sourceUrl: 'https://bankofbaroda.in' },
  { id: 'canara-edu', bankName: 'Canara Bank', category: 'PSB', loanType: 'education', rateType: 'floating', minRate: 8.85, maxRate: 11.00, processingFeePercent: 0, processingFeeMin: 0, processingFeeMax: 0, prepaymentCharge: 'Nil', lastUpdated: '2026-03-01', sourceUrl: 'https://canarabank.com' },
  { id: 'hdfc-edu', bankName: 'HDFC Bank', category: 'Private', loanType: 'education', rateType: 'floating', minRate: 10.50, maxRate: 14.50, processingFeePercent: 1.00, processingFeeMin: 1000, processingFeeMax: 10000, prepaymentCharge: 'Nil', lastUpdated: '2026-03-01', sourceUrl: 'https://hdfcbank.com' },
  { id: 'axis-edu', bankName: 'Axis Bank', category: 'Private', loanType: 'education', rateType: 'floating', minRate: 13.70, maxRate: 15.20, processingFeePercent: 2.00, processingFeeMin: 5000, processingFeeMax: 15000, prepaymentCharge: 'Nil', lastUpdated: '2026-03-01', sourceUrl: 'https://axisbank.com' },

  // ===== GOLD LOANS =====
  { id: 'sbi-gold', bankName: 'State Bank of India', category: 'PSB', loanType: 'gold', rateType: 'fixed', minRate: 8.75, maxRate: 11.05, processingFeePercent: 0.50, processingFeeMin: 500, processingFeeMax: 5000, prepaymentCharge: 'Nil', lastUpdated: '2026-03-01', sourceUrl: 'https://sbi.co.in' },
  { id: 'hdfc-gold', bankName: 'HDFC Bank', category: 'Private', loanType: 'gold', rateType: 'fixed', minRate: 9.00, maxRate: 17.55, processingFeePercent: 1.00, processingFeeMin: 0, processingFeeMax: 0, prepaymentCharge: 'Nil', lastUpdated: '2026-03-01', sourceUrl: 'https://hdfcbank.com' },
  { id: 'icici-gold', bankName: 'ICICI Bank', category: 'Private', loanType: 'gold', rateType: 'fixed', minRate: 10.00, maxRate: 19.76, processingFeePercent: 1.00, processingFeeMin: 0, processingFeeMax: 0, prepaymentCharge: 'Nil', lastUpdated: '2026-03-01', sourceUrl: 'https://icicibank.com' },
  { id: 'muthoot-gold', bankName: 'Muthoot Finance', category: 'NBFC', loanType: 'gold', rateType: 'fixed', minRate: 12.00, maxRate: 27.00, processingFeePercent: 0, processingFeeMin: 0, processingFeeMax: 0, prepaymentCharge: 'Nil', lastUpdated: '2026-03-01', sourceUrl: 'https://muthootfinance.com' },
  { id: 'manappuram-gold', bankName: 'Manappuram Finance', category: 'NBFC', loanType: 'gold', rateType: 'fixed', minRate: 12.00, maxRate: 29.00, processingFeePercent: 0, processingFeeMin: 0, processingFeeMax: 0, prepaymentCharge: 'Nil', lastUpdated: '2026-03-01', sourceUrl: 'https://manappuram.com' },

  // ===== LOAN AGAINST PROPERTY =====
  { id: 'sbi-lap', bankName: 'State Bank of India', category: 'PSB', loanType: 'lap', rateType: 'floating', minRate: 9.60, maxRate: 11.50, processingFeePercent: 1.00, processingFeeMin: 10000, processingFeeMax: 30000, prepaymentCharge: 'Nil (floating)', lastUpdated: '2026-03-01', sourceUrl: 'https://sbi.co.in' },
  { id: 'hdfc-lap', bankName: 'HDFC Bank', category: 'Private', loanType: 'lap', rateType: 'floating', minRate: 9.50, maxRate: 11.00, processingFeePercent: 1.00, processingFeeMin: 7500, processingFeeMax: 25000, prepaymentCharge: 'Nil (floating)', lastUpdated: '2026-03-01', sourceUrl: 'https://hdfcbank.com' },
  { id: 'icici-lap', bankName: 'ICICI Bank', category: 'Private', loanType: 'lap', rateType: 'floating', minRate: 9.85, maxRate: 12.00, processingFeePercent: 1.00, processingFeeMin: 7500, processingFeeMax: 25000, prepaymentCharge: 'Nil (floating)', lastUpdated: '2026-03-01', sourceUrl: 'https://icicibank.com' },
  { id: 'bajaj-lap', bankName: 'Bajaj Finance', category: 'NBFC', loanType: 'lap', rateType: 'floating', minRate: 9.75, maxRate: 18.00, processingFeePercent: 1.00, processingFeeMin: 10000, processingFeeMax: 30000, prepaymentCharge: '4% on outstanding', lastUpdated: '2026-03-01', sourceUrl: 'https://bajajfinserv.in' },

  // ===== BUSINESS/MSME LOANS =====
  { id: 'sbi-business', bankName: 'State Bank of India', category: 'PSB', loanType: 'business', rateType: 'floating', minRate: 10.15, maxRate: 14.75, processingFeePercent: 1.00, processingFeeMin: 5000, processingFeeMax: 50000, prepaymentCharge: 'Nil', lastUpdated: '2026-03-01', sourceUrl: 'https://sbi.co.in' },
  { id: 'pnb-business', bankName: 'Punjab National Bank', category: 'PSB', loanType: 'business', rateType: 'floating', minRate: 10.40, maxRate: 15.50, processingFeePercent: 1.00, processingFeeMin: 5000, processingFeeMax: 50000, prepaymentCharge: 'Nil', lastUpdated: '2026-03-01', sourceUrl: 'https://pnbindia.in' },
  { id: 'hdfc-business', bankName: 'HDFC Bank', category: 'Private', loanType: 'business', rateType: 'fixed', minRate: 10.75, maxRate: 22.50, processingFeePercent: 2.00, processingFeeMin: 7500, processingFeeMax: 75000, prepaymentCharge: '4% on outstanding', lastUpdated: '2026-03-01', sourceUrl: 'https://hdfcbank.com' },
  { id: 'icici-business', bankName: 'ICICI Bank', category: 'Private', loanType: 'business', rateType: 'fixed', minRate: 10.85, maxRate: 19.00, processingFeePercent: 2.00, processingFeeMin: 5000, processingFeeMax: 50000, prepaymentCharge: '3% on outstanding', lastUpdated: '2026-03-01', sourceUrl: 'https://icicibank.com' },
  { id: 'bajaj-business', bankName: 'Bajaj Finance', category: 'NBFC', loanType: 'business', rateType: 'fixed', minRate: 9.75, maxRate: 30.00, processingFeePercent: 2.00, processingFeeMin: 10000, processingFeeMax: 75000, prepaymentCharge: '4.72% on outstanding', lastUpdated: '2026-03-01', sourceUrl: 'https://bajajfinserv.in' },
  { id: 'tata-business', bankName: 'Tata Capital', category: 'NBFC', loanType: 'business', rateType: 'fixed', minRate: 12.00, maxRate: 25.00, processingFeePercent: 2.00, processingFeeMin: 10000, processingFeeMax: 50000, prepaymentCharge: '4% on outstanding', lastUpdated: '2026-03-01', sourceUrl: 'https://tatacapital.com' },
];

export function getBanksByLoanType(loanType: LoanType): BankRate[] {
  return bankRates.filter((b) => b.loanType === loanType);
}

export function getLoanTypes(): { value: LoanType; label: string }[] {
  return [
    { value: 'home', label: 'Home Loan' },
    { value: 'personal', label: 'Personal Loan' },
    { value: 'car', label: 'Car / Auto Loan' },
    { value: 'education', label: 'Education Loan' },
    { value: 'gold', label: 'Gold Loan' },
    { value: 'lap', label: 'Loan Against Property' },
    { value: 'business', label: 'Business / MSME Loan' },
  ];
}
