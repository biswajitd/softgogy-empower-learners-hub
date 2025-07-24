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
      downloadLink: "https://drive.google.com/file/d/1V-Fdwtk7QB5sH0YZtqIw-j0Oo044-Y8P/view?usp=drive_link",
      sourceCodeLink: "https://drive.google.com/file/d/1I33_EkXbCcrlKOMpsl3-B4L9hbKofLLu/view?usp=drive_link",
      color: "bg-blue-600"
    },
    {
      name: "Angel One",
      api: "SmartAPI",
      description: "Fully optimized for the Angel One platform, this Algo Trading Software stands out by offering smooth and hassle-free integration— to run algo strategies on Angel One's platform.",
      features: "What truly sets this software apart is its intelligent automatic connectivity to Angel One & Smart Api, eliminating the need for tedious two-way verifications. It effortlessly executes your preferred options, saving your time and significantly boosting your trading profitability.",
      downloadLink: "https://drive.google.com/file/d/1hdY2r8cO8MaVSohEXlf8vHTLStMCZ8tl/view?usp=drive_link",
      sourceCodeLink: "https://drive.google.com/file/d/1nKokU25pQG7SxetuRReZ6CjC5atzyvcZ/view?usp=drive_link",
      color: "bg-green-600"
    },
    {
      name: "Upstox",
      api: "Native API",
      description: "Fully optimized for the Upstox platform, this Algo Trading Software stands out by offering smooth and hassle-free integration— to run algo strategies on Upstox platform.",
      features: "What truly sets this software apart is its intelligent automatic connectivity to Upstox & its Native Api, eliminating the need for tedious two-way verifications. It effortlessly executes your preferred options, saving your time and significantly boosting your trading profitability.",
      downloadLink: "https://drive.google.com/file/d/1BXqtDVkv60IB_hjV-yAMIZ76gOG2iRph/view?usp=drive_link",
      sourceCodeLink: "https://drive.google.com/file/d/1KHtBis5cVgt_KLZ491O_B9CVZCLaJ1RN/view?usp=drive_link",
      color: "bg-purple-600"
    }
  ];

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full">
              <TrendingUp className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Algo Trading Software
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            Crafted with the innovative capabilities of Python and C#, and leveraging the powerful DotNet Framework 9, 
            this software offers outstanding performance specifically designed for Windows environments. Its rapid 
            automated live trading features guarantee unparalleled execution efficiency and scalping.
          </p>
          <Link to="/">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Lightning Fast Execution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rapid automated live trading with unparalleled execution efficiency and scalping capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Manual Override Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You have the option to manually intervene at any time, providing complete control over your trading activities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Mobile Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Take your software on the go! Operate it on your mobile device using a Windows emulator or remote desktop connection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Platform-Specific Trading Solutions
          </h2>
          
          <div className="space-y-12">
            {platforms.map((platform, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`${platform.color} text-white p-6`}>
                  <h3 className="text-2xl font-bold mb-2">
                    Works on {platform.name} Platform with {platform.api}
                  </h3>
                  <p className="text-lg opacity-90">Your Ultimate Trading Companion</p>
                </div>
                
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {platform.description}
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {platform.features}
                      </p>
                      <p className="text-primary font-semibold mb-6">
                        Make your trading smarter, faster, and more efficient with this revolutionary solution! 
                        Let it work hard, so you don't have to. 🚀
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <Button 
                        onClick={() => handleDownload(platform.downloadLink)}
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-6 text-lg"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        DOWNLOAD {platform.name.toUpperCase()} ALGO WITH FULL FEATURES
                      </Button>
                      
                      <Button 
                        onClick={() => handleDownload(platform.sourceCodeLink)}
                        variant="outline"
                        className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-6 text-lg"
                      >
                        <Code className="mr-2 h-5 w-5" />
                        SOURCE CODE
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Trading Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose your preferred platform and start automated trading with our revolutionary algo software.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <Button 
                key={index}
                onClick={() => handleDownload(platform.downloadLink)}
                variant="outline"
                className="font-semibold"
              >
                Download {platform.name} Version
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlgoApps;