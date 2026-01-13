import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';

const AlgoApps = () => {
  const platforms = [
    {
      name: "Zerodha",
      api: "KiteConnect API",
      description:
        "Fully optimized for the Zerodha platform, this Algo Trading Software stands out by offering smooth and hassle-free integration to run algo strategies on Zerodha.",
      features:
        "Automatic connectivity to Zerodha eliminates two-way verification and boosts trading efficiency.",
      downloadLink:
        "https://drive.google.com/uc?export=download&id=1iZU2_OvjgIiw6Nac40Z_KrEdbWkdBO3v",
      color: "bg-blue-600",
    },
    {
      name: "Groww",
      api: "Groww API",
      description:
        "Fully optimized for the Groww platform with smooth integration to run algo strategies.",
      features:
        "Automatic connectivity to Groww removes manual steps and improves performance.",
      downloadLink:
        "https://drive.google.com/uc?export=download&id=1f2og8N3qV9UfQcljQa_GkrdE6XovwezL",
      color: "bg-teal-600",
    },
    {
      name: "Angel One",
      api: "SmartAPI",
      description:
        "Fully optimized for the Angel One platform to run algo strategies seamlessly.",
      features:
        "Direct SmartAPI connectivity avoids repeated authentication.",
      downloadLink:
        "https://drive.google.com/uc?export=download&id=1SY0DnDYr_sF2O0T8AFARUXv-qQ0tOxtu",
      color: "bg-green-600",
    },
    {
      name: "Upstox",
      api: "Native API",
      description:
        "Fully optimized for the Upstox platform with native API integration.",
      features:
        "Automatic Upstox connectivity eliminates manual verification.",
      downloadLink:
        "https://drive.google.com/uc?export=download&id=10EWWW5OoDqa653Neo1gCVYwqhHfXYaI-",
      color: "bg-purple-600",
    },
    {
      name: "5paisa",
      api: "Native API",
      description:
        "Fully optimized for the 5paisa platform to execute algo strategies efficiently.",
      features:
        "Native API connectivity ensures fast and reliable order execution.",
      downloadLink:
        "https://drive.google.com/uc?export=download&id=18QA6cqKaFQKXGdj0UkJzd9Wk3eIfwhLC",
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
              <p className="mb-3">{platform.description}</p>
              <p className="mb-5 text-muted-foreground">
                {platform.features}
              </p>

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
