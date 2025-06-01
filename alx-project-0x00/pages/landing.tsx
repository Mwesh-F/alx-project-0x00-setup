import React from 'react';
import Button from '@/components/Button';

const LandingPage = () => {
  return (
    <div className="space-y-4 p-4">
      {/* Small buttons */}
      <Button title="Small Rounded-sm" styles="text-sm px-2 py-1 rounded-sm bg-blue-500 text-white" />
      <Button title="Small Rounded-md" styles="text-sm px-2 py-1 rounded-md bg-green-500 text-white" />
      <Button title="Small Rounded-full" styles="text-sm px-2 py-1 rounded-full bg-red-500 text-white" />

      {/* Medium buttons */}
      <Button title="Medium Rounded-sm" styles="text-base px-4 py-2 rounded-sm bg-blue-500 text-white" />
      <Button title="Medium Rounded-md" styles="text-base px-4 py-2 rounded-md bg-green-500 text-white" />
      <Button title="Medium Rounded-full" styles="text-base px-4 py-2 rounded-full bg-red-500 text-white" />

      {/* Large buttons */}
      <Button title="Large Rounded-sm" styles="text-lg px-6 py-3 rounded-sm bg-blue-500 text-white" />
      <Button title="Large Rounded-md" styles="text-lg px-6 py-3 rounded-md bg-green-500 text-white" />
      <Button title="Large Rounded-full" styles="text-lg px-6 py-3 rounded-full bg-red-500 text-white" />

      {/* Extra check: Rounded-lg button */}
      <Button title="Rounded-lg Button" styles="text-base px-4 py-2 rounded-lg bg-purple-500 text-white" />
    </div>
  );
};

export default LandingPage;
