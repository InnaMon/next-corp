import performanceImg from "/public/performance.jpg";
import Hero from "@/components/hero";

export default function PerformancePage() {
  return (
    <Hero
      title="We serve high performance applications"
      imgData={performanceImg}
      imgAlt="welding"
    />
  );
}
