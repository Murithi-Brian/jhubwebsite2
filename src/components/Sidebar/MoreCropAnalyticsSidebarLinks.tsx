import Link from 'next/link';
import React from 'react';

export default function MoreCropAnalyticsSidebarLinks() {
  return (
    <div>
      <li
        className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
          /**pathname.includes('messages') && 'bg-slate-900' */ ''
        }`}
      >
        <Link
          href="/dashboard/messages"
          className={`block text-slate-200 truncate transition duration-150 ${
            /*pathname.includes('messages') ? 'hover:text-slate-200' : */ 'hover:text-white'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="grow flex items-center">
              <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                <path
                  className={`fill-current ${
                    /*pathname.includes('messages') ? 'text-indigo-500' : */ 'text-slate-600'
                  }`}
                  d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"
                />
                <path
                  className={`fill-current ${
                    /*pathname.includes('messages') ? 'text-indigo-300' : */ 'text-slate-400'
                  }`}
                  d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"
                />
              </svg>
              <span className="text-success text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                Messages
              </span>
            </div>
            {/* Badge */}
            <div className="flex flex-shrink-0 ml-2">
              <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">
                4
              </span>
            </div>
          </div>
          Messages
        </Link>
      </li>
    </div>
  );
}
