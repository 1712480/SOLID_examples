// SCENARIO: When designing a system for assembling the cars. Instead of making one big "FAT" interface that prescribed
// all methods and properties, I broke it down into 3 interfaces that act as "role interfaces". Different interface define
// limited sets of related behaviors, which can then be implemented when they are needed. 

using System;

namespace ISP
{
    interface Vehicle
    {
        int Wheels { get; set; }

        string Engine { get; set; }

    }

    interface HybridVehicle
    {
        string ElectricMotor { get; set; }

        void Charge();
    }

    interface PetroVehicle
    {
        string GearBox { get; set; }
        void Refuel();
    }

    class Mercedes : Vehicle, PetroVehicle
    {
        private int wheels = 4;
        private string engine = "V8";
        private string gearBox = "ZF";
        public int Wheels { get { return wheels; } set { wheels = value; } }
        public string Engine { get { return engine; } set { engine = value; } }
        public string GearBox { get { return gearBox; } set { gearBox = value; } }

        public void Refuel()
        {
            Console.WriteLine("Refueling");
        }
    }

    class BMW : Vehicle, HybridVehicle
    {
        private int wheels = 4;
        private string engine = "V10";
        private string motor = "11.6 kWh lithium-ion / 33";
        public int Wheels { get { return wheels; } set { wheels = value; } }
        public string Engine { get { return engine; } set { engine = value; } }
        public string ElectricMotor { get { return motor; } set { motor = value; } }

        public void Charge()
        {
            Console.WriteLine("Charging");
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            BMW hybrid = new BMW();
            Mercedes petro = new Mercedes();

            petro.Refuel();
            hybrid.Charge();
        }
    }
}
