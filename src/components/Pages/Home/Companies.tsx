
import Image from 'next/image'

import img1 from '@/assets/Companies/1st.png'
import img2 from '@/assets/Companies/2nd.png'
import img3 from '@/assets/Companies/3nd.png'
import img4 from '@/assets/Companies/4th.png'
import img5 from '@/assets/Companies/5th.png'

const companies = [
  { src: img1, alt: 'Vodafone' },
  { src: img2, alt: 'Intel' },
  { src: img3, alt: 'Tesla' },
  { src: img4, alt: 'AMD' },
  { src: img5, alt: 'Talkit' },
]

const Companies = () => {
  return (
    <section className="xl:container mx-auto px-16 py-10 bg-white">
      <p className="text-sm text-gray-400 mb-6 tracking-wide">
        Companies we helped grow
      </p>

      <div className="flex items-center justify-between">
        {companies.map((company) => (
          <div
            key={company.alt}
            className="relative h-7 w-28 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <Image
              src={company.src}
              alt={company.alt}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Companies