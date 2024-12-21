import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IntroductionPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Udasina UI</h1>
        <p className="text-xl text-muted-foreground">
          Udasina UI Customizable copy paste Components. Open Source.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/docs/installation">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://github.com/">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Introduction</h2>
      </div>
    </div>
  );
}
