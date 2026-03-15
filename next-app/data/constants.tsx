import React from 'react'

/* ─── Skills ──────────────────────────────────────────────────────── */
export const skills = [
  { label: 'Database Management', pct: 55 },
  { label: 'Web Development', pct: 75 },
  { label: 'Graphic Designing', pct: 95 },
  { label: 'Data Analysis', pct: 45 },
  { label: 'Mobile App Development', pct: 35 },
]

/* ─── Certificates ────────────────────────────────────────────────── */
export const certs = [
  { src: '/assets/images/certificate01.png', alt: 'Certificate 1' },
  { src: '/assets/images/certificate03.png', alt: 'Certificate 3' },
  { src: '/assets/images/certificate02.png', alt: 'Certificate 2' },
]

/* ─── Services ────────────────────────────────────────────────────── */
export const services = [
  { icon: '1', label: <>Full STACK<br />DEVELOPMENT</> },
  { icon: '2', label: <>PROJECT<br />MANAGEMENT</> },
  { icon: '3', label: <>GRAPHIC <br />DESIGNING</> },
  { icon: '4', label: <>DATABASE <br />MANAGEMENT</> },
]

/* ─── Testimonial ─────────────────────────────────────────────────── */
export const testimonial = {
  quote:
    '\u201C I had the pleasure of working with Aaditya on a recent project, as a full stack developer truly impressed me. They delivered clean, efficient code and seamlessly integrated both frontend and backend components. Their attention to detail, and commitment to meeting deadlines made the entire process smooth and stress-free. I highly recommend Aaditya for any web development needs!. \u201D',
  clientName: 'Yash Santosh Hule',
  clientTitle: 'Founder of BM25.',
  clientImage: '/assets/images/client1.png',
}

/* ─── Contact items ───────────────────────────────────────────────── */
export const contactItems = [
  {
    icon: '/assets/images/contact-icon-1.png',
    alt: 'phone icon',
    lines: ['+91 84335 09521', '+91 84335 09521'],
  },
  {
    icon: '/assets/images/contact-icon-2.png',
    alt: 'address icon',
    lines: ['401 Jayram Sadan, Sunil Nagar, DNC rd, Dombivali East 421201.'],
    isAddress: true,
  },
  {
    icon: '/assets/images/contact-icon-3.png',
    alt: 'email icon',
    lines: ['aadigunjal0975@gmail.com', 'aadityagunjal0975@gmail.com'],
  },
]
