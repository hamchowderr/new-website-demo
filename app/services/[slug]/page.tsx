import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { services } from "@/lib/constants";
import type { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Sinclair Counseling`,
    description: service.shortDescription,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-brand-teal-500/10 to-brand-sage/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold break-words">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {service.shortDescription}
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Description */}
              <div className="space-y-4">
                <h2 className="text-3xl font-display font-bold">About This Service</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Benefits */}
              {service.benefits && service.benefits.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">What You'll Gain</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* CTA */}
              <div className="text-center pt-8">
                <h3 className="text-2xl font-display font-bold mb-4">
                  Ready to Begin Your Journey?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Take the first step towards healing and growth.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Me Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
