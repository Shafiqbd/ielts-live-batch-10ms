//  Social Media Props
export interface Overview {
  title: string;
  description: string;
}

export interface MediaType {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: string;
  text: string;
}

export interface InstructorType {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

export interface FeaturesType {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}
export interface PointersType {
  icon?: string;
  color?: string;
  id: string;
  text: string;
}
export interface RoutineType {
  download_link?: string;
  html: string;
}

export interface TestimonialType {
  description: string;
  id: string;
  name: string;
  profile_image: string;
  thumb: string;
  video_type: string;
  testimonial: string;
  video_url: string;
}
