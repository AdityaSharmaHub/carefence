import Footer from "@/components/footer";
import Header from "@/components/header";
import Icon, {
  ClockCircleOutlined,
  GlobalOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";

// Features section
const features = [
  {
    icon: <UserOutlined style={{ fontSize: "30px" }} />,
    heading: "User Authentication",
    content: "Users can register with Google OAuth or with email/password",
  },
  {
    icon: <GlobalOutlined style={{ fontSize: "30px" }} />,
    heading: "Location Services",
    content:
      "Offering GPS location detection along with geofencing for perimeter checking",
  },
  {
    icon: <ClockCircleOutlined style={{ fontSize: "30px" }} />,
    heading: "Time Tracking",
    content: "Tracking real-time staff status, history, analytics and reports.",
  },
];

// How it works section steps
const steps = [
  {
    stepNumber: "1",
    title: "Set Up Your Team",
    description:
      "Register your facility and add staff members with appropriate roles and permissions.",
  },
  {
    stepNumber: "2",
    title: "Configure Location",
    description:
      "Set your facility's geofence perimeter to ensure staff can only clock in from work locations.",
  },
  {
    stepNumber: "3",
    title: "Start Tracking",
    description:
      "Staff can now clock in/out with location verification while managers monitor in real-time.",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />

      {/* Main Section */}
      <section className="flex flex-col gap-6 items-center justify-center py-20 px-4 max-w-4xl mx-auto">
        <h1 className="font-bold text-4xl md:text-6xl text-gray-900 text-center leading-12 md:leading-18">
          Healthcare Shift Management <br />
          <span className="text-[var(--secondary)]">Made Simple</span>
        </h1>
        <h2 className="font-semibold text-xl md:text-3xl italic text-gray-800">
          "Clock in within the safe zone"
        </h2>
        <p className="text-gray-700 font-medium text-base md:text-xl text-balance text-center">
          A platform for healthcare organizations to manage staff shift tracking
          with location-based clock-in/out functionality.
        </p>
        <div className="flex gap-4 mt-4">
          <Link href={"/auth/login"}>
            <Button type="primary" size="large" className="w-[140px]">
              Get started
            </Button>
          </Link>
          <Link href={"#features"}>
            <Button type="default" size="large" className="w-[140px]">
              How it works
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="flex flex-col items-center justify-center py-20 px-6 max-w-7xl mx-auto"
      >
        <h3 className="font-bold text-3xl md:text-4xl mb-12">Our Features</h3>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group cursor-pointer transition-all ease-in duration-200 hover:scale-105 bg-white p-6 rounded-xl border border-gray-300 shadow"
            >
              <span className="group-hover:text-[var(--secondary)] transition ease-in">
                {feature.icon}
              </span>
              <h4 className="font-semibold text-xl mt-4">{feature.heading}</h4>
              <p className="mt-2">{feature.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works section */}
      <section
        id="how-it-works"
        className="flex items-center flex-col justify-center max-w-7xl mx-auto py-20 px-6"
      >
        <h3 className="font-bold text-3xl md:text-4xl mb-12">How it Works</h3>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group cursor-pointer transition-all ease-in duration-200 hover:scale-105 bg-white p-6 rounded-xl border border-gray-300 shadow"
            >
              <span className="text-center font-bold text-2xl px-4.5 py-2 rounded-full bg-[var(--secondary)]">
                {step.stepNumber}
              </span>
              <h4 className="mt-6 font-semibold text-xl mb-2">{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Footer Section */}
      <Footer />
    </div>
  );
}
