import { notFound } from "next/navigation";

export const loadMdx = async (slug: string) => {
  const { default: BlogContent } = await import(`@/content/${slug}.mdx`).catch(
    () => {
      notFound();
    },
  );
  return BlogContent;
};
