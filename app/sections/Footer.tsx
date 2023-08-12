import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Footer() {
  return (
    <section className="flex justify-center mb-2">
      <div className="flex items-center gap-2">
        built with <SiNextdotjs /> and <SiTailwindcss />
      </div>
    </section>
  );
}
