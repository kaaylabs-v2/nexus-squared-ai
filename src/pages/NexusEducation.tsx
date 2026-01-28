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

      {/* Demo Chat Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
                See it in <span className="text-accent">Action</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Students simply ask questions in natural language. Nexus² connects to your LMS and provides instant, accurate answers.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-lg">No more digging through portals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-lg">24/7 availability for student queries</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-lg">Personalized responses based on student data</span>
                </li>
              </ul>
            </div>

            {/* Chat Demo Window */}
            <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
              {/* Chat Header */}
              <div className="bg-accent/10 border-b border-border px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Nexus² Assistant</p>
                  <p className="text-sm text-muted-foreground">Connected to your LMS</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm text-muted-foreground">Online</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 space-y-4 max-h-[450px] overflow-y-auto">
                {/* Student Message 1 */}
                <div className="flex justify-end">
                  <div className="bg-accent text-accent-foreground px-4 py-3 rounded-2xl rounded-br-md max-w-[80%]">
                    <p>When is my Data Structures assignment due?</p>
                  </div>
                </div>
                {/* AI Response 1 */}
                <div className="flex justify-start">
                  <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-md max-w-[80%]">
                    <p className="text-foreground">Your Data Structures assignment "Binary Tree Implementation" is due on <span className="font-semibold text-accent">February 5th at 11:59 PM</span>. You have 8 days remaining. Would you like me to set a reminder?</p>
                  </div>
                </div>

                {/* Student Message 2 */}
                <div className="flex justify-end">
                  <div className="bg-accent text-accent-foreground px-4 py-3 rounded-2xl rounded-br-md max-w-[80%]">
                    <p>What's the class average in Calculus II?</p>
                  </div>
                </div>
                {/* AI Response 2 */}
                <div className="flex justify-start">
                  <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-md max-w-[80%]">
                    <p className="text-foreground">The current class average in Calculus II is <span className="font-semibold text-accent">78.4%</span>. Your grade is 82%, which puts you in the <span className="font-semibold text-accent">top 35%</span> of the class.</p>
                  </div>
                </div>

                {/* Student Message 3 */}
                <div className="flex justify-end">
                  <div className="bg-accent text-accent-foreground px-4 py-3 rounded-2xl rounded-br-md max-w-[80%]">
                    <p>What should I study for the Physics midterm?</p>
                  </div>
                </div>
                {/* AI Response 3 */}
                <div className="flex justify-start">
                  <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-md max-w-[80%]">
                    <p className="text-foreground">Based on your quiz scores, I recommend focusing on:</p>
                    <ul className="mt-2 space-y-1 text-foreground">
                      <li>• <span className="font-semibold">Wave mechanics</span> (scored 68%)</li>
                      <li>• <span className="font-semibold">Thermodynamics</span> (scored 72%)</li>
                      <li>• Review Chapters 5-8 from the syllabus</li>
                    </ul>
                    <p className="mt-2 text-muted-foreground text-sm">Your strongest areas are Kinematics and Electromagnetism.</p>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="border-t border-border p-4">
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Ask about your courses, grades, or schedule..."
                    className="flex-1 bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    disabled
                  />
                  <button className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
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
