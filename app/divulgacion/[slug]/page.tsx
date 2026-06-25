import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { PageContainer } from "@/components/page-container"
import { TopicTemplate } from "@/components/topic-template"
import { getTopic, topics } from "@/lib/topics"

export function generateStaticParams() {
  return Object.keys(topics).map((slug) => ({ slug }))
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const topic = getTopic(slug)

  if (!topic) {
    notFound()
  }

  return (
    <PageContainer eyebrow={topic.category} title={topic.title}>
      <Link
        href="/divulgacion"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a divulgación
      </Link>
      <TopicTemplate topic={topic} />
    </PageContainer>
  )
}
