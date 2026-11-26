import React from 'react';
import SchemaMarkup from '@/app/components/SchemaMarkup';

export default async function ServiceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ city: string; service: string }>;
}) {
  const { city } = await params;
  return (
    <>
      <SchemaMarkup city={city} />
      {children}
    </>
  );
} 