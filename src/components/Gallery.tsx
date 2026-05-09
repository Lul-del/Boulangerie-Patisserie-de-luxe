import Reveal from './Reveal';

const images = [
  {
    src: 'https://images.pexels.com/photos/30853716/pexels-photo-30853716.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    alt: 'Croissants dorés',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/36455120/pexels-photo-36455120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400',
    alt: 'Macarons colorés',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/30700726/pexels-photo-30700726.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Éclairs gourmands',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/9271569/pexels-photo-9271569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400',
    alt: 'Gâteau élégant',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/3850433/pexels-photo-3850433.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Pain au chocolat',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/30667454/pexels-photo-30667454.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    alt: 'Notre boutique',
    span: 'col-span-2 row-span-1',
  },
];

export default function Gallery() {
  return (
    <section id="galerie" className="py-12 sm:py-16 lg:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-gold-500 font-medium tracking-[0.3em] uppercase text-xs sm:text-sm">
            Galerie
          </span>
          <h2 className="font-poppins text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-chocolate-900 mt-3 mb-4 sm:mb-6">
            Un Festin Visuel
          </h2>
          <p className="text-chocolate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Laissez-vous séduire par la beauté de nos créations artisanales.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 auto-rows-[110px] xs:auto-rows-[140px] sm:auto-rows-[170px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 80} className={`${img.span}`}>
              <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer h-full">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 sm:p-6">
                  <span className="text-white font-poppins text-xs sm:text-base md:text-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {img.alt}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
