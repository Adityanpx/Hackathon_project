"use client";

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
      <img src="/logo.png" alt="Cloud Logo" className="w-10 h-10"/>
      <h1 className="text-3xl font-extrabold text-gray-900">CloudWalkers' Protection Inc</h1>
    </div>
    
    {/* Navigation Links */}
    <nav className="flex space-x-6 ">
      <a href="#" className="text-lg text-gray-700 hover:text-gray-900 font-medium">Home</a>
      <a href="#" className="text-lg text-gray-700 hover:text-gray-900 font-medium">Reports</a>
      <a href="#" className="text-lg text-gray-700 hover:text-gray-900 font-medium">Settings</a>
      <a href="#" className="text-lg text-blue-600 hover:text-gray-900 font-medium">Go to Cloud</a>
      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 font-medium">Logout</button>
    </nav>
    
    {/* Profile Section */}
    <div className="flex items-center space-x-4">
     
      <div className="flex items-center space-x-3">
        <span className="text-lg text-gray-700 font-medium">Client Pvt. Ltd</span>
        <img src="/client.jpg" alt="Profile" className="w-10 h-10 rounded-full border-2 border-blue-500"/>
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
            <h3 className="text-xl text-slate-700 font-semibold mb-4">Configuration</h3>
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
                <span className="font-semibold text-gray-700">Client-side Load Balancing</span>
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

        {/* New Request / Action Form */}
        <div className="mt-8 bg-white p-6 shadow rounded-lg">
        <h3 className="text-xl text-slate-700 font-semibold mb-4">New Request / Action</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="banType" className="text-slate-700 font-semibold mb-2">Type of Action to be taken</label>
            <select
              id="banType"
              value={banType}
              onChange={(e) => setBanType(e.target.value)}
              className="p-2 border rounded text-slate-700"
            >
              <option value="">Select Ban Type</option>
              <option value="ip">IP Ban</option>
              <option value="range">IP Range Ban</option>
              <option value="country">Country Ban</option>
              <option value="timestamp">Timestamp Ban</option>
              <option value="region">Region Ban</option>
            </select>
          </div>

          {/* Conditional rendering based on selected ban type */}
          {banType && (
            <div className="space-y-4">
              {banType === "ip" && (
                <div className="flex flex-col">
                  <label htmlFor="ipAddress" className="text-slate-700 font-semibold mb-2">IP Address</label>
                  <input
                    id="ipAddress"
                    type="text"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="p-2 border rounded text-slate-700"
                  />
                </div>
              )}
              {banType === "range" && (
                <div className="flex flex-col">
                  <label htmlFor="ipRange" className="text-slate-700 font-semibold mb-2">IP Range</label>
                  <input
                    id="ipRange"
                    type="text"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="p-2 border rounded text-slate-700"
                  />
                </div>
              )}
              {banType === "country" && (
                <div className="flex flex-col">
                  <label htmlFor="country" className="text-slate-700 font-semibold mb-2">Country</label>
                  <input
                    id="country"
                    type="text"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="p-2 border rounded text-slate-700"
                  />
                </div>
              )}
              {banType === "timestamp" && (
                <div className="flex flex-col">
                  <label htmlFor="timestamp" className="text-slate-700 font-semibold mb-2">Timestamp</label>
                  <input
                    id="timestamp"
                    type="datetime-local"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="p-2 border rounded text-slate-700"
                  />
                </div>
              )}
              {banType === "region" && (
                <div className="flex flex-col">
                  <label htmlFor="region" className="text-slate-700 font-semibold mb-2">Cloud Region</label>
                  <select
                    id="region"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="p-2 border rounded text-slate-700"
                  >
                    <option value="">Select Region</option>
                    <option value="us-east-1">US East (N. Virginia)</option>
                    <option value="us-west-2">US West (Oregon)</option>
                    <option value="eu-central-1">EU (Frankfurt)</option>
                    <option value="ap-southeast-1">Asia Pacific (Singapore)</option>
                    {/* Add more regions as needed */}
                  </select>
                </div>
              )}

              {/* Common fields */}
              <div className="flex flex-col">
                <label htmlFor="duration" className="text-slate-700 font-semibold mb-2">Duration (hours)</label>
                <input
                  id="duration"
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value))}
                  className="p-2 border rounded text-slate-700"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="threshold" className="text-slate-700 font-semibold mb-2">Threshold</label>
                <input
                  id="threshold"
                  type="number"
                  value={threshold}
                  onChange={(e) => setThreshold(parseInt(e.target.value))}
                  className="p-2 border rounded text-slate-700"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="reason" className="text-slate-700 font-semibold mb-2">Reason</label>
                <textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="p-2 border rounded text-slate-700"
                  rows="4"
                ></textarea>
              </div>
            </div>
          )}

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit Request</button>
        </form>
      </div>
      </div>
    </div>
  );
}
