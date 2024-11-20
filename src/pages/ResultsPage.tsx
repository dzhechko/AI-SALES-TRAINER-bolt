import React from 'react';
import { BarChart2, ThumbsUp, AlertCircle, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResultsPage = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Practice Session Results</h1>
            <p className="text-gray-600">Cold Call Simulation - March 14, 2024</p>
          </div>

          <div className="p-6 grid md:grid-cols-4 gap-4">
            {[
              { icon: <ThumbsUp className="h-6 w-6 text-green-500" />, label: "Overall Score", value: "85%" },
              { icon: <Clock className="h-6 w-6 text-blue-500" />, label: "Duration", value: "12:34" },
              { icon: <AlertCircle className="h-6 w-6 text-yellow-500" />, label: "Areas to Improve", value: "3" },
              { icon: <BarChart2 className="h-6 w-6 text-purple-500" />, label: "Key Metrics", value: "8/10" }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  {stat.icon}
                  <span className="font-medium text-gray-700">{stat.label}</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="p-6 grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Key Strengths</h2>
                <ul className="space-y-3">
                  {[
                    "Clear value proposition delivery",
                    "Effective questioning technique",
                    "Strong active listening skills"
                  ].map((strength, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <ThumbsUp className="h-4 w-4 text-green-500" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Areas for Improvement</h2>
                <ul className="space-y-3">
                  {[
                    "Handling objections more confidently",
                    "Reducing filler words",
                    "Improving closing techniques"
                  ].map((area, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <AlertCircle className="h-4 w-4 text-yellow-500" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Conversation Analysis</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium text-gray-900 mb-2">Talk-to-Listen Ratio</h3>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">You spoke 60% of the time</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium text-gray-900 mb-2">Pace of Speech</h3>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Optimal pace maintained 75% of the time</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Back to Home
            </Link>
            <Link
              to="/conversation"
              className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Practice Again
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;