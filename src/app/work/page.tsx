import type { Metadata } from "next";
import WorkGallery from "@/components/WorkGallery";
import { workPage } from "@/data/work-page";

export const metadata: Metadata = {
  title: "Work — Experience Team",
  description: workPage.headline,
};

export default function WorkPage() {
  return (
    <div className="flex h-[calc(100dvh-4rem)] flex-col pt-8">
      <WorkGallery />
    </div>
  );
}
