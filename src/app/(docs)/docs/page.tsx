import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function IntroductionPage() {
  return (
    <div className="mx-auto space-y-12 py-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Introduction</h1>
        <p className="text-base text-muted-foreground">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/docs/installation">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Introduction Section */}
        <div className="space-y-4">
          <p className="text-base text-muted-foreground">
            Use this as a reference to build your own component libraries.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Why copy/paste and not packaged as a dependency?
              </AccordionTrigger>
              <AccordionContent>
                The idea behind this is to give you ownership and control over
                the code, allowing you to decide how the components are built
                and styled
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I use this in my project?</AccordionTrigger>
              <AccordionContent>
                Yes. Free to use for personal and commercial projects. No
                attribution required.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Which frameworks are supported?
              </AccordionTrigger>
              <AccordionContent>
                You can use these components in any framework that supports
                React. This includes Next.js, Remix.js as of now.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can I contribute to build some component?
              </AccordionTrigger>
              <AccordionContent>
                You can also contribute to the project on GitHub.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
