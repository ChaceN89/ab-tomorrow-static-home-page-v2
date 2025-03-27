// 404Page.jsx
import React from 'react';
import PageTitle from '../routing/PageTitle';

export default function NotFound() {
  return (
    <div className="p-10 text-center mt-20">
      <PageTitle title="404 - Page Not Found" />
      <h1 className="text-4xl font-bold">404</h1>
      <h1 className="text-4xl font-bold">Oops! Page Not Found</h1>
      <p className="text-lg mt-4">The page you're looking for doesn't exist.</p>
      <p className="mt-4">
        <a href="/" className="text-blue-500">Go back to Home</a>
      </p>
    </div>
  );
}
