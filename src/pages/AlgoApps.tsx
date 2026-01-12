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
      sourceCodeLink: "https://drive.google.com/file/d/1I33_EkXbCcrlKOMpsl3-B4L9hbKofLLu/view?usp=drive_link",
      color: "bg-blue-600"
    },
    {
      name: "Groww",
      api: "Groww API",
      description: "Fully optimized for the Groww platform, this Algo Trading Software stands out by offering smooth and hassle-free integration— to run algo strategies on Groww's platform.",
      features: "What truly sets this software apart is its intelligent automatic connectivity to Groww, eliminating the need for tedious two-way verifications. It effortlessly executes your preferred options, saving your time and significantly boosting your trading profitability.",
      downloadLink: "https://drive.google.com/file/d/18QA6cqKaFQKXGdj0UkJzd9Wk3eIfwhLC/view?usp=drive_link",
      sourceCodeLink: "https://drive.google.com/file/d/1I33_EkXbCcrlKOMpsl3-B4L9hbKofLLu/view",
      color: "bg-teal-600"
    },
    {
      name: "Angel One",
      api: "SmartAPI",
      description: "Fully optimized for the Angel One platform, this Algo Trading Software stands out by offering smooth and hassle-free integration— to run algo strategies on Angel One's platform.",
      features: "What truly sets this software apart is its intelligent automatic connectivity to Angel One & Smart Api, eliminating the need for tedious two-way verifications. It effortlessly executes your preferred options, saving your time and significantly boosting your trading profitability.",
      downloadLink: "https://drive.google.com/file/d/1f2og8N3qV9UfQcljQa_GkrdE6XovwezL/view?usp=sharing",
      sourceCodeLink: "https://drive.google.com/file/d/1nKokU25pQG7SxetuRReZ6CjC5atzyvcZ/view?usp=drive_link",
      color: "bg-green-600"
    },
    {
      name: "Upstox",
      api: "Native API",
      description: "Fully optimized for the Upstox platform, this Algo Trading Software stands out by offering smooth and hassle-free integration— to run algo strategies on Upstox platform.",
      features: "What truly sets this software apart is its intelligent automatic connectivity to Upstox & its Native Api, eliminating the need for tedious two-way verifications. It effortlessly executes your preferred options, saving your time and significantly boosting your trading profitability.",
      downloadLink: "https://drive.google.com/file/d/1SY0DnDYr_sF2O0T8AFARUXv-qQ0tOxtu/view?usp=sharing",
      sourceCodeLink: "https://drive.google.com/file/d/1KHtBis5cVgt_KLZ491O_B9CVZCLaJ1RN/view?usp=drive_link",
      color: "bg-purple-600"
    },
    {
      name: "5paisa",
      api: "Native API",
      description: "Fully optimized for the 5paisa platform, this Algo Trading Software stands out by offering smooth and hassle-free integration— to run algo strategies on 5paisa platform.",
      features: "What truly sets this software apart is its intelligent automatic connectivity to 5paisa & its Native Api, eliminating the need for tedious two-way verifications. It effortlessly executes your preferred options, saving your time and significantly boosting your trading profitability.",
      downloadLink: "https://drive.google.com/file/d/18QA6cqKaFQKXGdj0UkJzd9Wk3eIfwhLC/view?usp=drive_link",
      sourceCodeLink: "https://drive.google.com/file/d/1KHtBis5cVgt_KLZ491O_B9CVZCLaJ1RN/view?usp=drive_link",
      color: "bg-orange-600"
    }
  ];

  const handleDownload = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* --- rest of file unchanged --- */}
    </div>
  );
};

export default AlgoApps;
