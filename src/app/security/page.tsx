'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SecurityTrust() {
    const [activeTab, setActiveTab] = useState('overview');

    const complianceItems = [
        { name: 'SOC 2', status: 'Certified', description: 'System and Organization Controls' },
        { name: 'ISO 27001:2022', status: 'Certified', description: 'Information Security Management' },
        { name: 'ISO 27018', status: 'Certified', description: 'Cloud Data Protection' },
        { name: 'GDPR', status: 'Compliant', description: 'General Data Protection Regulation' },
    ];

    const infrastructureControls = [
        'Auto Scaling',
        'Backups and monitoring',
        'Denial of Service (DoS) Protection',
        'Network segmentation',
        'Web Application Firewall',
        'Intrusion detection systems',
        'Regular vulnerability scanning',
        'Penetration testing',
        '24/7 security monitoring'
    ];

    const organizationalControls = [
        'Background checks',
        'Employee confidentiality',
        'Endpoint encryption',
        'Security training',
        'Access control policies',
        'Incident response planning',
        'Business continuity'
    ];

    const dataProtectionControls = [
        'Data encryption at rest',
        'Data encryption in transit',
        'Secure key management',
        'Data loss prevention',
        'Backup encryption',
        'Data retention policies'
    ];

    return (
      <div className="min-h-screen bg-gray-50 font-sans lg:my-24 mt-14">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 ">
          <div className="container mx-auto px-4 py-8 ">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Tervan X Trust Center
              </h1>
              <p className="text-xl text-gray-600 mb-6 max-w-4xl">
                Tervan X upholds the highest standards for safety and security,
                including enterprise-grade testing and controls, internationally
                recognized compliance accreditations, and advanced protections
                for AI agents against LLM threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-700">security@layerx.com</span>
                </div>
                <Link
                  href="/security/privacy"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="lg:hidden mb-4">
                <select
                  value={activeTab}
                  onChange={(e) => setActiveTab(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-black bg-white text-gray-700"
                >
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "compliance", label: "Compliance" },
                    { id: "resources", label: "Resources" },
                    { id: "controls", label: "Controls" },
                    { id: "subprocessors", label: "Subprocessors" },
                    { id: "faq", label: "FAQ" },
                    { id: "updates", label: "Updates" },
                  ].map((tab) => (
                    <option key={tab.id} value={tab.id}>
                      {tab.label}
                    </option>
                  ))}
                </select>
              </div>

              <nav className="hidden lg:flex space-x-8 overflow-x-auto">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "compliance", label: "Compliance" },
                  { id: "resources", label: "Resources" },
                  { id: "controls", label: "Controls" },
                  { id: "subprocessors", label: "Subprocessors" },
                  { id: "faq", label: "FAQ" },
                  { id: "updates", label: "Updates" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? "border-primary text-primary"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Security Overview
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Our Commitment
                      </h3>
                      <p className="text-gray-600 mb-4">
                        At Tervan X, security is embedded in every layer of our
                        platform. We maintain rigorous security practices to
                        protect your data and ensure the reliability of our
                        services.
                      </p>
                      <ul className="text-gray-600 space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Enterprise-grade infrastructure
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Comprehensive compliance certifications
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Advanced AI threat protection
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Key Features
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-700">Data Encryption</span>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            Active
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-700">24/7 Monitoring</span>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            Active
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-700">Regular Audits</span>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Compliance Tab */}
            {activeTab === "compliance" && (
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Compliance Certifications
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {complianceItems.map((item, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-6"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {item.name}
                          </h3>
                          <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                            {item.status}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                          {item.description}
                        </p>
                        <button className="text-primary hover:text-primary/80 text-sm font-medium">
                          View Certificate →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Additional Compliance
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        99.9%
                      </div>
                      <div className="text-gray-600 text-sm">Uptime SLA</div>
                    </div>
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        24/7
                      </div>
                      <div className="text-gray-600 text-sm">
                        Security Monitoring
                      </div>
                    </div>
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        &lt; 1h
                      </div>
                      <div className="text-gray-600 text-sm">
                        Incident Response
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Controls Tab */}
            {activeTab === "controls" && (
              <div className="space-y-8">
                {/* Infrastructure Security */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Infrastructure Security
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {infrastructureControls
                      .slice(0, 6)
                      .map((control, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            {control}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Organizational Security */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Organizational Security
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {organizationalControls
                      .slice(0, 6)
                      .map((control, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            {control}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Data Protection */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Data Protection
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dataProtectionControls.map((control, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{control}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Other tabs can be implemented similarly */}
            {activeTab === "resources" && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Security Resources
                </h2>
                <p className="text-gray-600">
                  Security documentation and resources coming soon.
                </p>
              </div>
            )}

            {activeTab === "subprocessors" && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Subprocessors
                </h2>
                <p className="text-gray-600">
                  List of subprocessors and data handling information coming
                  soon.
                </p>
              </div>
            )}

            {activeTab === "faq" && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600">Security FAQs coming soon.</p>
              </div>
            )}

            {activeTab === "updates" && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Security Updates
                </h2>
                <p className="text-gray-600">
                  Security updates and changelog coming soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}