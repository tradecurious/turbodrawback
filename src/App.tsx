import { ChevronDown, Building2, Package, Users, Truck } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      q: "What types of imports are eligible for tariff drawback?",
      a: "Drawback may be available for imported merchandise that was subsequently exported, destroyed under customs supervision, or manufactured into a different product that was then exported. Eligibility also depends on specific tariff provisions, trade agreements, and the timing of imports and exports. We review your specific circumstances to determine what qualifies."
    },
    {
      q: "How far back can we claim refunds?",
      a: "Generally, drawback claims can be filed for entries made within the past five years, though specific time limits depend on the type of drawback and when the qualifying event (such as export or destruction) occurred. We assess the applicable time limits based on your import and export records."
    },
    {
      q: "How is our data kept secure?",
      a: "We handle all import documentation and business information under strict confidentiality agreements. Data is transmitted and stored using secure, encrypted methods. We work with you to establish data-sharing protocols that meet your internal security and compliance requirements."
    },
    {
      q: "Can we work with our existing customs broker?",
      a: "Yes. We are designed to complement your current broker relationship, not replace it. We prepare the analysis and documentation, and your broker can file the drawback claim as part of their ongoing service to you. We coordinate directly with brokers and provide materials in formats they can use."
    },
    {
      q: "How long does the process take?",
      a: "The initial review and identification phase typically takes 4–8 weeks, depending on the volume of entries and complexity of your import activity. Once eligible entries are identified and documentation is prepared, the filing and adjudication by CBP can take several months. We provide timeline estimates based on your specific situation."
    },
    {
      q: "What information do you need to get started?",
      a: "We need access to your import entry data, including entry numbers, dates, HTS classifications, and duty amounts paid. Commercial invoices, bills of lading, and any export documentation are also helpful. We can work with data exports from your customs broker or freight forwarder, and we provide a detailed list of required documents once we begin."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-gray-900">TurboDrawback</div>
          <nav className="hidden md:flex items-center gap-8">
            {['How it works', 'Who we help', 'Pricing', 'FAQ', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="text-gray-600 hover:text-gray-900">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-gray-900 mb-6">Recover refunds on tariffs you never should have paid.</h1>
            <p className="text-gray-600 mb-12 text-xl">
              We review your past imports and identify entries eligible for tariff drawback, then prepare the documentation needed to file claims and recover duties.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="#contact" className="inline-block px-8 py-3 bg-blue-900 text-white hover:bg-blue-800 transition-colors">
                Check refund eligibility
              </a>
              <a href="mailto:info@example.com" className="inline-block px-8 py-3 text-blue-900 hover:text-blue-800">
                Email us
              </a>
            </div>
          </div>
          <div className="hidden md:block relative w-full h-96">
            <div className="relative w-72 h-72 mx-auto mt-12">
              <div className="absolute top-0 left-8 w-40 h-32 border-2 border-blue-900 bg-white" />
              <div className="absolute top-6 left-12 w-40 h-32 border-2 border-blue-900 bg-white" />
              <div className="absolute top-12 left-16 w-40 h-32 border-2 border-blue-900 bg-slate-50" />
              <div className="absolute top-48 left-32 w-20 h-0.5 bg-blue-900" />
              <div className="absolute top-48 right-20 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-[12px] border-l-blue-900" />
              <div className="absolute bottom-0 right-0 w-32 h-32 border-2 border-gray-400 bg-white" />
              <div className="absolute bottom-2 right-2 w-32 h-32 border-2 border-gray-400 bg-slate-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section id="who-we-help" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-gray-900 mb-16 text-center">Who we help</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: Building2, title: "Importers of record", desc: "Companies importing goods who may have overpaid duties due to classification errors, tariff changes, or eligibility for preference programs." },
              { Icon: Package, title: "Small and mid-sized brands", desc: "Businesses without in-house customs expertise who need help identifying and recovering overpaid tariffs." },
              { Icon: Users, title: "Customs brokers", desc: "Brokers looking to provide additional value to clients through tariff recovery analysis and documentation support." },
              { Icon: Truck, title: "Logistics teams", desc: "Supply chain professionals seeking to reduce landed costs and identify opportunities for duty recovery." }
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <Icon className="w-8 h-8 text-blue-900 mb-4" strokeWidth={1.5} />
                <h3 className="text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-gray-900 mb-16 text-center">How it works</h2>
          <div className="relative">
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-300 hidden md:block" />
            <div className="space-y-16">
              {[
                { title: "Document review", desc: "We securely review your import entry data, commercial invoices, and customs filings from the past several years to identify potential overpayments." },
                { title: "Analysis of entries against tariff rules", desc: "Our team analyzes each entry against current and historical tariff schedules, trade agreements, and drawback provisions to determine eligibility for refunds." },
                { title: "Preparation of drawback package", desc: "We prepare a complete drawback filing package with all required documentation and summaries that you or your customs broker can submit to CBP for recovery." }
              ].map((step, i) => (
                <div key={i} className="flex gap-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white flex items-center justify-center relative z-10">
                    {i + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-gray-900 mb-3 text-xl">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-gray-900 mb-16 text-center">What we offer</h2>
          <div className="space-y-12">
            {[
              { title: "Identifying eligible entries", desc: "We conduct a thorough review of your import history to identify entries that qualify for tariff drawback under manufacturing, unused merchandise, or rejected merchandise provisions. Our analysis includes checking for classification errors, preferential trade agreement eligibility, and other opportunities for duty recovery." },
              { title: "Preparing documentation and summaries", desc: "We prepare all required documentation including detailed summaries of eligible entries, supporting evidence, and the necessary forms and schedules. Our work product is organized and ready to file, reducing the burden on your internal team or customs broker." },
              { title: "Coordinating with your existing broker or counsel", desc: "We work alongside your current customs broker, freight forwarder, or legal counsel. Our role is to support your team with specialized analysis and documentation, not to replace your existing relationships. We communicate clearly and provide materials in formats that integrate smoothly with your current processes." }
            ].map(({ title, desc }) => (
              <div key={title}>
                <h3 className="text-gray-900 mb-4 text-xl">{title}</h3>
                <p className="text-gray-600 text-lg">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Refund Scenario */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Typical refund scenario</h2>
            <p className="text-gray-600 text-lg">This is an illustrative example, not a guarantee of results</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { amount: "$125,000", label: "Duties paid on imports over 3 years" },
              { amount: "$18,500", label: "Identified as eligible for drawback" },
              { amount: "$16,200", label: "Returned to you after filing" }
            ].map(({ amount, label }) => (
              <div key={label} className="bg-white border border-gray-200 p-8 text-center shadow-sm">
                <div className="text-4xl text-blue-900 mb-3">{amount}</div>
                <div className="text-gray-600 text-lg">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-gray-900 mb-16 text-center">Pricing</h2>
          <div className="max-w-2xl mx-auto bg-white border border-gray-200 p-12 shadow-sm">
            <h3 className="text-gray-900 mb-6 text-xl">Performance-based fee structure</h3>
            <p className="text-gray-600 mb-6 text-lg">
              There is no upfront fee for our services. Our compensation is structured as a small percentage of any recovery obtained through the drawback claims we prepare. The specific percentage is agreed upon in writing before any filing is made.
            </p>
            <p className="text-gray-600 text-lg">
              If no refund is recovered, you owe nothing. This aligns our interests with yours and ensures that we focus on identifying legitimate, recoverable claims.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-gray-900 mb-16 text-center">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 shadow-sm">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-900 text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 ml-4 transition-transform ${openFAQ === i ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === i && <div className="px-8 pb-6 text-gray-600 text-lg">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-gray-900 mb-8">Get in touch</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            All inquiries are handled confidentially. We're happy to answer questions about your specific situation and provide an initial assessment at no cost.
          </p>
          <a href="mailto:contact@tariffrecovery.com" className="text-blue-900 hover:text-blue-800 text-lg">
            contact@tariffrecovery.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          © {new Date().getFullYear()} eCompliance Inc. All rights reserved. turbodrawback.com
        </div>
      </footer>
    </div>
  );
}
