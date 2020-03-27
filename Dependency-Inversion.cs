// SCENARIO: The projecter can receiving signal from different common ports. When implementing the projector - the high level modules,
// and the ports - the low level modules, they depend on mutual abstractions rather than directly on one another. The projector only know
// it is working with a "port", don't know what specific kind of port that is. The contract between the two classes is Projector takes
// one information about type of port and then calls the same method for every type.

using System;

namespace ID
{
    class Program
    {
        static void Main(string[] args)
        {
            Port[] displayList = { new HDMI(), new VGA(), new DisplayPort()};
            var projecter = new Projecter(displayList);

            Port testHDMI = new HDMI();
            Port testDPP = new DisplayPort();
            Port testVGA = new VGA();
            
            projecter.StartProjecting(testHDMI);
            projecter.StartProjecting(testDPP);
            projecter.StartProjecting(testVGA);
        }
    }

    class Projecter
    {
        public Port[] portList { get; set; }

        public Projecter(Port[] portList)
        {
            this.portList = portList;
        }

        public void StartProjecting(Port input)
        {
            foreach (Port port in portList)
            {
                if (input.GetType() == port.GetType())
                {
                    port.turnOn();
                    port.display();
                    input.turnOff();
                }
            }
        }
    }

    interface Port
    {
        bool On { get; set; }

        void turnOn();

        void display();

        void turnOff();
    }

    class HDMI : Port
    {
        public bool On { get ; set ; }

        public HDMI()
        {
            this.On = false;
        }

        public void turnOn()
        {
            Console.WriteLine("Receiving signal from HDMI Port");
            this.On = true;
        }

        public void display()
        {
            if (this.On)
            {
                Console.WriteLine("Displaying content");
            } 
            else
            {
                Console.WriteLine("Port is off");
            }
        }

        public void turnOff()
        {
            Console.WriteLine("Turning off\n");
            this.On = false;
        }
    }

    class DisplayPort : Port
    {
        public bool On { get ; set ; }

        public DisplayPort()
        {
            this.On = false;
        }
        public void display()
        {
            if (this.On)
            {
                Console.WriteLine("Displaying content");
            }
            else
            {
                Console.WriteLine("Port is off");
            }
        }

        public void turnOff()
        {
            Console.WriteLine("Turning off\n");
            this.On = false;
        }

        public void turnOn()
        {
            Console.WriteLine("Receiving signal from Display Port");
            this.On = true;
        }
    }

    class VGA : Port
    {
        public bool On { get ; set ; }

        public VGA()
        {
            this.On = false;
        }

        public void display()
        {
            if (this.On)
            {
                Console.WriteLine("Displaying content");
            }
            else
            {
                Console.WriteLine("Port is off");
            }
        }

        public void turnOff()
        {
            Console.WriteLine("Turning off\n");
            this.On = false;
        }

        public void turnOn()
        {
            Console.WriteLine("Receiving signal from VGA Port");
            this.On = true;
        }
    }
}
