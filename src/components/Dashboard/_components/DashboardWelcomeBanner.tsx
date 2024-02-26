'use client';
import React from 'react';

function DashboardWelcomeBanner({
  accountName = localStorage.getItem('userDisplayName'),
  bannerText = 'Here is Your Crop Management & Analytics Portal'
}: any) {
  // TODO, Pass down Account Name From Auth Instance
  return (
    <div className="relative bg-indigo-200 dark:bg-indigo-500 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">
          Welcom back, <span className="text-success">{accountName}</span>
        </h1>
        <p className="dark:text-indigo-200">{bannerText}</p>
      </div>
    </div>
  );
}

export default DashboardWelcomeBanner;
