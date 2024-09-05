"use client";

import Image from "next/image";
import { useState } from "react";

export default function Dashboard() {
  // Toggle states
  const [ddosProtection, setDdosProtection] = useState(true);
  const [threatDetection, setThreatDetection] = useState(false);
  const [trafficManagement, setTrafficManagement] = useState(true);
  const [loadBalancing, setLoadBalancing] = useState(false);

  // Form state
  const [banType, setBanType] = useState('');
  const [details, setDetails] = useState('');
  const [duration, setDuration] = useState(1);
  const [threshold, setThreshold] = useState(0);
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <Image src="/logo.png" alt="Cloud Logo" width={40} height={40} />
            <h1 className="text-3xl font-extrabold text-gray-900">
              CloudWalkers Protection Inc
            </h1>
          </div>

          {/* Profile Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <span className="text-lg text-gray-700 font-medium">
                Client Pvt. Ltd
              </span>
              <Image
                src="/client.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full border-2 border-blue-500"
              />
            </div>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <div className="container mx-auto p-6">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-sm font-semibold text-gray-500">Total Requests</h3>
            <p className="text-3xl text-slate-700 font-bold">12,345,678</p>
            <p className="text-green-500">+20.1% from last month</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-sm font-semibold text-gray-500">Blocked Attacks</h3>
            <p className="text-3xl text-slate-700 font-bold">1,234,567</p>
            <p className="text-green-500">+180.1% from last month</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-sm font-semibold text-gray-500">Mitigated Threats</h3>
            <p className="text-3xl text-slate-700 font-bold">987,654</p>
            <p className="text-green-500">+19% from last month</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-sm font-semibold text-gray-500">Client-side Load Balancing</h3>
            <p className="text-3xl text-slate-700 font-bold">573</p>
            <p className="text-green-500">+201 since last hour</p>
          </div>
        </div>

        {/* Blocked Attacks Table and Configuration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-700 p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Blocked Attacks</h3>
            <table className="min-w-full text-left table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b font-semibold">Attack Type</th>
                  <th className="px-4 py-2 border-b font-semibold">Source</th>
                  <th className="px-4 py-2 border-b font-semibold">Timestamp</th>
                  <th className="px-4 py-2 border-b font-semibold">Blocked</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">DDoS</td>
                  <td className="px-4 py-2 border-b">192.168.1.100</td>
                  <td className="px-4 py-2 border-b">2023-06-01 12:34:56</td>
                  <td className="px-4 py-2 border-b">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">SQL Injection</td>
                  <td className="px-4 py-2 border-b">10.0.0.1</td>
                  <td className="px-4 py-2 border-b">2023-06-02 09:12:34</td>
                  <td className="px-4 py-2 border-b">Attention required</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">XSS</td>
                  <td className="px-4 py-2 border-b">172.16.0.2</td>
                  <td className="px-4 py-2 border-b">2023-06-03 15:45:00</td>
                  <td className="px-4 py-2 border-b">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Brute Force</td>
                  <td className="px-4 py-2 border-b">10.1.1.1</td>
                  <td className="px-4 py-2 border-b">2023-06-04 08:23:17</td>
                  <td className="px-4 py-2 border-b">Attention required</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Botnet</td>
                  <td className="px-4 py-2 border-b">192.168.0.100</td>
                  <td className="px-4 py-2 border-b">2023-06-05 17:56:42</td>
                  <td className="px-4 py-2 border-b">Yes Verify ⓘ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl text-slate-700 font-semibold mb-4">
              Configuration
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">DDoS Protection</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={ddosProtection}
                    onChange={() => setDdosProtection(!ddosProtection)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">Threat Detection</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={threatDetection}
                    onChange={() => setThreatDetection(!threatDetection)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">Traffic Management</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={trafficManagement}
                    onChange={() => setTrafficManagement(!trafficManagement)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">Load Balancing</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={loadBalancing}
                    onChange={() => setLoadBalancing(!loadBalancing)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Form for Blocking IP */}
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded-lg mt-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Block IP Address</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <label htmlFor="banType" className="block font-medium text-gray-700">
                Ban Type
              </label>
              <select
                id="banType"
                value={banType}
                onChange={(e) => setBanType(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="">Select a ban type</option>
                <option value="temporary">Temporary</option>
                <option value="permanent">Permanent</option>
              </select>
            </div>

            <div className="col-span-1">
              <label htmlFor="duration" className="block font-medium text-gray-700">
                Duration (in days)
              </label>
              <input
                id="duration"
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                min="1"
              />
            </div>

            <div className="col-span-1">
              <label htmlFor="threshold" className="block font-medium text-gray-700">
                Threat Threshold
              </label>
              <input
                id="threshold"
                type="number"
                value={threshold}
                onChange={(e) => setThreshold(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                min="0"
              />
            </div>
          </div>

          <div>
            <label htmlFor="reason" className="block font-medium text-gray-700">
              Reason
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows="3"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Block IP
          </button>
        </form>
      </div>
    </div>
  );
}
