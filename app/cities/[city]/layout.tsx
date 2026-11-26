import React from 'react';
import SchemaMarkup from '@/app/components/SchemaMarkup';

export default async function CityLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  return (
    <>
      <SchemaMarkup city={city} />
      {children}
    </>
  );
} 