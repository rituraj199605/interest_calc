export type LoanType = 'home' | 'personal' | 'car' | 'education' | 'gold' | 'lap' | 'business';

export type BankCategory = 'PSB' | 'Private' | 'SFB' | 'NBFC';

export type RateType = 'fixed' | 'floating' | 'mixed';

export interface BankRate {
  id: string;
  bankName: string;
  category: BankCategory;
  loanType: LoanType;
  rateType: RateType;
  minRate: number;
  maxRate: number;
  processingFeePercent: number;
  processingFeeMin: number;
  processingFeeMax: number;
  prepaymentCharge: string;
  lastUpdated: string;
  sourceUrl: string;
}

export interface EMIResult {
  emi: number;
  totalInterest: number;
  totalAmount: number;
  amortization: AmortizationRow[];
}

export interface AmortizationRow {
  month: number;
  emi: number;
  principal: number;
  interest: number;
  balance: number;
}

export interface CalculateRequest {
  principal: number;
  ratePerAnnum: number;
  tenureMonths: number;
  loanType?: LoanType;
}
