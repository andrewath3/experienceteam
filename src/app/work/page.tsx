import type { Metadata } from "next";
import WorkGallery from "@/components/WorkGallery";
import { getAllProjects, projectTypes } from "@/lib/content/projects";
import { getWorkPageContent } from "@/lib/content/work";

export function generateMetadata(): Metadata {
  const workPage = getWorkPageContent();
  return {
    title: "Work — Experience Team",
    description: workPage.headline,
  };
}

export default function WorkPage() {
  const projects = getAllProjects();
  const workPage = getWorkPageContent();
  return (
    <div className="pt-8 pb-24">
      <WorkGallery projects={projects} projectTypes={projectTypes} workPage={workPage} />
    </div>
  );
}
