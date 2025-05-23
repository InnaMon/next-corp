import scaleImg from "/public/scale.jpg";
import Hero from "@/components/hero";

export default function ScalePage() {
  return (
    <Hero
      title="Scale your app to infinity"
      imgData={scaleImg}
      imgAlt="steel factory"
    />
  );
}
