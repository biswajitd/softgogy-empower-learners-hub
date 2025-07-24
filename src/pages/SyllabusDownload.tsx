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
    // Create detailed course-specific content
    const getDetailedContent = () => {
      const baseInfo = `
${currentSyllabus.title}

Course Overview:
${currentSyllabus.description}

Duration: ${currentSyllabus.duration}
Total Modules: ${currentSyllabus.modules}

Course Topics:
${currentSyllabus.topics.map((topic, index) => `${index + 1}. ${topic}`).join('\n')}
`;

      let specificContent = '';
      
      switch(course) {
        case 'engineering':
          specificContent = `
Prerequisites:
- Basic Mathematics and Physics Knowledge
- Class 12 Science Background
- Interest in Problem-Solving

Module Details:
Module 1-4: Engineering Mathematics & Physics Fundamentals
Module 5-8: Circuit Analysis & Design
Module 9-12: Digital Electronics & Microprocessors
Module 13-16: Control Systems & Automation
Module 17-20: Project Management & Professional Skills
Module 21-24: Industry-Ready Practical Training

Career Opportunities:
- Electronics Engineer
- Control Systems Engineer
- Design Engineer
- Project Manager
- Technical Consultant
`;
          break;
        case 'software':
          specificContent = `
Prerequisites:
- Basic Computer Knowledge
- Problem-Solving Aptitude
- No Prior Programming Experience Required

Module Details:
Module 1-4: Programming Fundamentals (Python, Java, JavaScript)
Module 5-8: Web Development Frontend (HTML, CSS, React)
Module 9-12: Backend Development (Node.js, Databases)
Module 13-16: API Development & Integration
Module 17-20: DevOps & Cloud Computing (AWS, Docker)

Career Opportunities:
- Full Stack Developer
- Frontend Developer
- Backend Developer
- DevOps Engineer
- Software Architect
`;
          break;
        case 'trading':
          specificContent = `
Prerequisites:
- Basic Mathematics
- Interest in Financial Markets
- Analytical Thinking

Module Details:
Module 1-3: Financial Markets & Instruments
Module 4-6: Technical Analysis & Chart Patterns
Module 7-9: Risk Management & Portfolio Theory
Module 10-12: Algorithmic Trading Strategies
Module 13-15: Fundamental Analysis & Economics
Module 16: Trading Psychology & Discipline

Career Opportunities:
- Quantitative Trader
- Risk Analyst
- Portfolio Manager
- Financial Advisor
- Algorithmic Trading Developer
`;
          break;
        case 'android':
          specificContent = `
Prerequisites:
- Basic Programming Knowledge
- Object-Oriented Programming Concepts
- Mobile App Interest

Module Details:
Module 1-3: Java & Kotlin Programming
Module 4-6: Android SDK & App Architecture
Module 7-9: UI/UX Design & Material Design
Module 10-12: Database & API Integration
Module 13-15: Testing & Performance Optimization
Module 16-18: Google Play Store Deployment

Career Opportunities:
- Android Developer
- Mobile App Developer
- UI/UX Designer
- Mobile App Architect
- Freelance App Developer
`;
          break;
        case 'android-development-fundamentals':
          specificContent = `
Prerequisites:
- Basic Java Programming Knowledge
- Understanding of Object-Oriented Programming
- Familiarity with XML

Week-by-Week Breakdown:
Week 1: Android Studio Setup & Project Structure
Week 2: Activity & Fragment Lifecycle Management
Week 3: XML Layout Design & UI Components
Week 4: Event Handling & User Input Processing
Week 5: Local Data Storage with SharedPreferences
Week 6: Network Programming & REST API Integration
Week 7: Unit Testing & Debugging Techniques
Week 8: Google Play Store Publishing & Distribution

Projects:
- Calculator App
- To-Do List App
- Weather App with API Integration
`;
          break;
        case 'advanced-android-development':
          specificContent = `
Prerequisites:
- Strong Android Fundamentals
- Experience with Android Studio
- Understanding of Design Patterns

Week-by-Week Breakdown:
Week 1: MVVM Architecture & Design Patterns
Week 2: Room Database & SQLite Management
Week 3: Dependency Injection with Dagger/Hilt
Week 4: Custom Views & Advanced Animations
Week 5: Background Services & WorkManager
Week 6: Firebase Integration & Push Notifications
Week 7: Camera2 API & Media Processing
Week 8: Performance Optimization & Memory Management
Week 9: Security Best Practices & Data Encryption
Week 10: CI/CD Pipeline & Automated Testing

Advanced Projects:
- E-commerce App with Payment Gateway
- Social Media App with Real-time Chat
- Location-based Service App
`;
          break;
        case 'kotlin-for-android-development':
          specificContent = `
Prerequisites:
- Basic Programming Knowledge
- Familiarity with Android Development
- Object-Oriented Programming Concepts

Week-by-Week Breakdown:
Week 1: Kotlin Fundamentals & Syntax Mastery
Week 2: Object-Oriented Programming with Kotlin
Week 3: Functional Programming & Lambda Expressions
Week 4: Coroutines for Asynchronous Programming
Week 5: Jetpack Compose for Modern UI Development
Week 6: Kotlin Multiplatform Mobile (KMM) Basics

Kotlin-Specific Projects:
- Modern Android App with Jetpack Compose
- Coroutines-based Network App
- KMM Shared Business Logic
`;
          break;
        case 'android-ui/ux-design-mastery':
          specificContent = `
Prerequisites:
- Basic Design Principles Understanding
- Android Development Fundamentals
- Creative Problem-Solving Skills

Week-by-Week Breakdown:
Week 1: Material Design 3 Principles & Components
Week 2: Responsive Layout Design & Screen Adaptation
Week 3: Color Psychology & Typography in Mobile Design
Week 4: Navigation Patterns & User Journey Optimization
Week 5: Micro-interactions & Delightful Animations

Design Projects:
- E-commerce App UI Design
- Banking App UX Flow
- Social Media App Interface
`;
          break;
        default:
          specificContent = `
Prerequisites:
- Relevant foundational knowledge
- Interest in the subject area
- Commitment to learning

This is a comprehensive course designed to provide practical skills and industry-relevant knowledge.
`;
      }

      return baseInfo + specificContent;
    };

    const pdfContent = getDetailedContent() + `

Additional Benefits:
- 100% Free Education
- Industry Expert Mentors
- Hands-on Projects
- Career Placement Support
- Lifetime Course Access
- Certificate of Completion
- One-on-One Mentoring Sessions
- Resume Building Assistance

Assessment & Certification:
- Weekly Assignments
- Mid-Course Project
- Final Capstone Project
- Industry-Standard Certification

Contact Information:
Email: biswajit@softgogy.com
Phone: +91 98300 46647
Address: 397 Motilal Colony, Kolkata, 700081, India

Visit: www.softgogy.com

© 2024 SoftGoGy Education. All rights reserved.
    `;

    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${course}-detailed-syllabus.txt`;
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