import cn from '../common/utils/cn';
import '../styles/AboutUs.css';

function AboutUs() {
  return (
    <section className="lg:col-span-4 flex w-full justify-center items-center">
      <div className={cn(
        "min-h-full bg-white/85 max-w-lg lg:py-20",
        "flex flex-col justify-start  lg:items-end",
        "text-justify-center",
        "backdrop-blur-md",
        "p-10 animate-fadeIn"
      )}>
        <div className={cn(
          "max-w-3xl mx-auto",
          "xl:text-lg  2xl:text-xl"
        )}>
          <p className="text-gray-600 leading-relaxed">
            At <span className="font-semibold text-green-700">GreenSpot</span>, we believe plants bring more than beauty —
            they inspire wellness, harmony, and a greener lifestyle.
            Our mission is to connect people with nature by offering high-quality plants,
            responsibly grown and delivered with care.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Guided by <span className="font-semibold">quality, commitment, and community</span>,
            we ensure every plant thrives and every customer feels supported.
            With GreenSpot, you don’t just buy a plant — you grow a healthier and more sustainable way of life.
          </p>
        </div>
        <img src="images/plants/1.png" alt="Landing Illustration" className="mt-6 w-full h-auto max-w-sm" />
      </div>
    </section>
  );
}

export default AboutUs;
