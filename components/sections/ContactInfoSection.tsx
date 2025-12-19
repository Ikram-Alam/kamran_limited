interface ContactInfo {
  icon: string;
  title: string;
  details: string[];
}

const contactData: ContactInfo[] = [
  {
    icon: 'location',
    title: 'Office Address',
    details: ['Main Office, Karachi', 'Sindh, Pakistan']
  },
  {
    icon: 'phone',
    title: 'Primary Contact',
    details: ['Muhammad Iqbal Kamran', '0336 9283119', '0315 9283119', '0321 9283119']
  },
  {
    icon: 'phone',
    title: 'Additional Contacts',
    details: ['M. Yousuf Kamran: 0336 3205344', 'M. Kashif Kamran: 0313 8658032']
  },
//   {
//     icon: 'email',
//     title: 'Email',
//     details: ['kamran.company09@gmail.com']
//   },
  {
    icon: 'clock',
    title: 'Office Hours',
    details: ['Monday - Saturday', '8:00 AM - 6:00 PM']
  }
];

const iconComponents = {
  location: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  phone: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  email: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  clock: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
};

export default function ContactInfoSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-cement-light via-white to-cement-light overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a1a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-industrial-green/10 to-accent/10 border border-industrial-green/30 rounded-full mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-industrial-green to-accent bg-clip-text text-transparent uppercase tracking-wider">Contact Information</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4 uppercase tracking-tight">
            Get In <span className="bg-gradient-to-r from-industrial-green to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-industrial-green to-accent mx-auto rounded-full"></div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {contactData.map((contact, index) => (
            <div key={index} className="group relative">
              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-industrial-green to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-industrial-green/30 transition-all duration-300 h-full flex flex-col">
                {/* Icon Box */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-industrial-green to-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-industrial-green to-accent rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto">
                    {iconComponents[contact.icon as keyof typeof iconComponents]}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center flex-grow">
                  <h3 className="text-lg lg:text-xl font-bold text-charcoal mb-3 group-hover:text-industrial-green transition-colors">{contact.title}</h3>
                  <div className="space-y-1">
                    {contact.details.map((detail, idx) => (
                      <div key={idx} className="text-sm lg:text-base text-gray-600 leading-relaxed">{detail}</div>
                    ))}
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-industrial-green/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
