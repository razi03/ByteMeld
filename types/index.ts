export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  link: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  image: string
  text: string
  verifyUrl: string
}

export interface Service {
  icon: React.ReactNode
  title: string
  description: string
}