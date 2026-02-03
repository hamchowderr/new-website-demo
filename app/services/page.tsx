import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Therapy Services | Sinclair Counseling",
  description: "Specialized online therapy services including trauma, addiction, depression, anxiety, grief, and ADHD counseling.",
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-4xl md:text-5xl font-display font-bold">
                Therapy Services
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized support tailored to your unique mental health needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service) => (
                <Card key={service.slug} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="link" asChild className="px-0">
                      <Link href={`/services/${service.slug}`}>
                        Learn more →
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
