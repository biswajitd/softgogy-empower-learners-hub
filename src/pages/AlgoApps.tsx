import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';

const AlgoApps = () => {
  const platforms = [
    {
      name: "Zerodha",
      downloadLink: "https://drive.google.com/open?id=1iZU2_OvjgIiw6Nac40Z_KrEdbWkdBO3v",
      color: "bg-blue-600",
    },
    {
      name: "Groww",
      downloadLink: "https://drive.google.com/open?id=1f2og8N3qV9UfQcljQa_GkrdE6XovwezL",
      color: "bg-teal-600",
    },
    {
      name: "Angel One",
      downloadLink: "https://drive.google.com/file/d/1f2og8N3qV9UfQcljQa_GkrdE6XovwezL/view?usp=sharing",
      color: "bg-green-600",
    },
    {
      name: "Upstox",
      downloadLink: "https://drive.google.com/file/d/1SY0DnDYr_sF2O0T8AFARUXv-qQ0tOxtu/view?usp=sharing",
      color: "bg-purple-600",
    },
    {
      name: "5paisa",
      downloadLink: "https://drive.google.com/file/d/10EWWW5OoDqa653Neo1gCVYwqhHfXYaI-/view?usp=sharing",
      color: "bg-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-10">
        {platforms.map((p) => (
          <Card key={p.name} className="mb-6">
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={p.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className={`${p.color} text-white`}>
                  <Download className="mr-2 h-4 w-4" />
                  DOWNLOAD {p.name.toUpperCase()} ALGO WITH FULL FEATURES
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
