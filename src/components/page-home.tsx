import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PageHome = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="container flex flex-col items-center px-4 py-12 md:py-16">
        <div className="flex max-w-[980px] flex-col items-center text-center gap-4">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Beautifully designed components
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Instant UI Components Just Copy, Paste & Done
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">GitHub</Button>
        </div>
      </section>

      <section className="container px-4 py-12 md:py-16 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-3xl md:text-6xl">
            Components
          </h2>
          <p className="max-w-[85%] text-muted-foreground sm:text-lg">
            Beautifully designed components that you can copy and paste into your apps.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-[64rem] gap-6 sm:grid-cols-2 md:grid-cols-3 mt-12">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Button</CardTitle>
              <CardDescription>A clickable button element.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <Button>Click me</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default PageHome;


