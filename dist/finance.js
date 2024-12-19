"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance = void 0;
var Finance;
(function (Finance) {
    class LoanCalculator {
        constructor(loanAmount, annualInterestRate, loanPeriod) {
            this.loanAmount = loanAmount;
            this.annualInterestRate = annualInterestRate;
            this.loanPeriod = loanPeriod;
        }
        /**
         * Рассчитывает ежемесячный платёж по кредиту
         * @author ChatGPT
         */
        calculateMonthlyPayment() {
            const monthlyInterestRate = this.annualInterestRate / 100 / 12;
            const numberOfPayments = this.loanPeriod * 12;
            // Формула аннуитета
            const monthlyPayment = (this.loanAmount *
                (monthlyInterestRate *
                    Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
                (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
            return monthlyPayment.toFixed(2); // Возвращаем округлённый результат
        }
    }
    Finance.LoanCalculator = LoanCalculator;
    class TaxCalculator {
        constructor(income) {
            this.income = income;
        }
        /**
         * Рассчитывает налог на доходы физических лиц в зависимости от уровня дохода
         * @author ChatGPT
         */
        calculateTax() {
            let tax = 0;
            if (this.income <= 50000) {
                tax = this.income * 0.1; // 10% налог
            }
            else if (this.income <= 100000) {
                tax = 50000 * 0.1 + (this.income - 50000) * 0.15; // 10% на первые 50,000, 15% на остаток
            }
            else {
                tax = 50000 * 0.1 + 50000 * 0.15 + (this.income - 100000) * 0.2; // Прогрессивная шкала
            }
            return tax.toFixed(2);
        }
    }
    Finance.TaxCalculator = TaxCalculator;
})(Finance || (exports.Finance = Finance = {}));
exports.default = Finance;
