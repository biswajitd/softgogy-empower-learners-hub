import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Code, TrendingUp, Zap, Shield, Smartphone, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AlgoApps = () => {
  const platforms = [
    {
      name: "Zerodha",
      api: "KiteConnect API",
      description: "Fully optimized for the Zerodha platform, this Algo Trading Software stands out by offering smooth and hassle-free integration— to run algo strategies on Zerodha's platform.",
      features: "What truly sets this software apart is its intelligent automatic connectivity to Zerodha, eliminating the need for tedious two-way verifications. It effortlessly executes your preferred options, saving your time and significantly boosting your trading profitability.",
      downloadLink: "https://drive.google.com/file/d/1iZU2_OvjgIiw6Nac40Z_KrEdbWkdBO3v/view?usp=sharing",
      color: "bg-blue-600"
    },
    {
      name: "Groww",
      api: "Groww API",
      description: "Fully optimized for the Groww platform, this Algo Trading Software stands out by offering smooth and hassle-free integration— to run algo strategies on Groww's platform.",
      features: "What truly sets this software apart is its intelligent automatic connectivity to Groww, eliminating the need for tedious two-way verifications. It effortlessly executes your preferred options, saving your time and significantly boosting your trading profitability.",
      downloadLink: "https://drive.google.com/file/d/1f2og8N3qV9UfQcljQa_GkrdE6XovwezL/view?usp=sharing",
      color: "bg-teal-600"
    },
    {
      name: "Angel One",
      api: "SmartAPI",
      description: "Fully optimized for the Angel One platform, this Algo Trading Software stands out by offering smooth and hassle-free integration— to run algo strategies on Angel One's platform.",
      features: "What truly sets this software apart is its intelligent automatic connectivity to Angel One & Smart Api, eliminating the need for tedious two-way verifications. It effortlessly executes your preferred options, saving your time and significantly boosting your trading profitability.",
      downloadLink: "https://drive.google.com/file/d/1SY0DnDYr_sF2O0T8AFARUXv-qQ0tOxtu/view?usp=sharing",
      color: "bg-green-600"
    },
    {
      name: "Upstox",
      api: "Native API",
      description: "Fully optimized for the Upstox platform, this Algo Trading Software stands out by offering smooth and hassle-free integration— to run algo strategies on Upstox platform.",
      features: "What truly sets this software apart is its intelligent automatic connectivity to Upstox & its Native Api, eliminating the need for tedious two-way verifications. It effortlessly executes your preferred options, saving your time and significantly boosting your trading profitability.",
      downloadLink: "https://drive.google.com/file/d/10EWWW5OoDqa653Neo1gCVYwqhHfXYaI-/view?usp=sharing",
      color: "bg-purple-600"
    },
    {
      name: "5paisa",
      api: "Native API",
      description: "Fully optimized for the 5paisa platform, this Algo Trading Software stands out by offering smooth and hassle-free integration— to run algo strategies on 5paisa platform.",
      features: "What truly sets this software apart is its intelligent automatic connectivity to 5paisa & its Native Api, eliminating the need for tedious two-way verifications. It effortlessly executes your preferred options, saving your time and significantly boosting your trading profitability.",
      downloadLink: "https://drive.google.com/file/d/18QA6cqKaFQKXGdj0UkJzd9Wk3eIfwhLC/view?usp=drive_link",
      color: "bg-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-10">
        {platforms.map((platform) => (
          <Card key={platform.name} className="mb-6">
            <CardHeader>
              <CardTitle>{platform.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{platform.description}</p>

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
