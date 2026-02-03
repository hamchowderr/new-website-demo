import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Heart, Shield, Target, Users, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Sinclair Counseling",
  description: "Learn about our approach to therapy, credentials, and commitment to your mental health journey.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-brand-teal-500/10 to-brand-sage/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold break-words">
                About Sinclair Counseling
              </h1>
              <p className="text-xl text-muted-foreground">
                Compassionate, evidence-based therapy to support your healing journey
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-display font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Sinclair Counseling, we believe that everyone deserves access to compassionate,
                  professional mental health support. Our mission is to provide a safe, non-judgmental
                  space where you can explore your thoughts, feelings, and experiences while developing
                  practical tools for lasting change.
                </p>
              </div>

              <Card className="border-brand-teal-500/20">
                <CardContent className="pt-6">
                  <p className="text-lg text-center text-muted-foreground italic">
                    "Therapy is not about fixing what's broken—it's about discovering your inherent
                    strength and building a life that feels authentic and meaningful."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-display font-bold">Our Core Values</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  These principles guide every aspect of our therapeutic approach
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 flex items-center justify-center mb-4">
                      <Heart className="h-6 w-6 text-brand-teal-500" />
                    </div>
                    <CardTitle className="text-xl">Compassion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We approach every client with empathy, warmth, and unconditional positive regard.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-brand-teal-500" />
                    </div>
                    <CardTitle className="text-xl">Confidentiality</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Your privacy is paramount. We maintain strict ethical standards and HIPAA compliance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 flex items-center justify-center mb-4">
                      <GraduationCap className="h-6 w-6 text-brand-teal-500" />
                    </div>
                    <CardTitle className="text-xl">Evidence-Based</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We utilize proven therapeutic approaches backed by research and clinical evidence.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-brand-teal-500" />
                    </div>
                    <CardTitle className="text-xl">Client-Centered</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      You are the expert on your own life. We collaborate with you to achieve your goals.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-brand-teal-500" />
                    </div>
                    <CardTitle className="text-xl">Goal-Oriented</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We work together to set clear, achievable goals and track your progress.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 flex items-center justify-center mb-4">
                      <Sparkles className="h-6 w-6 text-brand-teal-500" />
                    </div>
                    <CardTitle className="text-xl">Holistic</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We consider all aspects of your wellbeing—mental, emotional, physical, and spiritual.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Therapeutic Approach */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-display font-bold">Our Approach</h2>
                <p className="text-lg text-muted-foreground">
                  Integrating multiple therapeutic modalities for personalized care
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Cognitive Behavioral Therapy (CBT)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      CBT helps you identify and change negative thought patterns that influence your emotions
                      and behaviors. It's highly effective for anxiety, depression, and many other conditions.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Trauma-Focused Therapy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Using evidence-based approaches like EMDR and trauma-focused CBT, we help you process
                      traumatic experiences in a safe, controlled environment.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Mindfulness-Based Approaches</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Incorporating mindfulness and acceptance-based techniques helps you develop greater
                      awareness and emotional regulation skills.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Solution-Focused Brief Therapy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      This approach focuses on your strengths and resources, helping you build solutions
                      rather than dwelling on problems.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-display font-bold">Professional Credentials</h2>
                <p className="text-lg text-muted-foreground">
                  Licensed and qualified to provide exceptional care
                </p>
              </div>

              <Card className="border-brand-teal-500/20">
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-teal-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="h-4 w-4 text-brand-teal-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Licensed Professional Counselor</h3>
                        <p className="text-muted-foreground">State of Utah</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-teal-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <GraduationCap className="h-4 w-4 text-brand-teal-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Master's Degree in Counseling Psychology</h3>
                        <p className="text-muted-foreground">Specialized training in trauma and addiction</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-teal-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Sparkles className="h-4 w-4 text-brand-teal-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Continuing Education</h3>
                        <p className="text-muted-foreground">
                          Committed to ongoing professional development in evidence-based practices
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-brand-teal-500/10 to-brand-sage/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-lg text-muted-foreground">
                Taking the first step towards therapy is courageous. We're here to support you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">View Our Services</Link>
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
