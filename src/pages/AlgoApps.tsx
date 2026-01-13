import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';

const AlgoApps = () => {
  const platforms = [
    {
      name: "Zerodha",
      downloadLink:
        "https://drive.google.com/file/d/1iZU2_OvjgIiw6Nac40Z_KrEdbWkdBO3v/view",
      color: "bg-blue-600",
    },
    {
      name: "Groww",
      downloadLink:
        "https://drive.google.com/file/d/1f2og8N3qV9UfQcljQa_GkrdE6XovwezL/view",
      color: "bg-teal-600",
    },
    {
      name: "Angel One",
      downloadLink:
        "https://drive.google.com/file/d/1SY0DnDYr_sF2O0T8AFARUXv-qQ0tOxtu/view",
      color: "bg-green-600",
    },
    {
      name: "Upstox",
      downloadLink:
        "https://drive.google.com/file/d/10EWWW5OoDqa653Neo1gCVYwqhHfXYaI-/view",
      color: "bg-purple-600",
    },
    {
      name: "5paisa",
      downloadLink:
        "https://drive.google.com/file/d/18QA6cqKaFQKXGdj0UkJzd9Wk3eIfwhLC/view",
      color: "bg-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-10">
        {platforms.map((platform) => (
          <Card key={platform.name} className="mb-6">
            <CardHeader>
              <CardTitle>{platform.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={platform.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className={`${platform.color} text-white`}>
                  <Download className="mr-2 h-4 w-4" />
                  DOWNLOAD {platform.name.toUpperCase()} ALGO WITH FULL FEATURES
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AlgoApps;
