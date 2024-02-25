import {FC} from 'react';
import { allDocs } from "contentlayer/generated"
import { notFound } from 'next/navigation'
import { Mdx } from "@/components/mdx-components"

interface PageProps {
  params: {
    slug: string
  }
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) notFound()

  return doc
}

const page: FC<PageProps> = async ({ params }) => {

  const doc = await getDocFromParams(params.slug)
  // return (
  //   <div>
  //     <h1>{doc.title}</h1>
  //     <p>{doc.description}</p>
  //     {JSON.stringify(doc)}
  //   </div>
  // );
  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        {/* <DocsPageHeader heading={doc.title} text={doc.description} /> */}
        <Mdx code={doc.body.code} />
        <hr className="my-4 md:my-6" />
        {/* <DocsPager doc={doc} /> */}
      </div>
      {/* <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div> */}
    </main>
  )

};

export default page;
