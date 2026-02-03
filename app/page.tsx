import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Brain, Sparkles, Users, Shield, Clock, Calendar, Video, CheckCircle, MessageSquare } from "lucide-react";
import { services } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal-500/10 via-background to-brand-sage/10 -z-10" />

          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight break-words">
                  Begin Your{" "}
                  <span className="bg-gradient-to-r from-brand-teal-500 to-brand-sage bg-clip-text text-transparent">
                    Healing Journey
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto break-words">
                  Professional online therapy in Utah. Compassionate support for trauma, anxiety, depression, and more.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Schedule Your First Session</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-brand-teal-500" />
                  <span>Licensed & Professional</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-teal-500" />
                  <span>Flexible Scheduling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-brand-teal-500" />
                  <span>Compassionate Care</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-24 bg-muted/50">
          <div className="container">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  How Online Therapy Works
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Getting started is simple and convenient
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-teal-500 to-brand-teal-600 text-white flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                    1
                  </div>
                  <div className="space-y-2">
                    <MessageSquare className="h-8 w-8 text-brand-teal-500 mx-auto" />
                    <h3 className="font-semibold text-lg">Reach Out</h3>
                    <p className="text-sm text-muted-foreground">
                      Contact us to schedule your free consultation
                    </p>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-teal-500 to-brand-teal-600 text-white flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                    2
                  </div>
                  <div className="space-y-2">
                    <Calendar className="h-8 w-8 text-brand-teal-500 mx-auto" />
                    <h3 className="font-semibold text-lg">Schedule</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose a time that works for your busy schedule
                    </p>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-teal-500 to-brand-teal-600 text-white flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                    3
                  </div>
                  <div className="space-y-2">
                    <Video className="h-8 w-8 text-brand-teal-500 mx-auto" />
                    <h3 className="font-semibold text-lg">Connect</h3>
                    <p className="text-sm text-muted-foreground">
                      Meet via secure video from the comfort of home
                    </p>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-teal-500 to-brand-teal-600 text-white flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                    4
                  </div>
                  <div className="space-y-2">
                    <Sparkles className="h-8 w-8 text-brand-teal-500 mx-auto" />
                    <h3 className="font-semibold text-lg">Heal & Grow</h3>
                    <p className="text-sm text-muted-foreground">
                      Begin your journey toward lasting change
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                How I Can Help
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized therapy services tailored to your unique needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.slug} className="h-full">
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

        {/* Why Choose Us */}
        <section className="py-20 md:py-24 bg-muted/50">
          <div className="container">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Why Choose Sinclair Counseling
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Experience the difference of personalized, professional care
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-brand-teal-500/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-brand-teal-500" />
                    </div>
                    <CardTitle className="text-xl">Licensed & Experienced</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Fully licensed professional counselor with specialized training in trauma, addiction,
                      and evidence-based therapeutic approaches.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-brand-teal-500/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 flex items-center justify-center mb-4">
                      <Video className="h-6 w-6 text-brand-teal-500" />
                    </div>
                    <CardTitle className="text-xl">Convenient Online Sessions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Meet from anywhere in Utah via secure, HIPAA-compliant video conferencing.
                      No commute, no waiting rooms—just quality care.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-brand-teal-500/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 flex items-center justify-center mb-4">
                      <Heart className="h-6 w-6 text-brand-teal-500" />
                    </div>
                    <CardTitle className="text-xl">Personalized Treatment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Every client is unique. We tailor our approach to your specific needs, goals,
                      and circumstances for the most effective care.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-brand-teal-500/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-brand-teal-500" />
                    </div>
                    <CardTitle className="text-xl">Proven Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Using evidence-based therapies shown to be effective for anxiety, depression,
                      trauma, and other mental health challenges.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button size="lg" asChild>
                  <Link href="/about">Learn More About Our Approach</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-brand-teal-500/10 to-brand-sage/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Ready to Take the Next Step?
              </h2>
              <p className="text-lg text-muted-foreground">
                Therapy is a vulnerable experience. Yet, it is the way for you to gain true control of your life.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Contact Me Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
