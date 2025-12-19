import { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'Ahmed Construction Co.',
    projectType: 'Commercial Building',
    feedback: 'Excellent quality cement and timely delivery. Kamran Limited has been our trusted partner for the last 5 years. Their product knowledge and customer service are outstanding.',
    location: 'Karachi'
  },
  {
    id: '2',
    clientName: 'Bilal Builders',
    projectType: 'Residential Complex',
    feedback: 'Reliable supplier with competitive prices. The Falcon Cement we received was of premium quality. Highly recommend for any construction project.',
    location: 'Lahore'
  },
  {
    id: '3',
    clientName: 'Hassan Infrastructure',
    projectType: 'Road Construction',
    feedback: 'Best quality SRC cement for our marine projects. The technical consultation provided by their team helped us choose the right cement type for our specific needs.',
    location: 'Hyderabad'
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-cement-light via-white to-cement-light overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-industrial-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-industrial-green font-bold text-sm uppercase tracking-widest mb-2 block">Testimonials</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-charcoal mb-3 uppercase tracking-tight">
              What Our Clients Say
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Trusted by builders, contractors, and suppliers across Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-industrial-green/20 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-industrial-green to-accent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-industrial-green/0 to-accent/0 group-hover:from-industrial-green/5 group-hover:to-accent/5 transition-all duration-300"></div>
              
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-industrial-green/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-industrial-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed text-base">
                  &ldquo;{testimonial.feedback}&rdquo;
                </p>
                
                <div className="border-t-2 border-gray-100 pt-4 mt-6">
                  <p className="font-bold text-lg text-charcoal group-hover:text-industrial-green transition-colors">{testimonial.clientName}</p>
                  <p className="text-sm text-industrial-green font-semibold uppercase tracking-wide">{testimonial.projectType}</p>
                  {testimonial.location && (
                    <div className="flex items-center gap-2 mt-2">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-500 font-medium">{testimonial.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
