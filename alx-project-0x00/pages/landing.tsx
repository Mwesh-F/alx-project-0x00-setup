import React from 'react';
import Button from '../components/Button';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-2xl font-bold mb-4">Custom Buttons</h1>

      {/* Small buttons */}
      <Button title="Small - Rounded-sm" className="text-sm rounded-sm" />
      <Button title="Small - Rounded-md" className="text-sm rounded-md" />
      <Button title="Small - Rounded-full" className="text-sm rounded-full" />

      {/* Medium buttons */}
      <Button title="Medium - Rounded-sm" className="text-base rounded-sm" />
      <Button title="Medium - Rounded-md" className="text-base rounded-md" />
      <Button title="Medium - Rounded-full" className="text-base rounded-full" />

      {/* Large buttons */}
      <Button title="Large - Rounded-sm" className="text-lg rounded-sm px-6 py-3" />
      <Button title="Large - Rounded-md" className="text-lg rounded-md px-6 py-3" />
      <Button title="Large - Rounded-full" className="text-lg rounded-full px-6 py-3" />
    </div>
  );
};

export default LandingPage;
