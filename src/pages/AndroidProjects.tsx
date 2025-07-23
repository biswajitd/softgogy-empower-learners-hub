import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft,
  ExternalLink,
  Download,
  Star,
  GitBranch,
  Users,
  Code,
  Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AndroidProjects = () => {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description: "Complete shopping app with payment integration, user authentication, and admin panel",
      features: ["Firebase Authentication", "Stripe Payment", "Real-time Chat", "Admin Dashboard"],
      driveLink: "https://drive.google.com/drive/folders/1ABC123_ecommerce_app",
      difficulty: "Advanced",
      stars: 4.8,
      downloads: "2.3k"
    },
    {
      title: "Social Media Clone",
      description: "Instagram-like social media app with photo sharing, stories, and messaging",
      features: ["Image Processing", "Real-time Messaging", "Stories Feature", "Social Feed"],
      driveLink: "https://drive.google.com/drive/folders/1DEF456_social_media",
      difficulty: "Advanced",
      stars: 4.6,
      downloads: "1.8k"
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather app with location services and 7-day forecast",
      features: ["GPS Integration", "Weather API", "Location Services", "Notifications"],
      driveLink: "https://drive.google.com/drive/folders/1GHI789_weather_app",
      difficulty: "Intermediate",
      stars: 4.7,
      downloads: "3.1k"
    },
    {
      title: "Task Management App",
      description: "Productive task manager with categories, reminders, and progress tracking",
      features: ["Local Database", "Push Notifications", "Category Management", "Progress Analytics"],
      driveLink: "https://drive.google.com/drive/folders/1JKL012_task_manager",
      difficulty: "Intermediate",
      stars: 4.5,
      downloads: "2.7k"
    },
    {
      title: "Expense Tracker",
      description: "Personal finance app to track expenses with charts and budget management",
      features: ["Chart Analytics", "Budget Planning", "Category Wise Tracking", "Export Reports"],
      driveLink: "https://drive.google.com/drive/folders/1MNO345_expense_tracker",
      difficulty: "Beginner",
      stars: 4.4,
      downloads: "4.2k"
    },
    {
      title: "Recipe Finder App",
      description: "Discover and save recipes with ingredients search and cooking timer",
      features: ["Recipe Search API", "Favorites", "Cooking Timer", "Shopping List"],
      driveLink: "https://drive.google.com/drive/folders/1PQR678_recipe_finder",
      difficulty: "Beginner",
      stars: 4.3,
      downloads: "1.9k"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/android-apps">
              <Button variant="outline" size="sm" className="mb-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Android Apps
              </Button>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Android <span className="text-accent">Project Collection</span>
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Download complete Android projects with source code, documentation, and tutorials. 
              Perfect for learning and building your portfolio!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Smartphone className="h-8 w-8 text-primary" />
                  <Badge className={getDifficultyColor(project.difficulty)}>
                    {project.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4 text-primary" />
                    <span>{project.downloads}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Key Features:</h4>
                  <div className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <Code className="h-3 w-3 text-secondary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <a 
                    href={project.driveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Download from Google Drive
                    </Button>
                  </a>
                  <Link to="/enrollment">
                    <Button variant="outline" className="w-full">
                      <GitBranch className="mr-2 h-4 w-4" />
                      Get Complete Course
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-card p-8 rounded-2xl">
          <Smartphone className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h3 className="text-2xl font-bold mb-4">Want to Build Your Own Android Apps?</h3>
          <p className="text-lg mb-6 text-muted-foreground max-w-2xl mx-auto">
            Join our comprehensive Android development course and learn to build professional apps from scratch. 
            All projects include step-by-step tutorials and mentor support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enrollment">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Learning Android Development
                <Smartphone className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/android-development">
              <Button variant="outline" size="lg">
                View Course Details
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidProjects;