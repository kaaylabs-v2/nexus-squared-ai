import { GraduationCap, Users, Lightbulb, BookOpen, Calendar, FileText, MessageCircle, TrendingUp, School, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NexusEducation = () => {
  const problems = [
    "Information spread across websites, PDFs, notices",
    "Repetitive queries during admissions and placements",
    "High dependency on manual processes",
    "Limited bandwidth for constant updates",
  ];

  const approach = [
    "Organise institutional information",
    "Make access simple and intuitive",
    "Reduce administrative effort",
    "Improve overall campus experience",
  ];

  const institutionUseCases = [
    "Admissions & eligibility queries",
    "Academic calendars and regulations",
    "Placement processes and outcomes",
    "Policies, notices, and announcements",
  ];

  const adminTeamValue = [
    "Reduced repetitive questions",
    "Faster information flow",
    "Better student preparedness",
    "Less dependency on manual coordination",
  ];

  const studentFeatures = [
    {
      icon: Calendar,
      title: "Exam Dates & Schedules",
      description: "Instantly get upcoming exam dates, room assignments, and schedule changes.",
    },
    {
      icon: ClipboardCheck,
      title: "Assignments & Deadlines",
      description: "Track all assignments, submissions, and deadlines across courses.",
    },
    {
      icon: TrendingUp,
      title: "Grades & Progress",
      description: "Access grades, GPA calculations, and academic standing in real-time.",
    },
    {
      icon: Lightbulb,
      title: "Study Tips & Focus Areas",
      description: "Get AI-powered recommendations on what to focus on for upcoming tests.",
    },
    {
      icon: MessageCircle,
      title: "LMS Integration",
      description: "Talk directly to your Learning Management System through natural conversation.",
    },
    {
      icon: BookOpen,
      title: "Course Information",
      description: "Find course materials, syllabi, and professor office hours instantly.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <GraduationCap className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">Nexus² for Education</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-foreground tracking-tight mb-6">
              Transform the <span className="text-accent">campus experience</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              An AI layer for college websites and Learning Management Systems that helps students, 
              faculty, and administrators find information instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8">
                Request a Demo
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
                The Real <span className="text-accent">Problem</span>
              </h2>
              <p className="text-lg text-accent font-semibold mb-6">
                Institutions today face common challenges:
              </p>
              <ul className="space-y-4">
                {problems.map((problem, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-lg">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Lightbulb className="w-32 h-32 text-accent/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-64 h-64 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <School className="w-32 h-32 text-accent/60" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
                Our <span className="text-accent">Approach</span>
              </h2>
              <p className="text-lg text-accent font-semibold mb-6">
                We focus on clarity over complexity
              </p>
              <ul className="space-y-4">
                {approach.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases for Institutions */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
                Use Cases for <span className="text-accent">Institutions</span>
              </h2>
              <ul className="space-y-4 mb-8">
                {institutionUseCases.map((useCase, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-lg">{useCase}</span>
                  </li>
                ))}
              </ul>
              <p className="text-accent font-medium italic">One system. Clear answers.</p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Users className="w-32 h-32 text-accent/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value for TPOs & Admin Teams */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-64 h-64 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <FileText className="w-32 h-32 text-accent/60" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
                Value for TPOs & <span className="text-accent">Admin Teams</span>
              </h2>
              <ul className="space-y-4">
                {adminTeamValue.map((value, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-lg">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Student AI Layer */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
              AI Layer for <span className="text-accent">Students</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Students can talk to their LMS naturally to get exam dates, assignments, grades, 
              and personalized tips on what to focus on for tests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentFeatures.map((feature, i) => (
              <div
                key={i}
                className="bg-card p-8 rounded-2xl border border-border hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
            Ready to transform your <span className="text-accent">campus?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10">
            Join institutions that are using Nexus² to improve student experience and reduce administrative overhead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8">
              Request a Demo
            </Button>
            <Link to="/products">
              <Button size="lg" variant="outline" className="text-base px-8">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NexusEducation;
