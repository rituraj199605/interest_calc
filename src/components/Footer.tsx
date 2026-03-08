import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-white font-semibold mb-2">₹ LoanCalc India</h3>
            <p className="text-sm">Free EMI and interest calculator for Indian loans. Compare rates across 40+ banks and NBFCs. Data as of March 2026.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Calculators</h3>
            <ul className="text-sm space-y-1">
              <li><Link href="/home-loan" className="hover:text-white transition">Home Loan EMI Calculator</Link></li>
              <li><Link href="/personal-loan" className="hover:text-white transition">Personal Loan EMI Calculator</Link></li>
              <li><Link href="/car-loan" className="hover:text-white transition">Car Loan EMI Calculator</Link></li>
              <li><Link href="/education-loan" className="hover:text-white transition">Education Loan Calculator</Link></li>
              <li><Link href="/gold-loan" className="hover:text-white transition">Gold Loan Calculator</Link></li>
              <li><Link href="/compare" className="hover:text-white transition">Compare All Banks</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Disclaimer</h3>
            <p className="text-sm">Rates shown are indicative and sourced from publicly available data. Verify directly with your bank. This tool is not affiliated with any bank or NBFC and is not a regulated financial entity.</p>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
          © 2026 LoanCalc India · Rates last updated March 2026 · Not a bank or financial advisor
        </p>
      </div>
    </footer>
  );
}
