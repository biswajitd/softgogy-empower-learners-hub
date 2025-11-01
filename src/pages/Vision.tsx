import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Sparkles, Target, Heart, Globe, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Vision = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    interests: '',
    goals: ''
  });
  const { toast } = useToast();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Thank you for joining!",
      description: "We'll be in touch soon to help you get started.",
    });
    setFormData({ name: '', email: '', role: '', interests: '', goals: '' });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 animate-fade-in">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-full">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-lg font-semibold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Our Vision
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            The Vision Behind Softgogy
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto">
            Empowering Through Education
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Story Section */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-elegant hover:shadow-glow transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
              </div>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                Softgogy is a <span className="text-primary font-semibold">non-profit organization</span> founded in early 2022 by <span className="text-accent font-semibold">Biswajit Dutta</span>, with a bold and compassionate mission: to provide free, high-quality education and mentorship to marginalized students across India. Rooted in the belief that education is the most powerful tool for transformation, Softgogy aims to bridge the gap between potential and opportunity.
              </p>
              <p className="leading-relaxed">
                What began as a personal initiative soon evolved into a collective movement. A group of highly qualified and experienced professionals, many of whom are retired, joined hands with Mr. Dutta to share their wisdom, time, and expertise. These mentors come from diverse fields—science, engineering, humanities, arts, and more—and are united by a common purpose: to uplift the next generation through knowledge and guidance.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-elegant hover:shadow-glow transition-all duration-300">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-accent to-secondary rounded-xl">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "To democratize access to quality education by offering free learning resources, mentorship, and skill development programs.",
                "To nurture intellectual curiosity and personal growth among students from underserved communities.",
                "To build a network of compassionate educators and professionals who believe in giving back to society.",
                "To empower youth with the confidence, competence, and character needed to thrive in a competitive world.",
                "To create a ripple effect of positive change, where educated and mentored individuals go on to uplift others in their communities."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-1">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Beliefs Section */}
          <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 md:p-12 border border-primary/20 shadow-elegant">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-secondary to-primary rounded-xl">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">What We Believe</h2>
              </div>
            </div>
            <blockquote className="border-l-4 border-primary pl-6 py-4 mb-6">
              <p className="text-xl md:text-2xl font-semibold text-foreground italic">
                "Knowledge is not meant to be hoarded—it is meant to be shared."
              </p>
              <footer className="text-muted-foreground mt-2">— Biswajit Dutta</footer>
            </blockquote>
            <p className="text-muted-foreground leading-relaxed">
              At Softgogy, we believe that every person has something valuable to offer. By contributing our experiences and insights, we help shape a future that is more equitable, enlightened, and empowered.
            </p>
          </div>

          {/* Impact Section */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-elegant hover:shadow-glow transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Our Impact</h2>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Through workshops, online sessions, career guidance, and personal mentorship, Softgogy has already reached <span className="text-primary font-semibold">thousands of students across India</span>. Whether it's helping a rural student crack a competitive exam, guiding a first-generation learner through college applications, or simply being a mentor who listens—Softgogy is making a difference, <span className="text-accent font-semibold">one life at a time</span>.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center py-8">
            <Button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-full shadow-glow text-white text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Users className="w-6 h-6" />
              Join us in making a difference
            </Button>
          </div>

          {/* Join Community Form */}
          {showForm && (
            <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-primary/20 shadow-elegant animate-fade-in">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Join Our Community
                </h2>
                <p className="text-muted-foreground">
                  Be part of a movement that's transforming lives through education and mentorship.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>I want to join as: *</Label>
                  <RadioGroup
                    value={formData.role}
                    onValueChange={(value) => setFormData({ ...formData, role: value })}
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="student" id="student" />
                      <Label htmlFor="student" className="font-normal cursor-pointer">Student (seeking mentorship)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mentor" id="mentor" />
                      <Label htmlFor="mentor" className="font-normal cursor-pointer">Mentor (offering guidance)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="volunteer" id="volunteer" />
                      <Label htmlFor="volunteer" className="font-normal cursor-pointer">Volunteer (support & contribute)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">Areas of Interest</Label>
                  <Input
                    id="interests"
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                    placeholder="e.g., Engineering, Programming, Career Guidance"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">What are you hoping to achieve?</Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    placeholder="Share your goals or how you'd like to contribute..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary via-accent to-secondary text-white font-semibold py-6 text-lg hover:opacity-90 transition-opacity"
                >
                  Join Community Now
                </Button>
              </form>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Vision;
