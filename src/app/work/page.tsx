import type { Metadata } from "next";
import WorkGallery from "@/components/WorkGallery";
import { workPage } from "@/data/work-page";

export const metadata: Metadata = {
  title: "Work — Experience Team",
  description: workPage.headline,
};

export default function WorkPage() {
  return (
    <div className="pt-8 pb-24">
      <WorkGallery />
    </div>
  );
}
