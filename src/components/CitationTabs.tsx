import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const COPY_SUCCESS_MESSAGE = "Copied!";
const COPY_ERROR_MESSAGE = "Copy failed. Please try again.";

export type CitationTabEntry = {
  label: string;
  html: string;
  copyText: string;
  isPlaceholder: boolean;
};

type Props = {
  entries: CitationTabEntry[];
};

export default function CitationTabs({ entries }: Props) {
  const initialTab = entries[0]?.label ?? "";
  const [activeTab, setActiveTab] = React.useState(initialTab);
  const [feedback, setFeedback] = React.useState("");
  const timeoutRef = React.useRef<number | null>(null);

  const activeEntry = React.useMemo(() => {
    return entries.find((entry) => entry.label === activeTab) ?? entries[0];
  }, [activeTab, entries]);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    if (!activeEntry) {
      return;
    }

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    try {
      await navigator.clipboard.writeText(activeEntry.copyText);
      setFeedback(COPY_SUCCESS_MESSAGE);
      timeoutRef.current = window.setTimeout(() => {
        setFeedback("");
      }, 2000);
    } catch {
      setFeedback(COPY_ERROR_MESSAGE);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Citation</CardTitle>
        <CardDescription>
          Use the BibTeX below to cite the paper or dataset.
        </CardDescription>
        <CardAction>
          <div className="flex flex-col items-end gap-1">
            <Button type="button" size="sm" onClick={handleCopy}>
              Copy BibTeX
            </Button>
            <span
              role="status"
              aria-live="polite"
              className="min-h-4 text-xs text-muted-foreground"
            >
              {feedback}
            </span>
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex flex-col gap-4"
        >
          <TabsList variant="line" className="w-full justify-start">
            {entries.map((entry) => (
              <TabsTrigger
                key={entry.label}
                value={entry.label}
                className="min-w-[6.5rem]"
              >
                {entry.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {entries.map((entry) => (
            <TabsContent key={entry.label} value={entry.label}>
              <div className="overflow-hidden rounded-xl border border-border">
                <div
                  className="[&_pre]:m-0 [&_pre]:overflow-x-auto [&_pre]:p-4 [&_code]:text-[0.8rem] sm:[&_code]:text-sm"
                  dangerouslySetInnerHTML={{ __html: entry.html }}
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
