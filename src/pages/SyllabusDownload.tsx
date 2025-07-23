import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft,
  Download,
  FileText,
  Clock,
  BookOpen,
  Users,
  Award,
  CheckCircle
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const SyllabusDownload = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const course = searchParams.get('course') || 'general';

  const syllabusData = {
    engineering: {
      title: "Engineering Education Syllabus",
      duration: "12 Months",
      modules: 24,
      description: "Comprehensive engineering curriculum covering Electronics, Computer Science, Mechanical, and Electrical Engineering fundamentals.",
      topics: [
        "Engineering Mathematics & Physics",
        "Circuit Analysis & Design",
        "Digital Electronics & Microprocessors",
        "Control Systems & Automation",
        "Project Management & Professional Skills",
        "Industry-Ready Practical Training"
      ]
    },
    software: {
      title: "Software Development Syllabus",
      duration: "10 Months",
      modules: 20,
      description: "Full-stack software development covering modern technologies, frameworks, and industry best practices.",
      topics: [
        "Programming Fundamentals (Python, Java, JavaScript)",
        "Web Development (HTML, CSS, React, Node.js)",
        "Database Design & Management",
        "API Development & Integration",
        "DevOps & Cloud Computing",
        "Software Testing & Quality Assurance"
      ]
    },
    trading: {
      title: "Trading & Finance Syllabus",
      duration: "8 Months",
      modules: 16,
      description: "Professional trading education covering technical analysis, risk management, and financial market strategies.",
      topics: [
        "Financial Markets & Instruments",
        "Technical Analysis & Chart Patterns",
        "Risk Management & Portfolio Theory",
        "Algorithmic Trading Strategies",
        "Fundamental Analysis & Economics",
        "Trading Psychology & Discipline"
      ]
    },
    android: {
      title: "Android Development Syllabus",
      duration: "9 Months",
      modules: 18,
      description: "Complete Android app development from basics to advanced topics including modern frameworks and deployment.",
      topics: [
        "Java & Kotlin Programming",
        "Android SDK & App Architecture",
        "UI/UX Design & Material Design",
        "Database & API Integration",
        "Testing & Performance Optimization",
        "Google Play Store Deployment"
      ]
    },
    "android-development-fundamentals": {
      title: "Android Development Fundamentals Syllabus",
      duration: "8 Weeks",
      modules: 8,
      description: "Master the basics of Android app development with Java and comprehensive hands-on projects.",
      topics: [
        "Android Studio Setup & Project Structure",
        "Activity & Fragment Lifecycle Management",
        "XML Layout Design & UI Components",
        "Event Handling & User Input Processing",
        "Local Data Storage with SharedPreferences",
        "Network Programming & REST API Integration",
        "Unit Testing & Debugging Techniques",
        "Google Play Store Publishing & Distribution"
      ]
    },
    "advanced-android-development": {
      title: "Advanced Android Development Syllabus",
      duration: "10 Weeks",
      modules: 10,
      description: "Build complex enterprise-level Android applications with modern architecture patterns and advanced features.",
      topics: [
        "MVVM Architecture & Design Patterns",
        "Room Database & SQLite Management",
        "Dependency Injection with Dagger/Hilt",
        "Custom Views & Advanced Animations",
        "Background Services & WorkManager",
        "Firebase Integration & Push Notifications",
        "Camera2 API & Media Processing",
        "Performance Optimization & Memory Management",
        "Security Best Practices & Data Encryption",
        "CI/CD Pipeline & Automated Testing"
      ]
    },
    "kotlin-for-android-development": {
      title: "Kotlin for Android Development Syllabus",
      duration: "6 Weeks",
      modules: 6,
      description: "Modern Android development using Kotlin programming language with latest Jetpack libraries.",
      topics: [
        "Kotlin Fundamentals & Syntax Mastery",
        "Object-Oriented Programming with Kotlin",
        "Functional Programming & Lambda Expressions",
        "Coroutines for Asynchronous Programming",
        "Jetpack Compose for Modern UI Development",
        "Kotlin Multiplatform Mobile (KMM) Basics"
      ]
    },
    "android-ui/ux-design-mastery": {
      title: "Android UI/UX Design Mastery Syllabus",
      duration: "5 Weeks",
      modules: 5,
      description: "Create stunning and intuitive user interfaces following Material Design guidelines and modern UX principles.",
      topics: [
        "Material Design 3 Principles & Components",
        "Responsive Layout Design & Screen Adaptation",
        "Color Psychology & Typography in Mobile Design",
        "Navigation Patterns & User Journey Optimization",
        "Micro-interactions & Delightful Animations"
      ]
    }
  };

  const currentSyllabus = syllabusData[course as keyof typeof syllabusData] || syllabusData.software;

  const handleDownload = () => {
    // Create a mock PDF download
    const pdfContent = `
      ${currentSyllabus.title}
      
      Course Overview:
      ${currentSyllabus.description}
      
      Duration: ${currentSyllabus.duration}
      Total Modules: ${currentSyllabus.modules}
      
      Course Topics:
      ${currentSyllabus.topics.map((topic, index) => `${index + 1}. ${topic}`).join('\n')}
      
      Additional Benefits:
      - 100% Free Education
      - Industry Expert Mentors
      - Hands-on Projects
      - Career Placement Support
      - Lifetime Course Access
      - Certificate of Completion
      
      Contact Information:
      Email: biswajit@softgogy.com
      Phone: +91 98300 46647
      Location: 399 Motilal Colony, Kolkata, India
      
      Visit: www.softgogy.com
    `;

    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${course}-syllabus.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/courses">
              <Button variant="outline" size="sm" className="mb-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Courses
              </Button>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Course <span className="text-accent">Syllabus</span>
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Download the complete syllabus and start your learning journey today. 
              Everything is completely free!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Syllabus Details */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <FileText className="h-12 w-12 text-primary" />
              <Badge variant="secondary" className="text-lg px-4 py-2">
                100% Free
              </Badge>
            </div>
            <CardTitle className="text-3xl">{currentSyllabus.title}</CardTitle>
            <p className="text-muted-foreground text-lg">{currentSyllabus.description}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Course Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-card rounded-lg">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{currentSyllabus.duration}</div>
                <div className="text-sm text-muted-foreground">Course Duration</div>
              </div>
              <div className="text-center p-4 bg-gradient-card rounded-lg">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{currentSyllabus.modules}</div>
                <div className="text-sm text-muted-foreground">Learning Modules</div>
              </div>
              <div className="text-center p-4 bg-gradient-card rounded-lg">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Mentor Support</div>
              </div>
            </div>

            {/* Topics Covered */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="h-5 w-5 text-primary mr-2" />
                Topics Covered
              </h3>
              <div className="space-y-3">
                {currentSyllabus.topics.map((topic, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <div className="text-center space-y-4 pt-6">
              <Button 
                size="lg" 
                onClick={handleDownload}
                className="bg-primary hover:bg-primary/90"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Complete Syllabus
              </Button>
              <p className="text-sm text-muted-foreground">
                Free download • No registration required • Instant access
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <Card className="bg-gradient-card border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">What's Included?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Detailed module breakdown</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Learning objectives</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Prerequisites & requirements</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Project descriptions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Career opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Certification details</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Link to="/enrollment">
                <Button variant="outline" size="lg">
                  Enroll Now - It's Free!
                  <Award className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SyllabusDownload;