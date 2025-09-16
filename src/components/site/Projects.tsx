"use client";
import Image from "next/image";
import { useState } from "react";
import { projects } from "@/data/projects";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";

function Media({ src, alt }: { src?: string; alt: string }) {
  const [errored, setErrored] = useState(false);
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border">
      {src && !errored ? (
        <Image
          src={src}
          alt={alt}
          fill
          onError={() => setErrored(true)}
          className="object-cover"
          sizes="(min-width:1536px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          priority={false}
          loading="lazy"
        />
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-foreground/10 to-transparent">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {projects.map((p) => (
            <Card key={p.id} className="group h-full motion-safe:transition-transform motion-safe:will-change-transform motion-safe:hover:-translate-y-0.5">
              <Media src={p.image} alt={p.title} />
              <CardHeader>
                <h3 className="line-clamp-2 text-lg font-semibold text-foreground/90">{p.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-2 text-sm text-foreground/70">{p.description}</p>
                <div className="mt-4 max-h-16 overflow-hidden">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Chip key={t} className="font-mono">{t}</Chip>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex gap-2">
                  {p.links?.demo ? (
                    <a href={p.links.demo} target="_blank" rel="noreferrer noopener" aria-label={`Open demo for ${p.title}`}> 
                      <Button size="md">Live View</Button>
                    </a>
                  ) : null}
                  {p.links?.github ? (
                    <a href={p.links.github} target="_blank" rel="noreferrer noopener" aria-label={`Open GitHub for ${p.title}`}>
                      <Button size="md" variant="outline">GitHub</Button>
                    </a>
                  ) : null}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
